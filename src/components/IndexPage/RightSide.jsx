import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";
import { motion } from "framer-motion";
import {
  independentDivIconVariants,
  independentDivTextVariants,
} from "./Variants";

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="index-page-right-side"
    >
      <div className="index-page-right-side-container">
        <div className="index-page-right-side-independent-1">
          <img
            src={`${
              isWebpSupported
                ? "/images/contact-page-me.webp"
                : "/images/contact-page-me.jpg"
            }`}
            alt="Rodrigo Terán"
          />
        </div>
        <motion.div
          whileHover="visible"
          animate="hidden"
          initial="hidden"
          whileTap="tap"
          className="index-page-right-side-independent-2"
        >
          <motion.div variants={independentDivTextVariants}>
            Estudios
          </motion.div>
          <motion.div variants={independentDivIconVariants}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          className="index-page-right-side-independent-3"
          whileHover="visible"
          animate="hidden"
          initial="hidden"
          whileTap="tap"
        >
          <motion.div variants={independentDivTextVariants}>Trabajo</motion.div>
          <motion.div variants={independentDivIconVariants}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          className="index-page-right-side-independent-4"
          whileHover="visible"
          animate="hidden"
          whileTap="tap"
          initial="hidden"
        >
          <motion.div variants={independentDivTextVariants}>
            Acerca de
          </motion.div>
          <motion.div variants={independentDivIconVariants}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          className="index-page-right-side-independent-5"
          whileHover="visible"
          animate="hidden"
          initial="hidden"
          whileTap="tap"
        >
          <motion.div variants={independentDivTextVariants}>
            Habilidades
          </motion.div>
          <motion.div variants={independentDivIconVariants}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default RightSide;
