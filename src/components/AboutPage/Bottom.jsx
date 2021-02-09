import React from "react";
import { motion } from "framer-motion";
import { bottomContainerVariants, bottomCardVariants } from "./Variants";

const CardBottom = ({ title, text }) => {
  return (
    <motion.div
      variants={bottomCardVariants}
      className="about-page-bottom-card"
    >
      <div className="about-page-bottom-card-container">
        <div>{title}</div>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};

const Bottom = () => {
  return (
    <motion.div
      variants={bottomContainerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="about-page-bottom"
    >
      <motion.div
        variants={bottomCardVariants}
        className="about-page-bottom-title"
      >
        <motion.div
          whileHover={{
            y: -10,
            transition: { type: "spring", stiffness: 200 },
          }}
        >
          Intereses
        </motion.div>
        <motion.div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </motion.div>
      </motion.div>
      <CardBottom
        title="Desarrollo Web"
        text="Me obsesiona el rendimiento y capacidades que tienen las tecnologías web."
      ></CardBottom>
      <CardBottom
        title="Inteligencia Artificial"
        text="Los avances de la Inteligencia Artificial son sorprendentes y poderosos."
      ></CardBottom>
      <CardBottom
        title="Calistenia"
        text="Aparte de la tecnología, me encanta el ejercicio. En especial la calistenia y la gimnasia."
      ></CardBottom>
    </motion.div>
  );
};
export default Bottom;
