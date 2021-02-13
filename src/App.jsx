import React, { useState } from "react";

// Components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Layout from "./components/Layout";
import SocialMedia from "./components/SocialMedia";
import Nav from "./components/Nav";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import LayoutMsg from "./components/Contact/LayoutMsg";
import LayoutLoader from "./components/Contact/LayoutLoader";
import SocialMediaResponsive from "./components/SocialMediaResponsive";

const App = () => {
  // LayoutMsg
  const [isInLayout, setIsInLayout] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // LayoutLoader
  const [isInLayoutLoader, setIsInLayoutLoader] = useState(false);
  return (
    <>
      <Layout></Layout>
      <Nav></Nav>
      <LayoutMsg
        isInLayout={isInLayout}
        backgroundColor={backgroundColor}
        textColor={textColor}
        title={title}
        text={text}
        setIsInLayout={setIsInLayout}
      ></LayoutMsg>
      <LayoutLoader isInLayout={isInLayoutLoader}></LayoutLoader>
      <div className="layout-division">
        <SocialMedia></SocialMedia>
        <div className="layout-division-content">
          <Header></Header>
          <About></About>
          <Work></Work>
          <Contact
            setIsInLayout={setIsInLayout}
            setBackgroundColor={setBackgroundColor}
            setTextColor={setTextColor}
            setTitle={setTitle}
            setText={setText}
            setIsInLayoutLoader={setIsInLayoutLoader}
          ></Contact>
          <SocialMediaResponsive></SocialMediaResponsive>
        </div>
      </div>
    </>
  );
};
export default App;
