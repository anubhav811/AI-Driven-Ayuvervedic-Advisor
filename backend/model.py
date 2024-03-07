from langchain.prompts import PromptTemplate
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.llms import HuggingFaceEndpoint
from langchain.chains import RetrievalQA
import chainlit as cl

DB_FAISS_PATH = 'vectorstore/db_faiss'

custom_prompt_template = """
If the question is related to the context of the assistant and user conversation, then answer naturally in short.
If asked about you or your identity, dont refer to previous context.
You are an Ayurveda Advisor. Use the following pieces of information to answer the user's question in detail. When discussing medicines and remedies, ensure to include precautions and exceptions where necessary.
Format the entire answer in markdown format, with bolds, italics, and pointers wherever required.
Only return the helpful answer below and nothing else. For answers exceeding 120 tokens, answer in points.
Context: {context}
Question: {question}
Helpful answer:
"""
def set_custom_prompt():
    prompt = PromptTemplate(template=custom_prompt_template , input_variables=["context","question"])
    return prompt

#Retrieval QA Chain
def retrieval_qa_chain(llm, prompt, db):
    qa_chain = RetrievalQA.from_chain_type(llm=llm,
                                       chain_type='stuff',
                                       retriever=db.as_retriever(search_kwargs={'k': 2}),
                                       return_source_documents=True,
                                       chain_type_kwargs={'prompt': prompt}
                                       )
    return qa_chain

#Loading the model
def load_llm():
    llm = HuggingFaceEndpoint(
        repo_id="mistralai/Mistral-7B-Instruct-v0.2", 
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

#chainlit code
@cl.on_chat_start
async def on_chat_start():
    chain = qa_bot()
    cl.user_session.set("context",[])
    cl.user_session.set("chain", chain)

@cl.on_message
async def on_message(message: cl.Message):
    print("User: "+message.content)
    chain = cl.user_session.get("chain") 
    message_history = cl.user_session.get("context");
    message_history.append({"role":"user","content":message.content});
    cl.user_session.set("context",message_history)
    cb = cl.AsyncLangchainCallbackHandler(
        stream_final_answer=True, answer_prefix_tokens=["FINAL", "ANSWER"]
    )
    cb.answer_reached = True
    message_history = cl.user_session.get("context");
    res = await chain.ainvoke(message.content + str(message_history) , callbacks=[cb])
    answer = res["result"]
    print(answer)
    message_history.append({"role":"assistant","content":answer});


    sources = res["source_documents"]
    print(len(answer))
    if(len(answer)>1000):
        answer = add_sources_to_answer(sources, answer)

    cl.user_session.set("context",message_history)
    await cl.Message(content=answer).send()

class Document:
    def __init__(self, page_content, metadata):
        self.page_content = page_content
        self.metadata = metadata

def add_sources_to_answer(sources, answer):
    if(len(sources)>0):
        answer+=f"\n#### References\n"
        i = 1;
        for source in sources:
            formatted_content = format_source_content(source,i)
            i+=1
            answer += formatted_content
    return answer

def format_source_content(source,i):
    metadata = source.metadata
    page_number = metadata["page"]
    file_name = metadata["source"].split('\\')[-1]
    pdf_link = gdrive_links.get(file_name)
    formatted_content = f"##### {i}.[{file_name}]({pdf_link}), (Page Number: {page_number})\n"
    return formatted_content

gdrive_links = {
    "API-Vol-1" : "https://drive.google.com/file/d/1NwyQCuon88Q9rgzz7xwa0lgnA7W_kxzV/view?usp=sharing",
    "API-Vol-2.1" : "https://drive.google.com/file/d/1zdcoTaixUnjobF02G71GpIe6AilVlBx7/view?usp=sharing",
    "API-Vol-2.2" : "https://drive.google.com/file/d/1zi3JORUjM7UzjUbbvjLo_BemRmiSYEbS/view?usp=sharing",
    "API-Vol-2.3" : "https://drive.google.com/file/d/12xLna2HQ1UFDJM91JdPaTuq6dYyNuOZD/view?usp=sharing",
    "API-Vol-2.4" : "https://drive.google.com/file/d/1oFX_jLICOkt78ASGNk961prZcRWg8L0e/view?usp=sharing",
    "API-Vol-2.5" : "https://drive.google.com/file/d/1pNb-Oqwrh2CEdkbpfqMFVsC3rPRHtXA3/view?usp=sharing",
    "API-Vol-2" : "https://drive.google.com/file/d/1x7xcKYB6PQ8bMzGAmLpDiRJPAkZojNfH/view?usp=sharing",
    "API-Vol-3" : "https://drive.google.com/file/d/1vop08kPq9ZTX663Dsaj4ayXVPU18jYaw/view?usp=sharing",
    "API-Vol-4" : "https://drive.google.com/file/d/11J7hTGRQreMES6jy-_-0LbCxPRd16e1p/view?usp=sharing",
    "API-Vol-5" : "https://drive.google.com/file/d/1232WVvg2pDANF3Fa1YCHoUarJFrKfOWy/view?usp=sharing",
    "API-Vol-6" : "https://drive.google.com/file/d/1jnoEVhG8J2cwsdIMcqnC7qimIu7zwGGV/view?usp=sharing",
    "API-Vol-7" : "https://drive.google.com/file/d/1rodbElae42P7kFm08IM7RfrjX4Ih7DMi/view?usp=sharing",
    "Ayurveda_The_science_of_self_healing_by_Dr_Vasant_Lad" : "https://drive.google.com/file/d/1_9O_77sHqk2eacTDkzAY-wBVc9umEmcq/view?usp=sharing",
    "Ayurvedic_Cooking_for_Self_Healing_by_Usha_Lad_and_Dr_Vasant_Lad" : "https://drive.google.com/file/d/11UXL2uKDb7QSR-xvpcuQfbKCZESvJxAq/view?usp=sharing",
    "Charaka_Samhita_by_Acharya_Charaka" : "https://drive.google.com/file/d/1J3Wb1tj9t-PjLrMzzvOhhh_8IqPNZOZX/view?usp=sharing",
    "The_Yoga_of_Herbs-An_Ayurvedic_guide_to_herbal_medicine_by_Dr_David_Frawley_and_Dr_Vasant_Lad" :"https://drive.google.com/file/d/16mdn9J6OGMNgixW2SsQpakDhhnmvBEZq/view?usp=sharing"
}
