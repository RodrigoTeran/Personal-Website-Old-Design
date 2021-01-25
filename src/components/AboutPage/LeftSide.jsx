import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";

const params = {
  particles: {
    number: {
      value: 80,
    },
    size: {
      value: 2,
    },
    color: {
      value: "#ffffff",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

const LeftSide = () => {
  const [widthPage, setWidthPage] = useState(0);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setWidthPage(window.innerWidth);
  };
  return (
    <div className="about-page-left-side">
      {widthPage <= 1000 ? null : (
        <h1 className="h1-left-side-about-page">Acerca de</h1>
      )}
      <Particles
        params={params}
        className="about-page-left-side-particles-container"
      ></Particles>
    </div>
  );
};
export default LeftSide;
