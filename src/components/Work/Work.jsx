import React from "react";
import Proyect from "./Proyect";
import { isWebpSupported } from "react-image-webp/dist/utils";

const Work = () => {
  return (
    <div className="work">
      <h2>Proyectos</h2>
      <div className="work-container">
        <Proyect
          imgSrc={
            isWebpSupported ? "/images/dogFinder.webp" : "/images/dogFinder.JPG"
          }
          name="Dog Finder"
          description="Dog Finder es una plataforma web que ayuda a encontrar mascotas perdidas con Inteligencia Artificial."
          arrayTechnologies={[
            "React JS",
            "Node JS",
            "Mongo DB",
            "Flask",
            "OpenCV",
            "Stripe",
            "Google Maps API",
          ]}
          linkToProyect="https://dogfinder.com.mx/"
          mode="1"
        ></Proyect>
        <Proyect
          imgSrc={
            isWebpSupported ? "/images/bimas-sc.webp" : "/images/bimas-sc.JPG"
          }
          name="BIMAS SC"
          description="BIMAS SC es una Empresa con la finalidad de ofrecer servicios integrales en temas Ambientales, de Seguridad y Salud."
          arrayTechnologies={["Next JS", "SCSS", "React JS"]}
          linkToProyect="https://bimas.com.mx/"
          mode="2"
        ></Proyect>
      </div>
    </div>
  );
};
export default Work;
