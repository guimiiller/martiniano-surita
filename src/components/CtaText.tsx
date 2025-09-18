"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"; 
 
export default function CtaText() {
    const texts = [
        "Proteja seus direitos com quem entende de justiça.",
        "Defendemos sua causa com estratégia e experiência.",
    ];

  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    if (index === 0) {
      const timer = setTimeout(() => setIndex(1), 3000);
      return () => clearTimeout(timer);
    }

    if (index === 1) {
      setDone(true);
    }
  }, [index, done]);

  return(
    <AnimatePresence mode="wait">
        <motion.h1
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
        >
            {texts[index]}
        </motion.h1>
    </AnimatePresence>
  )


}