import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#DDF8E8] dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div
          className="mr-auto place-self-center lg:col-span-7"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            AI-powered Ayurvedic Assistant
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Revitalize Your Well-being with our AI-Powered Ayurvedic Assistant:
            Your Personalized Path to Holistic Health and Balance
          </p>
          <Link
            to="/"
            onClick={() => {
              const features = document.getElementById("features");
              features &&
                features.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
          >
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#171717,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Get Started
          
            
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img src="ayurveda.png" />
        </motion.div>
      </div>
    </motion.section>
  );
};
