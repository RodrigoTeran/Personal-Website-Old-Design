import React from "react";
import { Helmet } from "react-helmet";
import ReactTypingEffect from "react-typing-effect";

// Components
import IndexPageButton from "../components/Buttons/IndexPageButton";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Portafolio personal - Rodrigo Terán Hernández</title>
        <meta
          name="description"
          content="Portafolio personal - Rodrigo Terán Hernández. Página de inicio."
        />
      </Helmet>
      <main>
        <div className="index-page-left-side">
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
          <div>
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
      </main>
    </>
  );
};
export default IndexPage;
