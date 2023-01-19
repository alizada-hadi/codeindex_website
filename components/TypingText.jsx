import React from "react";
import { motion } from "framer-motion";
export default function TypingText({ text, textStyle }) {
  return (
    <motion.p
      variants={{
        hidden: { opacity: 0 },
        show: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
        }),
      }}
      className={` ${textStyle}`}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                type: "tween",
                ease: "easeIn",
              },
            },
          }}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}
