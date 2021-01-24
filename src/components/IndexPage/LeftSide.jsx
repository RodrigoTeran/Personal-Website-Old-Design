import React from "react";
import ReactTypingEffect from "react-typing-effect";
import IndexPageButton from "../Buttons/IndexPageButton";
import { motion } from "framer-motion";

const sentenceVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const buttonsContainerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const letterVariants = {
  hidden: {
    scaleY: 0,
    originY: "100%",
    color: "#43f7d5",
  },
  visible: {
    scaleY: 1,
    originY: "100%",
    color: "#fff",
    transition: { type: "spring", stiffness: 200 },
  },
};

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
        >
          <div className="index-page-left-side-div-sentence">
            {h1Text1.split("").map((char, index) => {
              return (
                <motion.div
                  style={{ marginRight: char === "y" ? "20px" : "" }}
                  className="index-page-left-side-div-letter"
                  variants={letterVariants}
                  key={`${char}-${index}`}
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
                  // whileHover="whileHover"
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
        </motion.h1>
        <h2>
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
        </h2>
        <motion.div
          className="index-page-left-side-buttons-container"
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
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