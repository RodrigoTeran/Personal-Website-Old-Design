import React from "react";
import { Helmet } from "react-helmet";

// Components
import LeftSide from "../components/IndexPage/LeftSide";
import RightSide from "../components/IndexPage/RightSide";

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
      <main className="index-page">
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </main>
    </>
  );
};
export default IndexPage;
