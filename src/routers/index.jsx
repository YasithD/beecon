import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "../views/404"

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/404" render={props => <Error {...props}/>} />
        <Route exact path="/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
