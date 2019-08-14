import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/ui/Nav";
import Dashboard from "./views/Dashboard";
import ExchangePage from "./views/ExchangePage";

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/exchange" component={ExchangePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
