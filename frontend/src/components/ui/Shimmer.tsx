import { motion } from "framer-motion";

export const Shimmer = () => {
    return (
      <motion.div
        className="flex items-start gap-2.5 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <div className="flex flex-col w-full max-w leading-1.5 p-4 bg-gray-200 rounded-e-xl rounded-es-xl">
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/4" />
          <div className="h-3 bg-gray-300 rounded mb-2 w-3/4" />
          <div className="h-3 bg-gray-300 rounded mb-2 w-1/2" />
        </div>
      </motion.div>
    );
  };