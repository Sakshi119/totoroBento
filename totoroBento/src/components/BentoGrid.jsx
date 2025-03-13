import React from "react";
import { motion } from "framer-motion";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 gridContainer min-h-screen">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="gridItem rounded-lg p-6 flex items-center justify-center text-white font-bold text-xl shadow-lg"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Section {index + 1}
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
