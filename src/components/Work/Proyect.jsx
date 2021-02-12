import React, { useEffect, useState } from "react";

const Proyect = ({
  imgSrc,
  name,
  description,
  arrayTechnologies,
  linkToProyect,
  mode,
}) => {
  const [stateForRender, setStateForRender] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleResize = () => {
    setStateForRender(!stateForRender);
  };
  return (
    <div className="proyect">
      {stateForRender ? null : null}
      {mode === "1" ? (
        <>
          <div className="proyect-image">
            <img src={imgSrc} alt={name} />
          </div>
          <div className="proyect-info">
            <h3 className="mode-proyect-1">{name}</h3>
            <div className="proyect-info-description mode-proyect-1">
              {description}
            </div>
            <div className="proyect-info-array mode-proyect-1">
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
            <div className="proyect-info-link mode-proyect-1">
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
              <h3 className="mode-proyect-2">{name}</h3>
              <div className="proyect-info-description mode-proyect-2">
                {description}
              </div>
              <div className="proyect-info-array mode-proyect-2">
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
              <div className="proyect-info-link mode-proyect-2">
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
          <div className="proyect-image">
            <img src={imgSrc} alt={name} />
          </div>
          {window.innerWidth < 960 ? (
            <div className="proyect-info">
              <h3 className="mode-proyect-2">{name}</h3>
              <div className="proyect-info-description mode-proyect-2">
                {description}
              </div>
              <div className="proyect-info-array mode-proyect-2">
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
              <div className="proyect-info-link mode-proyect-2">
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
