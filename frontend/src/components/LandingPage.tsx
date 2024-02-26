import React from "react";

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg mb-8">Explore the features below:</p>
        <div className="flex justify-center space-x-4">
          <a href="/chatbot" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Go to Chatbot
          </a>
          <a href="/prakruti-analyzer" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Go to Prakruti Analyzer
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
