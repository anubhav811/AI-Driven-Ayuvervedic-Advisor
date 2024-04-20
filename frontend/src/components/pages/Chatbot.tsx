import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

import {
  useChatInteract,
  useChatMessages,
  IStep,
  useChatSession,
  sessionState,
  ChainlitAPI,
} from "@chainlit/react-client";

import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { ChatMessage } from "../ui/ChatMessage";
import { Shimmer } from "../ui/Shimmer";

const CHAINLIT_SERVER = "http://localhost:8000";
const userEnv = {};

const apiClient = new ChainlitAPI(CHAINLIT_SERVER);

export function Chatbot() {
  const [inputValue, setInputValue] = useState("");
  const { sendMessage } = useChatInteract();
  const [isResponsePending, setIsResponsePending] = useState(false);
  const { messages } = useChatMessages();
  const { connect } = useChatSession();
  const session = useRecoilValue(sessionState);
  const startTime = new Date().toISOString();

  useEffect(() => {
    connect({ client: apiClient, userEnv });
  }, [session, connect]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.name !== "User") {
        setIsResponsePending(false);
      }
    }
  }, [messages]);

  const handleSendMessage = () => {
    const content = inputValue.trim();
    if (content) {
      setIsResponsePending(true);
      const message: IStep = {
        id: uuidv4(),
        name: "User",
        type: "user_message",
        output: content,
        createdAt: new Date().toISOString(),
      };
      sendMessage(message, []);
      setInputValue("");
    }
    console.log(messages)
  };

  const getCurrentDateTime = (isoString: string): string => {
    const datetime = new Date(isoString);
    const hours = datetime.getHours();
    const minutes = datetime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const date = datetime.getDate();
    const month = datetime.getMonth() + 1;
    const year = datetime.getFullYear().toString().slice(-2); 

    const formattedHours = hours % 12 === 0 ? "12" : (hours % 12).toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedDate = date.toString().padStart(2, "0");
    const formattedMonth = month.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${ampm} ${formattedDate}/${formattedMonth}/${year}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col overflow-auto p-6 pb-20">
        <div className="space-y-4">
          <ChatMessage
            name="Chatbot"
            time={getCurrentDateTime(startTime)}
            content="Hi I am your personal Ayurvedic Advisor. I am here to answer your medical queries and provide you Ayurvedic remedies for the same. You may ask your query now."
          />
      
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              name={message.name}
              time={getCurrentDateTime(new Date().toISOString())}
              content={message.output}
            />
          ))}
          {isResponsePending && <Shimmer />}
        </div>
      </div>
      <div className="border-t p-4 bg-white dark:bg-gray-800 fixed bottom-0 left-0 right-0">
        <div className="flex items-center space-x-2">
          <Input
            autoFocus
            className="flex-1"
            id="message-input"
            placeholder="Type a message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage} type="submit">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
} 
