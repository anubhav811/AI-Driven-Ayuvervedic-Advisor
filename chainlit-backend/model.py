from langchain.prompts import PromptTemplate
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.llms import HuggingFaceEndpoint
from langchain.chains import RetrievalQA
import chainlit as cl


DB_FAISS_PATH = 'vectorstore/db_faiss'


custom_prompt_template = """You are an Ayurveda Expert . Use the following pieces of information to answer the user's question in detail.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
Context: {context}
Question: {question}
Only return the helpful answer below and nothing else.
Helpful answer:
"""

def set_custom_prompt():
    prompt = PromptTemplate(template=custom_prompt_template,
                            input_variables=['context', 'question'])
    return prompt

#Retrieval QA Chain
def retrieval_qa_chain(llm, prompt, db):
    qa_chain = RetrievalQA.from_chain_type(llm=llm,
                                       chain_type='stuff',
                                       retriever=db.as_retriever(search_kwargs={'k': 2}),
                                       return_source_documents=False,
                                       chain_type_kwargs={'prompt': prompt}
                                       )
    return qa_chain

#Loading the model
def load_llm():
    llm = HuggingFaceEndpoint(
        repo_id="HuggingFaceH4/zephyr-7b-beta", 
        huggingfacehub_api_token="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",
        max_new_tokens = 1024,
        temperature = 0.5,
        model_kwargs={"max_length": 64}
    )
    return llm

#QA Model Function
def qa_bot():
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2",
                                       model_kwargs={'device': 'cpu'})
    db = FAISS.load_local(DB_FAISS_PATH, embeddings)
    llm = load_llm()
    qa_prompt = set_custom_prompt()
    qa = retrieval_qa_chain(llm, qa_prompt, db)
    return qa

#output function
def final_result(query):
    qa_result = qa_bot()
    # print(qa_result)
    response = qa_result({'query': query})
    return response

#chainlit code

@cl.on_chat_start
async def on_chat_start():
    chain = qa_bot()
    cl.user_session.set("chain", chain)
    await cl.Message(content="Hi I am AyurvedaGPT . I am here to answer your medical queries and provide you Ayurvedic remedies for the same. You may ask your query now.").send()

@cl.on_message
async def on_message(message: cl.Message):
    chain = cl.user_session.get("chain") 
    cb = cl.AsyncLangchainCallbackHandler(
        stream_final_answer=True, answer_prefix_tokens=["FINAL", "ANSWER"]
    )
    cb.answer_reached = True
    res = await chain.acall(message.content, callbacks=[cb])
    answer = res["result"]
    await cl.Message(content=answer).send()

