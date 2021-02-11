import React from "react";
import { motion } from "framer-motion";
import { buttonHeaderVariants } from "./Variants";

const HeaderButton = ({ onClickFunction, text, type }) => {
  return (
    <motion.button
      variants={buttonHeaderVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className={`header-button ${
        type === "gradient" ? "gradient" : "blank"
      }`}
      onClick={onClickFunction}
    >
      {text}
    </motion.button>
  );
};
export default HeaderButton;