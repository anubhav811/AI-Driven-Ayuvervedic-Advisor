import React from "react";

// Footer component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Made by Anubhav Chachra</h3>
        
        </div>
        <div>
          <div className="flex space-x-4">
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};