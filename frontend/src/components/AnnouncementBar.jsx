import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const messages = [
    "Deri në 60% ulje në të gjitha produktet!",
    "Shitje Black Friday — Mos e humbisni!",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="w-full bg-black text-white text-center text-sm md:text-base py-1 overflow-hidden">
      <div className="relative h-5 md:h-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full"
          >
            {messages[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
