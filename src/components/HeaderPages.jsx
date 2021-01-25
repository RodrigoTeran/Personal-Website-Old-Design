import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  headerIconRectVariants,
  headerIconVariants,
  headerTextVariants,
  headerVariants,
} from "./Variants";

const HeaderPages = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className="pages-header">
      <motion.div
        animate="visible"
        whileHover="hover"
        initial="hidden"
        variants={headerVariants}
      >
        <Link to="/">
          <motion.div variants={headerIconVariants}>
            <svg
              className="pages-header-svg-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
            </svg>
          </motion.div>
          <motion.div variants={headerIconRectVariants}>
            <svg
              className="pages-header-svg-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
            </svg>
          </motion.div>
          <motion.div variants={headerTextVariants}>Inicio</motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};
export default HeaderPages;
