import React from "react";
import ReactTypingEffect from "react-typing-effect";
import IndexPageButton from "../Buttons/IndexPageButton";
import { motion } from "framer-motion";
import {
  sentenceVariants,
  buttonsContainerVariants,
  letterVariants,
} from "./Variants";

const LeftSide = () => {
  const h1Text1 = "Soy Rodrigo";
  const h1Text2 = "Terán";
  return (
    <div className="index-page-left-side">
      <div className="index-page-left-side-container">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sentenceVariants}
          exit="exit"
        >
          <div className="index-page-left-side-div-sentence">
            {h1Text1.split("").map((char, index) => {
              return (
                <motion.div
                  style={{ marginRight: char === "y" ? "20px" : "" }}
                  className="index-page-left-side-div-letter"
                  variants={letterVariants}
                  key={`${char}-${index}`}
                  whileHover={{ y: -30 }}
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
          <div className="index-page-left-side-div-sentence">
            {h1Text2.split("").map((char, index) => {
              return (
                <motion.div
                  className="index-page-left-side-div-letter"
                  variants={letterVariants}
                  key={`${char}-${index}`}
                  whileHover={{ y: -30 }}
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          exit={{
            scale: 0.8,
            opacity: 0,
            transition: { type: "tween", delay: .1 },
          }}
        >
          <ReactTypingEffect
            text={[
              "Desarrollador de Aplicaciones Web",
              "Entusiasta de la Tecnología",
              "Amante de los libros",
            ]}
            eraseSpeed={50}
            speed={80}
            typingDelay={600}
          ></ReactTypingEffect>
        </motion.h2>
        <motion.div
          className="index-page-left-side-buttons-container"
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <IndexPageButton
            onClickFunction={() => {}}
            text="Contáctame"
            type="gradient"
          ></IndexPageButton>
          <IndexPageButton
            onClickFunction={() => {}}
            text="Portafolio"
            type="noGradient"
          ></IndexPageButton>
        </motion.div>
      </div>
    </div>
  );
};
export default LeftSide;
