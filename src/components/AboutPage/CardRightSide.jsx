import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cardVariants, cardAnimTextVariants } from "./Variants";

const CardRightSide = ({ id, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardNeedsToMove, setIsCardNeedsToMove] = useState(true);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    if (window.innerWidth > 1000) {
      setIsCardNeedsToMove(true);
    } else {
      setIsCardNeedsToMove(false);
    }
  };

  const calculateAmountXandY = () => {
    try {
      const windowX = window.innerWidth / 2;
      const windowY = window.innerHeight / 2;
      const distanceX = getLeft(`#${id}`);
      const distanceY = getTop(`#${id}`);
      const resultX = (distanceX - windowX + 150) * -1;
      const resultY = (distanceY - windowY + 75) * -1;
      return { resultX, resultY };
    } catch {
      return { resultX: 1, resultY: 1 };
    }
  };
  const getTop = (component) => {
    return parseInt(
      document.querySelector(component).getBoundingClientRect().top
    );
  };
  const getLeft = (component) => {
    return parseInt(
      document.querySelector(component).getBoundingClientRect().left
    );
  };
  return (
    <>
      <div className="card-about-page-container">
        <motion.div
          className="card-about-page-container-inner"
          id={id}
          animate={
            isCardNeedsToMove ? (isVisible ? "visible" : "hidden") : "hidden"
          }
          style={{
            width:
              window.innerWidth <= 1000
                ? "calc(100% - 60px)"
                : isVisible
                ? "300px"
                : "80%",
          }}
          variants={{
            visible: {
              position: "fixed",
              y: calculateAmountXandY().resultY,
              x: calculateAmountXandY().resultX,
              zIndex: 3,
              transition: {
                duration: 1,
                type: "tween",
              },
            },
            hidden: {
              position: "relative",
              x: 0,
              y: 0,
              transition: {
                duration: 1,
                type: "tween",
              },
            },
          }}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <motion.div
            variants={cardVariants}
            animate={isVisible ? "visible" : "hidden"}
            className="card-about-page-container-inner-sentence-1"
          ></motion.div>
          <motion.div
            variants={cardVariants}
            animate={isVisible ? "visible" : "hidden"}
            className="card-about-page-container-inner-sentence-2"
          ></motion.div>
          <motion.div
            variants={cardVariants}
            animate={isVisible ? "visible" : "hidden"}
            className="card-about-page-container-inner-sentence-3"
          ></motion.div>
          <motion.div
            animate={!isVisible ? "visible" : "hidden"}
            variants={cardAnimTextVariants}
            className="card-about-page-container-animation"
          >
            <p>{text}</p>
          </motion.div>
        </motion.div>
      </div>
      <div
        className={`card-about-page-container-animation-black-wall
          ${isCardNeedsToMove ? (isVisible ? "open" : "") : ""}
          `}
      ></div>
    </>
  );
};
export default CardRightSide;
