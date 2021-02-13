import React, { useState, useEffect } from "react";
import Proyect from "./Proyect";
import { isWebpSupported } from "react-image-webp/dist/utils";

const Work = () => {
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleScroll = () => {
    var listaComponentes = ["#h2-work"];
    for (var i = 0; i < listaComponentes.length; i++) {
      const top = getTop(listaComponentes[i]);
      if (
        document.scrollingElement.scrollTop >=
        top - window.innerHeight / 1.2
      ) {
        setIsH2(true);
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
  return (
    <div className="work">
      <h2 id="h2-work" className={`${isH2 ? "" : "not-appear-about"}`}>
        Proyectos
      </h2>
      <div className="work-container">
        <Proyect
          imgSrc={
            isWebpSupported ? "/images/dogFinder.webp" : "/images/dogFinder.JPG"
          }
          name="Dog Finder"
          description="Dog Finder es una plataforma web que ayuda a encontrar mascotas perdidas con Inteligencia Artificial."
          arrayTechnologies={[
            "ReactJS",
            "NodeJS",
            "MongoDB",
            "Flask",
            "OpenCV",
            "Stripe",
            "GoogleMapsAPI",
          ]}
          linkToProyect="https://dogfinder.com.mx/"
          mode="1"
          id="1"
        ></Proyect>
        <Proyect
          imgSrc={
            isWebpSupported ? "/images/bimas-sc.webp" : "/images/bimas-sc.JPG"
          }
          name="BIMAS SC"
          description="BIMAS SC es una Empresa con la finalidad de ofrecer servicios integrales en temas Ambientales, de Seguridad y Salud."
          arrayTechnologies={["NextJS", "SCSS", "ReactJS"]}
          linkToProyect="https://bimas.com.mx/"
          mode="2"
          id="2"
        ></Proyect>
      </div>
    </div>
  );
};
export default Work;
