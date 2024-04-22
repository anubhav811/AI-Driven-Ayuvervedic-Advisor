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

![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/81e1d1e2-fc08-48f6-99e3-d09269c39908)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/f63dfdf1-c0a7-4ad2-9496-ace29e94dc31)

Users can also utilize the Prakruti Analyzer to find out their Prakruti.
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/11a33e73-e08c-46df-bfd5-d877fc7d318f)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/adb42e71-143f-4ea1-8b99-940a2608df21)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/d7924d26-b51b-4bc4-b41a-c725fc0a035c)


## Results

Upon testing four models:
1. `mistralai/Mistral-7B-Instruct-v0.2`
2. `HuggingFaceH4/zephyr-7b-beta`
3. `google/gemma-7b`
4. `gpt-3.5-turbo-16k`

The results were as follows:

![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/2eba5744-6d52-4b09-9bf3-44396d8c1074)
![image](https://github.com/anubhav811/Capstone-Project-20BIT0104/assets/71807967/23fad014-257a-4fdb-b917-5aa7354f1b26)


In the realm of Ayurvedic queries, where accuracy, relevance, and fidelity to context are paramount, the **Mistral model** emerges as the most suitable choice. With its exemplary faithfulness score of **0.8611**, Mistral ensures that generated answers align closely with the provided context, thereby preserving the accuracy of traditional Ayurvedic knowledge. While other models excel in specific aspects such as answer relevancy (Gemma) or answer correctness (GPT), Mistral strikes a balance by offering a robust performance across all essential metrics, making it the optimal choice for addressing inquiries in Ayurveda with precision and reliability.
