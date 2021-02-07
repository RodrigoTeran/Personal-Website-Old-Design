import React from "react";
import { Helmet } from "react-helmet";
import HeaderPages from "../components/HeaderPages";
import { motion } from "framer-motion";
import {
  sentenceVariants,
  letterVariants,
} from "../components/IndexPage/Variants";

import WebApps from "../components/WorkPage/WebApps";

const Work = () => {
  const h1Text1 = "Trabajo";
  return (
    <>
      <Helmet>
        <title>Trabajo - Rodrigo Terán Hernández</title>
        <meta
          name="description"
          content="Portafolio personal - Rodrigo Terán Hernández. Trabajo de Rodrigo."
        />
      </Helmet>
      <main className="work-page">
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
        <div className="work-page-container">
          <WebApps></WebApps>
        </div>
      </main>
    </>
  );
};
export default Work;
