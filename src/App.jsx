// import { isWebpSupported } from "react-image-webp/dist/utils";
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
    <div>
      <Layout></Layout>
      <div className="pages-container">
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default App;
