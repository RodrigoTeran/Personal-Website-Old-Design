import React from "react";
import { motion } from "framer-motion";
import { buttonSocialMediaVariants } from "./Variants";

const SocialMediaButton = ({ onClickFunction, children }) => {
  return (
    <motion.a
      variants={buttonSocialMediaVariants}
      className="social-media-button"
      href={onClickFunction}
      target="blank"
    >
      {children}
    </motion.a>
  );
};
export default SocialMediaButton;
