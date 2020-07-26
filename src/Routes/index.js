import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Component/Home";
import Download from "../Component/Download";

const RoutesMain = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Home" component={Home}></Route>
          <Route path="/Image/:id" component={Download}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default RoutesMain;
