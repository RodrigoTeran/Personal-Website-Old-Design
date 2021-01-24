import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React from "react";

// Pages
import IndexPage from "./pages/Index";

// Components
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout></Layout>
      <Footer></Footer>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
