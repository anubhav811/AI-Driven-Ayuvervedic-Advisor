import pinecone
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import Pinecone
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter


DATA_PATH = 'data/'

loader = DirectoryLoader(DATA_PATH, glob='*.pdf', loader_cls=PyPDFLoader)

documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(chunk_size=500,chunk_overlap=50)

texts = text_splitter.split_documents(documents)

pinecone.init(
        api_key = "5cc567a8-513a-4196-a557-51cbea596182",
        environment = "gcp-starter"
)

index_name = "ayurveda-qa"
index = pinecone.Index(index_name)
# index.describe_index_stats()

embeddings = HuggingFaceEmbeddings(
            model_name='sentence-transformers/all-MiniLM-L6-v2', 
            model_kwargs={
                'device': 'cpu'
                }
            )
docsearch = Pinecone.from_documents(texts, embeddings, index_name = index_name)

print(type(docsearch))
print(docsearch)

