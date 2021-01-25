import React from "react";
import { Helmet } from "react-helmet";
import HeaderPages from "../components/HeaderPages";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Acerca de - Rodrigo Terán Hernández</title>
        <meta
          name="description"
          content="Portafolio personal - Rodrigo Terán Hernández. Acerca de Rodrigo."
        />
      </Helmet>
      <main className="about-page">
        <HeaderPages></HeaderPages>
      </main>
    </>
  );
};
export default About;
