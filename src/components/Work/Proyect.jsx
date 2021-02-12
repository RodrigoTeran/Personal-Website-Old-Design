import React, { useEffect, useState } from "react";

const Proyect = ({
  imgSrc,
  name,
  description,
  arrayTechnologies,
  linkToProyect,
  mode,
  id,
}) => {
  const [stateForRender, setStateForRender] = useState(false);
  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleResize = () => {
    setStateForRender(!stateForRender);
  };
  const handleScroll = () => {
    var listaComponentes = [
      "#proyect-image-1",
      "#mode-proyect-all-1",
      "#mode-proyect-all-des-1",
      "#mode-proyect-all-array-1",
      "#mode-proyect-all-link-1",
      "#proyect-image-2",
      "#mode-proyect-all-2",
      "#mode-proyect-all-des-2",
      "#mode-proyect-all-array-2",
      "#mode-proyect-all-link-2",
    ];
    for (var i = 0; i < listaComponentes.length; i++) {
      const top = getTop(listaComponentes[i]);
      if (document.scrollingElement.scrollTop >= top - window.innerHeight / 1.2) {
        if (i === 0) {
          setProyectImage1(true);
        } else if (i === 1) {
          setModeProyectAll1(true);
        } else if (i === 2) {
          setModeProyectAllDes1(true);
        } else if (i === 3) {
          setModeProyectAllArray1(true);
        } else if (i === 4) {
          setModeProyectAllLink1(true);
        } else if (i === 5) {
          setProyectImage2(true);
        } else if (i === 6) {
          setModeProyectAll2(true);
        } else if (i === 7) {
          setModeProyectAllDes2(true);
        } else if (i === 8) {
          setModeProyectAllArray2(true);
        } else if (i === 9) {
          setModeProyectAllLink2(true);
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
  const [proyectImage1, setProyectImage1] = useState(false);
  const [modeProyectAll1, setModeProyectAll1] = useState(false);
  const [modeProyectAllDes1, setModeProyectAllDes1] = useState(false);
  const [modeProyectAllArray1, setModeProyectAllArray1] = useState(false);
  const [modeProyectAllLink1, setModeProyectAllLink1] = useState(false);

  const [proyectImage2, setProyectImage2] = useState(false);
  const [modeProyectAll2, setModeProyectAll2] = useState(false);
  const [modeProyectAllDes2, setModeProyectAllDes2] = useState(false);
  const [modeProyectAllArray2, setModeProyectAllArray2] = useState(false);
  const [modeProyectAllLink2, setModeProyectAllLink2] = useState(false);

  return (
    <div className="proyect">
      {stateForRender ? null : null}
      {mode === "1" ? (
        <>
          <div
            className={`proyect-image ${
              id === "1"
                ? proyectImage1
                  ? ""
                  : "not-appear-about"
                : proyectImage2
                ? ""
                : "not-appear-about"
            }`}
            id={`proyect-image-${id}`}
          >
            <img src={imgSrc} alt={name} />
          </div>
          <div className="proyect-info">
            <h3
              className={`mode-proyect-1 ${
                id === "1"
                  ? modeProyectAll1
                    ? ""
                    : "not-appear-about"
                  : modeProyectAll2
                  ? ""
                  : "not-appear-about"
              }`}
              id={`mode-proyect-all-${id}`}
            >
              {name}
            </h3>
            <div
              className={`proyect-info-description mode-proyect-1 ${
                id === "1"
                  ? modeProyectAllDes1
                    ? ""
                    : "not-appear-about"
                  : modeProyectAllDes2
                  ? ""
                  : "not-appear-about"
              }`}
              id={`mode-proyect-all-des-${id}`}
            >
              {description}
            </div>
            <div
              className={`proyect-info-array mode-proyect-1 ${
                id === "1"
                  ? modeProyectAllArray1
                    ? ""
                    : "not-appear-about"
                  : modeProyectAllArray2
                  ? ""
                  : "not-appear-about"
              }`}
              id={`mode-proyect-all-array-${id}`}
            >
              {arrayTechnologies.map((name) => {
                return (
                  <div
                    key={name}
                    className="proyect-info-array-element mode-proyect-1"
                  >
                    {name}
                  </div>
                );
              })}
            </div>
            <div
              className={`proyect-info-link mode-proyect-1 ${
                id === "1"
                  ? modeProyectAllLink1
                    ? ""
                    : "not-appear-about"
                  : modeProyectAllLink2
                  ? ""
                  : "not-appear-about"
              }`}
              id={`mode-proyect-all-link-${id}`}
            >
              <a href={linkToProyect} target="_blank" rel="noreferrer noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" />
                </svg>
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          {window.innerWidth < 960 ? null : (
            <div className="proyect-info">
              <h3
                className={`mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAll1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAll2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-${id}`}
              >
                {name}
              </h3>
              <div
                className={`proyect-info-description mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAllDes1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAllDes2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-des-${id}`}
              >
                {description}
              </div>
              <div
                className={`proyect-info-array mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAllArray1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAllArray2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-array-${id}`}
              >
                {arrayTechnologies.map((name) => {
                  return (
                    <div
                      key={name}
                      className="proyect-info-array-element mode-proyect-2"
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
              <div
                className={`proyect-info-link mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAllLink1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAllLink2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-link-${id}`}
              >
                <a
                  href={linkToProyect}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" />
                  </svg>
                </a>
              </div>
            </div>
          )}
          <div
            className={`proyect-image ${
              id === "1"
                ? proyectImage1
                  ? ""
                  : "not-appear-about"
                : proyectImage2
                ? ""
                : "not-appear-about"
            }`}
            id={`proyect-image-${id}`}
          >
            <img src={imgSrc} alt={name} />
          </div>
          {window.innerWidth < 960 ? (
            <div className="proyect-info">
              <h3
                className={`mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAll1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAll2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-${id}`}
              >
                {name}
              </h3>
              <div
                className={`proyect-info-description mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAllDes1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAllDes2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-des-${id}`}
              >
                {description}
              </div>
              <div
                className={`proyect-info-array mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAllArray1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAllArray2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-array-${id}`}
              >
                {arrayTechnologies.map((name) => {
                  return (
                    <div
                      key={name}
                      className="proyect-info-array-element mode-proyect-2"
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
              <div
                className={`proyect-info-link mode-proyect-2 ${
                  id === "1"
                    ? modeProyectAllLink1
                      ? ""
                      : "not-appear-about"
                    : modeProyectAllLink2
                    ? ""
                    : "not-appear-about"
                }`}
                id={`mode-proyect-all-link-${id}`}
              >
                <a
                  href={linkToProyect}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" />
                  </svg>
                </a>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
export default Proyect;
