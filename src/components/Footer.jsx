import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const messages = ["© Haseeth Vardhan", "Made with ♥️"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 text-[#ffffffd7] font-poppins text-sm relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={messages[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full text-center"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Footer;
