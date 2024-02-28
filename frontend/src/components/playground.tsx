import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown

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
import Markdown from "react-markdown";

const CHAINLIT_SERVER = "http://localhost:8000";
const userEnv = {};

const apiClient = new ChainlitAPI(CHAINLIT_SERVER);

export function Playground() {
  const [inputValue, setInputValue] = useState("");
  const [initialMessageSent, setInitialMessageSent] = useState(false);
  const { sendMessage } = useChatInteract();
  const { messages } = useChatMessages();

  const { connect } = useChatSession();
  const session = useRecoilValue(sessionState);

  useEffect(() => {
    connect({ client: apiClient, userEnv });
  }, [session, connect]);

  const sendInitialMessage = () => {
    const initialMessage: IStep = {
      id: uuidv4(),
      name: "AyurvedaGPT",
      type: "assistant_message",
      output:
        "Hi, I am AyurvedaGPT. I am here to answer your medical queries and provide you with Ayurvedic remedies for the same. You may ask your query now.",
      createdAt: new Date().toISOString(),
    };
    sendMessage(initialMessage, []);
    setInitialMessageSent(true);
  };

  useEffect(() => {
    if (!initialMessageSent) {
      // sendInitialMessage();
    }
  }, [initialMessageSent, sendMessage]);

  const handleSendMessage = () => {
    const content = inputValue.trim();
    if (content) {
      const message: IStep = {
        id: uuidv4(),
        name: "user",
        type: "user_message",
        output: content,
        createdAt: new Date().toISOString(),
      };
      sendMessage(message, []);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-2">
              <div className="w-20 text-sm text-green-500">{message.name}</div>
              <div className="flex-1 border rounded-lg p-2">
                <Markdown>{message.output}</Markdown> 
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t p-4 bg-white dark:bg-gray-800">
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
