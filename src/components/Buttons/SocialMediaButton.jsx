import React from "react";
import { motion } from "framer-motion";
import { buttonSocialMediaVariants } from "./Variants";

const SocialMediaButton = ({ onClickFunction, children }) => {
  return (
    <motion.button
      variants={buttonSocialMediaVariants}
      className="social-media-button"
      onClick={onClickFunction}
    >
      {children}
    </motion.button>
  );
};
export default SocialMediaButton;
