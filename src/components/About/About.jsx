import React, { useState } from "react";
// import { motion } from "framer-motion";
import { getMergeSortAnimations } from "./SortingAlgorithms";

const ANIMATION_SPEED_MS = 10;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#43f7d5";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "rgba(58, 54, 242, 1)";

const About = () => {
  const skills = [
    { skill: "HTML", level: 72 },
    { skill: "CSS", level: 58 },
    { skill: "JS", level: 84 },
    { skill: "React", level: 80 },
    { skill: "Node", level: 79 },
    { skill: "Django", level: 27 },
    { skill: "Mongo DB", level: 46 },
    { skill: "Python", level: 78 },
    { skill: "Next JS", level: 59 },
    { skill: "JQuery", level: 69 },
  ];
  const skillsSorted = [
    { skill: "Django", level: 27 },
    { skill: "Mongo DB", level: 46 },
    { skill: "Next JS", level: 59 },
    { skill: "CSS", level: 58 },
    { skill: "JQuery", level: 69 },
    { skill: "HTML", level: 72 },
    { skill: "Python", level: 78 },
    { skill: "Node", level: 79 },
    { skill: "React", level: 80 },
    { skill: "JS", level: 84 },
  ];
  const [isSorted, setIsSorted] = useState(false);
  const arraySkills = [80, 68, 92, 88, 88, 35, 54, 86, 67, 77];
  const mergeSort = () => {
    const animations = getMergeSortAnimations(arraySkills);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName(
        "about-container-right-sort-action-row-level"
      );
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newWidth] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.width = `${newWidth}%`;
          setIsSorted(true);
        }, i * ANIMATION_SPEED_MS);
        setIsSorted(true);
      }
    }
  };
  return (
    <div className="about">
      <h2>Acerca de mí</h2>
      <div className="about-container">
        <div className="about-container-left">
          <p>Hola, me llamo Rodrigo Terán. Vivo en Querétaro México.</p>
          <p>
            Soy un apasionado de la tecnología, en especial la{" "}
            <span>Inteligencia Artificial.</span> Me meta es crear herramientas
            tecnológicas con un rendimiento increíble.
          </p>
          <p>
            Estudio en la Prepa Tec Querétaro. He desarrollado desde
            videojuegos, aplicaciones de teléfono, páginas web, servidores y
            más.
          </p>
        </div>
        <div className="about-container-right">
          <p>
            Algunas tecnologías con las que he estado trabajando recientemente:{" "}
          </p>
          <div className="about-container-right-sort">
            <div className="about-container-right-sort-selection">
              <button onClick={mergeSort}>Merge Sort</button>
              <span>Ordenado</span>
              <div>
                {isSorted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                  </svg>
                )}
              </div>
            </div>
            <div className="about-container-right-sort-action">
              {isSorted ? (
                <>
                  {skillsSorted.map((objeto, index) => {
                    return (
                      <div
                        key={index}
                        className="about-container-right-sort-action-row"
                      >
                        <div
                          style={{ width: `${objeto.level}%` }}
                          className="about-container-right-sort-action-row-level"
                        ></div>
                        <div className="about-container-right-sort-action-row-skill">
                          {objeto.skill}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  {skills.map((objeto, index) => {
                    return (
                      <div
                        key={index}
                        className="about-container-right-sort-action-row"
                      >
                        <div
                          style={{ width: `${objeto.level}%` }}
                          className="about-container-right-sort-action-row-level"
                        ></div>
                        <div className="about-container-right-sort-action-row-skill">
                          {objeto.skill}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
