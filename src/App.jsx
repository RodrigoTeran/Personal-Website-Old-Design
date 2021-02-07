import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence } from "framer-motion";

// Pages
import IndexPage from "./pages/Index";
import AboutPage from "./pages/About";
import Work from "./pages/Work";

// Components
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Layout></Layout>
      <Footer></Footer>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/acerca-de" component={AboutPage} />
          <Route exact path="/trabajo" component={Work} />
          <Route path="/">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};
export default App;
