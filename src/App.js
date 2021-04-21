import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
//Pages
import Home from "./pages/Home";
import Model from "./pages/Model";
//components
import Header from "./components/Header";
//Styles
import "./App.scss";
  
const imageDetails = {
  width: 324,
  height: 400,
};

function App() {

  return (
    <Router>
    <Header />
    <Route
      render={({ location }) => (
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path='/'
              render={() => <Home imageDetails={imageDetails} />}
            />
            <Route
              exact
              path='/model/:id'
              render={() => <Model imageDetails={imageDetails} />}
            />
          </Switch>
          </AnimatePresence>
      )}
    />
  </Router>
  )
}

export default App;
