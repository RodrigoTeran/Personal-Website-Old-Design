import React from "react";

// Components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Layout from "./components/Layout";
import SocialMedia from "./components/SocialMedia";
import Nav from "./components/Nav";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <>
      <Layout></Layout>
      <Nav></Nav>
      <div className="layout-division">
        <SocialMedia></SocialMedia>
        <div className="layout-division-content">
          <Header></Header>
          <About></About>
          <Work></Work>
        </div>
      </div>
    </>
  );
};
export default App;
