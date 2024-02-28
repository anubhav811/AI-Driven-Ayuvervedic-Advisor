import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
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
            <Link to="https://github.com/anubhav811" target="_blank" className="text-gray-400 hover:text-white text-2xl">
            <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link to="https://www.linkedin.com/in/anubhav-chachra-80531217a/" target="_blank" className="text-gray-400 hover:text-white text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};