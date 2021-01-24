import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 200,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
};

const IndexPageButton = ({ onClickFunction, text, type }) => {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className={`index-page-button ${
        type === "gradient" ? "gradient" : "blank"
      }`}
      onClick={onClickFunction}
    >
      {text}
    </motion.button>
  );
};
export default IndexPageButton;
