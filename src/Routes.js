import React, { useState } from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./Nav";
import App from "./App";
import Home from "./Home";
import Menu from "./Menu";
import NavTwo from "./NavTwo";
import { Header } from "./Elements";

const Routes = () => {
  const [ isNavOpened, setNavOpen ] = useState(false);
  const [ isNavTwoOpened, setNavTwoOpen ] = useState(false);
  let location = useLocation();
  console.log('location:', location);

  return (
    <>
      <Header>
        <div>
          <Menu onClick={() => setNavOpen(true)} />
        </div>
        <div>
          <Link to="/">App</Link>
          <Link to="/Home">Home</Link>
          <Menu onClick={() => setNavTwoOpen(true)} />
        </div>
      </Header>
      <Nav isNavOpened={isNavOpened} setNavOpen={setNavOpen} />
      <NavTwo isNavOpened={isNavTwoOpened} setNavOpen={setNavTwoOpen} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={App} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;