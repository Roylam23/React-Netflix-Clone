import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { Welcome } from "../Welcome/Welcome";
const NotFound = () => {
  return <div className="nf">404 Not Found :)</div>;
};
class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/browse" component={Home} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </HashRouter>
    );
  }
}

export { Router };
