import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Components
import LeftSide from "../components/IndexPage/LeftSide";
import RightSide from "../components/IndexPage/RightSide";

const IndexPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
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
