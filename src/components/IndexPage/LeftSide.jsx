import React from "react";
import ReactTypingEffect from "react-typing-effect";
import IndexPageButton from "../Buttons/IndexPageButton";

const LeftSide = () => {
  return (
    <div className="index-page-left-side">
      <div className="index-page-left-side-container">
        <h1>
          Soy Rodrigo
          <br />
          Terán
        </h1>
        <h2>
          <ReactTypingEffect
            text={[
              "Desarrollador de Aplicaciones Web",
              "Entusiasta de la Tecnología",
              "Amante de los libros",
            ]}
            eraseSpeed={50}
            speed={80}
            typingDelay={600}
          ></ReactTypingEffect>
        </h2>
        <div className="index-page-left-side-buttons-container">
          <IndexPageButton
            onClickFunction={() => {}}
            text="Contáctame"
            type="gradient"
          ></IndexPageButton>
          <IndexPageButton
            onClickFunction={() => {}}
            text="Portafolio"
            type="noGradient"
          ></IndexPageButton>
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
