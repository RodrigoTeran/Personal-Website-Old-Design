// React
import React from "react";

// Components
import Header from "../components/Portfolio/Header/Header";
import About from "../components/Portfolio/About/About";
import SocialMedia from "../components/Portfolio/SocialMedia";
import Work from "../components/Portfolio/Work/Work";
import Contact from "../components/Portfolio/Contact/Contact";
import SocialMediaResponsive from "../components/Portfolio/SocialMediaResponsive";

const Portfolio = ({
  // Layout MSG
  setIsInLayout,
  setBackgroundColor,
  setTextColor,
  setTitle,
  setText,
  setIsInLayoutLoader,
  // Refs
  aboutRef,
  workRef,
  contactRef,
}) => {
  return (
    <div className="portfolioLayoutDivision">
      <SocialMedia></SocialMedia>
      <div className="portfolioLayoutDivision__content">
        <Header contactRef={contactRef}></Header>
        <About aboutRef={aboutRef}></About>
        <Work workRef={workRef}></Work>
        <Contact
          setIsInLayout={setIsInLayout}
          setBackgroundColor={setBackgroundColor}
          setTextColor={setTextColor}
          setTitle={setTitle}
          setText={setText}
          setIsInLayoutLoader={setIsInLayoutLoader}
          contactRef={contactRef}
        ></Contact>
        <SocialMediaResponsive></SocialMediaResponsive>
      </div>
    </div>
  );
};
export default Portfolio;
