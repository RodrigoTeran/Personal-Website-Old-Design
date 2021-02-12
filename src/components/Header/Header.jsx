import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { isWebpSupported } from "react-image-webp/dist/utils";
import HeaderButton from "./Button";
import { motion } from "framer-motion";
import {
  sentenceVariants,
  buttonsContainerVariants,
  letterVariants,
  imageVariants,
} from "./Variants";

const Header = () => {
  const h1Text1 = "Soy Rodrigo";
  const h1Text2 = "Terán";
  return (
    <header className="header">
      <div className="header-left">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sentenceVariants}
        >
          <div className="header-sentence">
            {h1Text1.split("").map((char, index) => {
              return (
                <motion.div
                  style={{
                    marginRight: index === 2 ? "20px" : "",
                  }}
                  className="header-letter"
                  variants={letterVariants}
                  key={`${char}-${index}`}
                  whileHover={{ y: -30 }}
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
          <div className="header-sentence">
            {h1Text2.split("").map((char, index) => {
              return (
                <motion.div
                  className="header-letter"
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
          className="header-buttons-container"
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeaderButton
            onClickFunction={() => {}}
            text="Contáctame"
            type="gradient"
          ></HeaderButton>
          <HeaderButton
            onClickHref="/Profile.pdf"
            text="Portafolio"
            type="noGradient"
          ></HeaderButton>
        </motion.div>
      </div>
      <motion.div
        className="header-right"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={`${
            isWebpSupported
              ? "/images/contact-page-me.webp"
              : "/images/contact-page-me.jpg"
          }`}
          alt="Rodrigo Terán"
        />
      </motion.div>
    </header>
  );
};
export default Header;
