import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { containerNavbarVariants, elementNavbarVariants } from "./Variants";

const Nav = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [openNav, setOpenNav] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleResize = () => {
    if (window.innerWidth > 960) {
      setResponsiveNav(false);
    }
  };
  const isScrollGoingDown = useRef(false);
  const lastPositionScroll = useRef(0);
  const scoreUp = useRef(0);
  const scoreDown = useRef(0);
  const getTop = (component) => {
    // Función que calcula la distancia que existe de un componente y hasta arriba de la página
    return parseInt(
      document.querySelector(component).getBoundingClientRect().top +
        document.scrollingElement.scrollTop
    );
  };
  const goto = (where) => {
    setResponsiveNav(false);
    // .about
    const top = getTop(where) - 100;
    window.scroll({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    if (document.scrollingElement.scrollTop >= lastPositionScroll.current) {
      isScrollGoingDown.current = true;
      scoreDown.current = scoreDown.current + 1;
      scoreUp.current = 0;
    } else {
      isScrollGoingDown.current = false;
      scoreDown.current = 0;
      scoreUp.current = scoreUp.current + 1;
    }
    lastPositionScroll.current = document.scrollingElement.scrollTop;
    if (document.scrollingElement.scrollTop <= 50) {
      setOpenNav(true);
    } else {
      if (isScrollGoingDown.current && scoreDown.current >= 10) {
        setOpenNav(false);
      } else if (!isScrollGoingDown.current && scoreUp.current >= 10) {
        setOpenNav(true);
      }
    }
  };
  return (
    <>
      <motion.div
        className={`navbar ${openNav ? "" : "close"}`}
        variants={containerNavbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="navbar-text"
          variants={elementNavbarVariants}
          onClick={() => {
            goto(".about");
          }}
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
            </svg>
          </span>{" "}
          Acerca de mí
        </motion.div>
        <motion.div
          className="navbar-text"
          variants={elementNavbarVariants}
          onClick={() => {
            goto(".work");
          }}
        >
          <span>
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
            </svg>
          </span>
          Proyectos
        </motion.div>
        <motion.div
          className="navbar-text"
          style={{ margin: "0px 60px 0px 0px" }}
          variants={elementNavbarVariants}
        >
          <span>
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
            </svg>
          </span>
          Contáctame
        </motion.div>
        <motion.div
          className="navbar-responsive"
          variants={elementNavbarVariants}
          onClick={() => {
            setResponsiveNav(true);
          }}
        >
          <div className="navbar-responsive-line"></div>
          <div className="navbar-responsive-line"></div>
          <div className="navbar-responsive-line"></div>
        </motion.div>
        <div
          className={`navbar-responsive-container ${
            responsiveNav ? "open" : ""
          }`}
        >
          <div
            className="navbar-responsive-container-back"
            onClick={() => {
              setResponsiveNav(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </div>
          <div
            className="navbar-responsive-container-text"
            onClick={() => {
              goto(".about");
            }}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
              </svg>
            </span>{" "}
            Acerca de mí
          </div>
          <div
            className="navbar-responsive-container-text"
            onClick={() => {
              goto(".work");
            }}
          >
            <span>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
              </svg>
            </span>
            Proyectos
          </div>
          <div className="navbar-responsive-container-text">
            <span>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
              </svg>
            </span>
            Contáctame
          </div>
        </div>
      </motion.div>
      <div className={`navbar-blur ${openNav ? "" : "close"}`}></div>
    </>
  );
};
export default Nav;
