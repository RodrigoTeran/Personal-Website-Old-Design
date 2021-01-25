import React from "react";
import { motion } from "framer-motion";
import { buttonIndexVariants } from "./Variants";

const IndexPageButton = ({ onClickFunction, text, type }) => {
  return (
    <motion.button
      variants={buttonIndexVariants}
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
