import React from "react";
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
  return (
    <div className="about-page-left-side">
      <Particles
        params={params}
        className="about-page-left-side-particles-container"
      ></Particles>
    </div>
  );
};
export default LeftSide;
