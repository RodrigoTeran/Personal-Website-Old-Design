import React, { useEffect, useState } from "react";
import CardRightSide from "./CardRightSide";

const RightSide = () => {
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
    <div className="about-page-right-side">
      {widthPage <= 1000 ? <h1>Acerca de</h1> : null}
      <p>
        Soy un apasionado por la tecnología. En especial la{" "}
        <span>Inteligencia Artificial</span>{" "}
      </p>
      <p>Me gusta resolver problemas con gran atención en el detalle.</p>
      <p>Me apasionan las capacidades que tiene la tecnología.</p>
      <div className="about-page-right-side-card-container">
        <CardRightSide></CardRightSide>
        <CardRightSide></CardRightSide>
      </div>
    </div>
  );
};
export default RightSide;
