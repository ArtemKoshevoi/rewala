import React from 'react';
import { LoginScreen } from "../components/Pages/Authentification/SingIn";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {Container} from "@material-ui/core";
import HomePage from "../components/Pages/Home"
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privatRoute";
import Search from "../components/Pages/Search";
import Notifications from "../components/Pages/Notifications";
import {ProfileScreen} from "../components/Pages/Profile";


const appRouter: React.FC = () => {
  return (
      <Container maxWidth={"md"}>
        <Router>
          <Switch>
            <PublicRoute restricted={true} component={LoginScreen} path="/login"  />
            <PrivateRoute component={HomePage} path="/" exact/>
            <PrivateRoute component={Search} path="/search" />
            <PrivateRoute component={Notifications} path="/notifications" />
            <PrivateRoute component={ProfileScreen} path="/profile" />
          </Switch>
        </Router>
      </Container>
  );
};

export default appRouter;
