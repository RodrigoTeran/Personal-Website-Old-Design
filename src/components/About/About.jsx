import React, { useState, useEffect } from "react";
import {
  getMergeSortAnimations,
  skillsSorted,
  skills,
} from "./SortingAlgorithms";

const ANIMATION_SPEED_MS = 10;
const PRIMARY_COLOR = "#43f7d5";
const SECONDARY_COLOR = "rgba(58, 54, 242, 1)";

const About = () => {
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
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = () => {
    var listaComponentes = [
      ".h2-about",
      ".p1-about",
      ".p2-about",
      ".p3-about",
      ".cards-about",
      ".p-title-right-about",
      ".about-container-right-sort-selection",
      ".about-container-right-sort-action",
    ];
    for (var i = 0; i < listaComponentes.length; i++) {
      const top = getTop(listaComponentes[i]);
      if (
        document.scrollingElement.scrollTop >=
        top - window.innerHeight / 1.2
      ) {
        if (i === 0) {
          setIsH2(true);
        } else if (i === 1) {
          setIsP1(true);
        } else if (i === 2) {
          setIsP2(true);
        } else if (i === 3) {
          setIsP3(true);
        } else if (i === 4) {
          setIsCards(true);
        } else if (i === 5) {
          setIsTitleRight(true);
        } else if (i === 6) {
          setIsContainerButtonRight(true);
        } else {
          setIsSkills(true);
        }
      }
    }
  };
  const getTop = (component) => {
    // Función que calcula la distancia que existe de un componente y hasta arriba de la página
    return parseInt(
      document.querySelector(component).getBoundingClientRect().top +
        document.scrollingElement.scrollTop
    );
  };
  const [isH2, setIsH2] = useState(false);
  const [isP1, setIsP1] = useState(false);
  const [isP2, setIsP2] = useState(false);
  const [isP3, setIsP3] = useState(false);
  const [isCards, setIsCards] = useState(false);
  const [isTitleRight, setIsTitleRight] = useState(false);
  const [isContainerButtonRight, setIsContainerButtonRight] = useState(false);
  const [isSkills, setIsSkills] = useState(false);

  return (
    <div className="about">
      <h2 className={`${isH2 ? "" : "not-appear-about"} h2-about`}>
        Acerca de mí
      </h2>
      <div className="about-container">
        <div className="about-container-left">
          <p className={`p1-about ${isP1 ? "" : "not-appear-about"}`}>
            Hola, me llamo Rodrigo Terán. Vivo en Querétaro México.
          </p>
          <p className={`p2-about ${isP2 ? "" : "not-appear-about"}`}>
            Soy un apasionado de la tecnología, en especial la{" "}
            <span>Inteligencia Artificial.</span> Mi meta es crear herramientas
            tecnológicas con un rendimiento increíble.
          </p>
          <p className={`p3-about ${isP3 ? "" : "not-appear-about"}`}>
            Estudio en la Prepa Tec Querétaro. He desarrollado desde
            videojuegos, aplicaciones de teléfono, páginas web, servidores y
            más.
          </p>
          <div className={`cards-about ${isCards ? "" : "not-appear-about"}`}>
            <div className="cards-about-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" />
              </svg>
            </div>
            <div className="cards-about-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
              </svg>
            </div>
            <div className="cards-about-card">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zM123.206 400.505a5.4 5.4 0 0 1-7.633.246l-64.866-60.812a5.4 5.4 0 0 1 0-7.879l64.866-60.812a5.4 5.4 0 0 1 7.633.246l19.579 20.885a5.4 5.4 0 0 1-.372 7.747L101.65 336l40.763 35.874a5.4 5.4 0 0 1 .372 7.747l-19.579 20.884zm51.295 50.479l-27.453-7.97a5.402 5.402 0 0 1-3.681-6.692l61.44-211.626a5.402 5.402 0 0 1 6.692-3.681l27.452 7.97a5.4 5.4 0 0 1 3.68 6.692l-61.44 211.626a5.397 5.397 0 0 1-6.69 3.681zm160.792-111.045l-64.866 60.812a5.4 5.4 0 0 1-7.633-.246l-19.58-20.885a5.4 5.4 0 0 1 .372-7.747L284.35 336l-40.763-35.874a5.4 5.4 0 0 1-.372-7.747l19.58-20.885a5.4 5.4 0 0 1 7.633-.246l64.866 60.812a5.4 5.4 0 0 1-.001 7.879z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="about-container-right">
          <p
            className={`p-title-right-about ${
              isTitleRight ? "" : "not-appear-about"
            }`}
          >
            Algunas tecnologías con las que he estado trabajando recientemente:{" "}
          </p>
          <div className="about-container-right-sort">
            <div
              className={`about-container-right-sort-selection ${
                isContainerButtonRight ? "" : "not-appear-about"
              }`}
            >
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
            <div
              className={`about-container-right-sort-action 
              ${isSkills ? "" : "not-appear-about"}
              `}
            >
              {isSorted ? (
                <>
                  {skillsSorted.map((objeto, index) => {
                    return (
                      <div
                        key={index}
                        className={`about-container-right-sort-action-row`}
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
