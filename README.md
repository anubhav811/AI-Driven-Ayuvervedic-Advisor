# AI-Driven Ayurvedic Advisor: A Conversational Chatbot

In response to the escalating challenges of stress-related disorders and chronic health conditions, there is a growing demand for comprehensive wellness solutions merging traditional practices with modern technology. This project presents an innovative approach that combines ancient Ayurvedic wisdom with cutting-edge AI technologies, particularly chatbots built upon Large Language Models (LLMs), essentially developing a conversational health assistant. 

The project encompasses fine-tuning LLM models that work by retrieving data from Ayurvedic texts, developing an intuitive conversational assistant, and analyzing users' psychosomatic constitution (Prakruti) to offer personalized health recommendations aligned with Ayurvedic principles. Through a systematic literature survey, the project explores various methodologies and applications related to LLMs and their integration with different domains, emphasizing responsible development and continued research. The proposed architecture lays out the essential components such as the Prakruti Analyzer for personalized assessment and a Chatbot for natural language interactions, supported by advanced embedding models and storage mechanisms. Through a systematic approach, the project strives to create a user-friendly platform for holistic health management, merging Ayurvedic knowledge with state-of-the-art AI technology.

## Setup

Clone the repository:
```bash
git clone https://github.com/anubhav811/Capstone-Project-20BIT0104.git
```

### Backend

Navigate to the backend directory:
In the root directory, run
```bash
cd backend
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Create a `.env` file and add the following:
```
HUGGINGFACEHUB_API_TOKEN = "YOUR_API_KEY"
OPENAI_API_KEY="YOUR_API_KEY"
```

Run the backend server:
```bash
chainlit run model.py -h
```

The backend server will run on localhost:8000.

### Frontend

Navigate to the frontend directory:
In the root directory, run
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Run the frontend development server:
```bash
npm run dev
```

## Usage

Once both the backend and frontend are running, users can navigate to the chatbot section on the website and start asking queries.
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/5eb1b7e6-c04a-4d35-b548-374462e9c820)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/b87e1464-0d2f-47e9-80e7-29b4318172e5)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/3f9755d6-3f7a-49d5-a03d-49655365ca2e)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/8a837b9b-8af7-4c49-b453-a49e79598dac)

Users can also utilize the Prakruti Analyzer to find out their Prakruti.
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/499193fd-731a-44c2-8522-d0eb7e40cc34)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/0ab2f3f3-e820-4022-b402-8e2e2301d6c6)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/82893485-537c-415f-bc47-16973bc3ad40)


## Results

Upon testing four models:
1. `mistralai/Mistral-7B-Instruct-v0.2`
2. `HuggingFaceH4/zephyr-7b-beta`
3. `google/gemma-7b`
4. `gpt-3.5-turbo-16k`

The results were as follows:

![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/2eba5744-6d52-4b09-9bf3-44396d8c1074)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/d8e33e62-b72a-470b-8eeb-bcb542124312)


In the realm of Ayurvedic queries, where accuracy, relevance, and fidelity to context are paramount, the **Mistral model** emerges as the most suitable choice. With its exemplary faithfulness score of **0.8611**, Mistral ensures that generated answers align closely with the provided context, thereby preserving the accuracy of traditional Ayurvedic knowledge. While other models excel in specific aspects such as answer relevancy (Gemma) or answer correctness (GPT), Mistral strikes a balance by offering a robust performance across all essential metrics, making it the optimal choice for addressing inquiries in Ayurveda with precision and reliability.


## About the Author

This project, "AI-Driven Ayurvedic Advisor: A Conversational Chatbot," was developed as the capstone project by Anubhav Chachra (Reg. No 20BIT0104) for VIT Vellore. 

Project report: [Link](https://drive.google.com/drive/folders/1s_XHT2YfJh1OPXzm4nVIuuZqYxlvhlCi?usp=sharing)

---

Feel free to contact Anubhav Chachra for any inquiries or collaborations related to this project.
