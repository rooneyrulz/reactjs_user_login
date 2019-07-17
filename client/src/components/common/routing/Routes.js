import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

// COMPONENTS
import Home from "../../pages/Home";
import Dashboard from "../../pages/Dashboard";
import Signup from "../../pages/auth/Signup";
import Login from "../../pages/auth/Login";
import About from "../../pages/About";
import Alert from "../alert/Alert";
import NotFound from "../notFound/NotFound";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => (
  <Container>
    <div id="Alert" className="mb-3 text-center">
      <Alert />
    </div>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Container>
);

export default Routes;
