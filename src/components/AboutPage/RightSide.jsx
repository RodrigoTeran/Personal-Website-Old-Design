import React from "react";
import CardRightSide from "./CardRightSide";

const RightSide = () => {
  return (
    <div className="about-page-right-side">
      <p>
        Soy un apasionado por la tecnología. En especial la{" "}
        <span>Inteligencia Artificial</span>{" "}
      </p>
      <p>Me gusta resolver problemas con gran atención en el detalle.</p>
      <p>Me apasionan las capacidades que tiene la tecnología.</p>
      <div className="about-page-right-side-card-container">
        <CardRightSide
          text="Me obsesiona el rendimiento y capacidades que tienen las tecnologías web."
          id="card-about-page-1"
        ></CardRightSide>
        <CardRightSide
          text="Los avances de la Inteligencia Artificial me dan mucha curosidad de estudiar."
          id="card-about-page-2"
        ></CardRightSide>
      </div>
    </div>
  );
};
export default RightSide;
