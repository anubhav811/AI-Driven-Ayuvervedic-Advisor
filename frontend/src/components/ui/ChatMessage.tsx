import { motion } from "framer-motion";
import React from "react";
import Markdown from "react-markdown";

interface ChatMessageProps {
  name: string;
  time: string;
  content: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  name,
  time,
  content,
}) => {
  const isFromChatbot = name === "Chatbot";
  return (
    <motion.div
      className="flex items-start gap-2.5 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <img
        className="w-8 h-8 rounded-full border-gray-500"
        src={isFromChatbot ? "/logo.png" : "/user.png"}
        alt={isFromChatbot ? "Chatbot Logo" : "User Avatar"}
      />
      <div className="flex flex-col w-full max-w leading-1.5 p-4 border-gray-200 bg-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </div>
        <motion.div
          className="flex items-start gap-2.5 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Markdown className="markdown">{content}</Markdown>
        </motion.div>
      </div>
    </motion.div>
  );
};
