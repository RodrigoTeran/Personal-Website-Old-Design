import React from "react";
import { Helmet } from "react-helmet";
import HeaderPages from "../components/HeaderPages";
import Top from "../components/AboutPage/Top";
import Bottom from "../components/AboutPage/Bottom";

import { motion } from "framer-motion";
import {
  sentenceVariants,
  letterVariants,
} from "../components/IndexPage/Variants";

const About = () => {
  const h1Text1 = "Acerca de";
  return (
    <>
      <Helmet>
        <title>Acerca de - Rodrigo Terán Hernández</title>
        <meta
          name="description"
          content="Portafolio personal - Rodrigo Terán Hernández. Acerca de Rodrigo."
        />
      </Helmet>
      <main className="about-page">
        <HeaderPages></HeaderPages>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sentenceVariants}
          exit="exit"
        >
          <div className="h1-about-page">
            {h1Text1.split("").map((char, index) => {
              return (
                <motion.div
                  style={{ marginRight: char === "a" ? "20px" : "" }}
                  className="h1-about-page-letter"
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
        <div className="about-page-container">
          <Top></Top>
          <Bottom></Bottom>
        </div>
      </main>
    </>
  );
};
export default About;
