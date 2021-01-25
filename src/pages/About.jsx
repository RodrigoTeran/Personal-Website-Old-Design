import React from "react";
import { Helmet } from "react-helmet";
import HeaderPages from "../components/HeaderPages";
import RightSide from "../components/AboutPage/RightSide";
import LeftSide from "../components/AboutPage/LeftSide";

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
        <div className="about-page-container">
          <LeftSide></LeftSide>
          <RightSide></RightSide>
        </div>
      </main>
    </>
  );
};
export default About;
