import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  independentDivIconVariants,
  independentDivTextVariants,
} from "./Variants";

const IndependentDiv = ({ text, link, number }) => {
  return (
    <motion.div
      className={`index-page-right-side-independent-${number}`}
      whileHover="visible"
      animate="hidden"
      whileTap="tap"
      initial="hidden"
    >
      <motion.div variants={independentDivTextVariants}>
        <Link to={link}>{text}</Link>
      </motion.div>
      <motion.div variants={independentDivIconVariants}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      exit={{
        sacle: 0.8,
        opacity: 0,
        transition: { type: "tween", delay: 0.3 },
      }}
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
        <IndependentDiv text="Estudios" link="/acerca-de" number="2" />
        <IndependentDiv text="Trabajo" link="/trabajo" number="3" />
        <IndependentDiv text="Acerca de" link="/acerca-de" number="4" />
        <IndependentDiv text="Habilidades" link="/acerca-de" number="5" />
      </div>
    </motion.div>
  );
};
export default RightSide;
