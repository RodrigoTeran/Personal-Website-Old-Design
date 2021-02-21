// React
import React, { useState, useRef } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

// Framer motion
import { AnimatePresence } from "framer-motion";

// Components App
import Layout from "./components/Layout/Layout";
import Nav from "./components/Layout/Nav";
import LayoutMsg from "./components/Layout/LayoutMsg";
import LayoutLoader from "./components/Layout/LayoutLoader";

// Pages
import Portfolio from "./pages/Portfolio";

const App = () => {
  // LayoutMsg
  const [isLayoutMsgInLayout, setIsLayoutMsgInLayout] = useState(false);
  const [backgroundColorLayoutMsg, setBackgroundColorLayoutMsg] = useState("");
  const [textColorLayoutMsg, setTextColorLayoutMsg] = useState("");
  const [titleLayoutMsg, setTitleLayoutMsg] = useState("");
  const [textLayoutMsg, setTextLayoutMsg] = useState("");

  // LayoutLoader
  const [isInLayoutLoader, setIsInLayoutLoader] = useState(false);

  // Location hook for AnimatePresence animations
  const location = useLocation();

  // Portfolio page
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Layout></Layout>
      <Nav
        // Refs
        aboutRef={aboutRef}
        workRef={workRef}
        contactRef={contactRef}
      ></Nav>
      <LayoutMsg
        isInLayout={isLayoutMsgInLayout}
        backgroundColor={backgroundColorLayoutMsg}
        textColor={textColorLayoutMsg}
        title={titleLayoutMsg}
        text={textLayoutMsg}
        setIsInLayout={setIsLayoutMsgInLayout}
      ></LayoutMsg>
      <LayoutLoader isInLayout={isInLayoutLoader}></LayoutLoader>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Portfolio
              // Layout MSG
              setIsInLayout={setIsLayoutMsgInLayout}
              setBackgroundColor={setBackgroundColorLayoutMsg}
              setTextColor={setTextColorLayoutMsg}
              setTitle={setTitleLayoutMsg}
              setText={setTextLayoutMsg}
              setIsInLayoutLoader={setIsInLayoutLoader}
              // Refs
              aboutRef={aboutRef}
              workRef={workRef}
              contactRef={contactRef}
            ></Portfolio>
          </Route>
          <Route path="/">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};
export default App;
