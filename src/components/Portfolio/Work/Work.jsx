// React
import React, { useRef } from "react";

// Components
import Proyect from "./Proyect";

// Utils for webp support
import { isWebpSupported } from "react-image-webp/dist/utils";

// Hooks
import { useAnimationsScroll } from "../../../hooks/useAnimationsScroll";

const Work = ({ workRef }) => {
  // Refs for animation scroll
  const h2 = useRef(null);

  const proyectImage1 = useRef(null);
  const proyectImage2 = useRef(null);
  const proyectImage3 = useRef(null);

  const modeProyectAll1 = useRef(null);
  const modeProyectAll2 = useRef(null);
  const modeProyectAll3 = useRef(null);

  const modeProyectAllDes1 = useRef(null);
  const modeProyectAllDes2 = useRef(null);
  const modeProyectAllDes3 = useRef(null);

  const modeProyectAllArray1 = useRef(null);
  const modeProyectAllArray2 = useRef(null);
  const modeProyectAllArray3 = useRef(null);

  const modeProyectAllLink1 = useRef(null);
  const modeProyectAllLink2 = useRef(null);
  const modeProyectAllLink3 = useRef(null);

  useAnimationsScroll(
    [
      h2,
      proyectImage1,
      proyectImage2,
      proyectImage3,

      modeProyectAll1,
      modeProyectAll2,
      modeProyectAll3,

      modeProyectAllDes1,
      modeProyectAllDes2,
      modeProyectAllDes3,

      modeProyectAllArray1,
      modeProyectAllArray2,
      modeProyectAllArray3,

      modeProyectAllLink1,
      modeProyectAllLink2,
      modeProyectAllLink3,
    ],
    0.5,
    "notAppear"
  );

  return (
    <div className="portfolioWork" ref={workRef}>
      <h2 ref={h2} className={`notAppear`}>
        Proyectos
      </h2>
      <div>
        <Proyect
          proyectImage={proyectImage1}
          modeProyectAll={modeProyectAll1}
          modeProyectAllDes={modeProyectAllDes1}
          modeProyectAllArray={modeProyectAllArray1}
          modeProyectAllLink={modeProyectAllLink1}
          imgSrc={
            isWebpSupported ? "/images/dogFinder.webp" : "/images/dogFinder.JPG"
          }
          name="Dog Finder"
          description="Soy fundador de Dog Finder, una plataforma web que ayuda a encontrar mascotas perdidas con Inteligencia Artificial."
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
        ></Proyect>
        <Proyect
          proyectImage={proyectImage2}
          modeProyectAll={modeProyectAll2}
          modeProyectAllDes={modeProyectAllDes2}
          modeProyectAllArray={modeProyectAllArray2}
          modeProyectAllLink={modeProyectAllLink2}
          imgSrc={
            isWebpSupported ? "/images/bimas-sc.webp" : "/images/bimas-sc.JPG"
          }
          name="BIMAS SC"
          description="Desarrollé la página web de BIMAS SC, una empresa con la finalidad de ofrecer servicios integrales en temas ambientales, de seguridad y salud."
          arrayTechnologies={["NextJS", "SCSS", "ReactJS"]}
          linkToProyect="https://bimas.com.mx/"
          mode="2"
        ></Proyect>
        <Proyect
          proyectImage={proyectImage3}
          modeProyectAll={modeProyectAll3}
          modeProyectAllDes={modeProyectAllDes3}
          modeProyectAllArray={modeProyectAllArray3}
          modeProyectAllLink={modeProyectAllLink3}
          imgSrc={
            isWebpSupported
              ? "/images/dark-programming.webp"
              : "/images/dark-programming.png"
          }
          name="Lenguaje de programación"
          description="Desarrollé DARK, un lenguaje de programación que se puede usar desde el navegador. Su sintáxis está inspirada en javascript y python."
          arrayTechnologies={[
            "ReactJS",
            "Moo",
            "Nearley",
            "y ...mucho trabajo",
          ]}
          linkToProyect="https://dark-language.vercel.app/"
          mode="1"
        ></Proyect>
      </div>
    </div>
  );
};
export default Work;
