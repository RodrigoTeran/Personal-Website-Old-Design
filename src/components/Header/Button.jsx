import React from "react";
import { motion } from "framer-motion";
import { buttonHeaderVariants } from "./Variants";

const HeaderButton = ({ onClickFunction, text, type, onClickHref }) => {
  return (
    <motion.button
      variants={buttonHeaderVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      className={`header-button ${type === "gradient" ? "gradient" : "blank"}`}
      onClick={onClickFunction}
    >
      {onClickHref ? (
        <a target="_blank" rel="noreferrer noopener" href={onClickHref}>
          {text}
        </a>
      ) : (
        text
      )}
    </motion.button>
  );
};
export default HeaderButton;
