// React
import React from "react";

// For typing effect
import ReactTypingEffect from "react-typing-effect";

// Utils for webp support
import { isWebpSupported } from "react-image-webp/dist/utils";

// Components
import HeaderButton from "./Button";

// Framer motion
import { motion } from "framer-motion";

// Functions
import { goto } from "../../../functions/goTo";

// Variants
import {
  sentenceVariants,
  buttonsContainerVariants,
  letterVariants,
  imageVariants,
} from "./Variants";

const Header = ({ contactRef }) => {
  const h1Text1 = "Soy Rodrigo";
  const h1Text2 = "Terán";
  return (
    <header className="portfolioHeader">
      <div className="portfolioHeader__left">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sentenceVariants}
        >
          <div className="portfolioHeader__sentence">
            {h1Text1.split("").map((char, index) => {
              return (
                <motion.div
                  style={{
                    marginRight: index === 2 ? "20px" : "",
                  }}
                  className="portfolioHeader__letter"
                  variants={letterVariants}
                  key={`${char}-${index}`}
                  whileHover={{ y: -30 }}
                >
                  {char}
                </motion.div>
              );
            })}
          </div>
          <div className="portfolioHeader__sentence">
            {h1Text2.split("").map((char, index) => {
              return (
                <motion.div
                  className="portfolioHeader__letter"
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
          className="portfolioHeader__buttonsContainer"
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeaderButton
            onClickFunction={() => {
              goto(contactRef);
            }}
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
        className="portfolioHeader__right"
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
