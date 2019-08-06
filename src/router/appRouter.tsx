import React from 'react';
import { LoginScreen } from "../components/Pages/Authentification/SingIn";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import SingUp from "../components/Pages/Authentification/SingUp";
import ResetPassword from "../components/Pages/Authentification/ResetPassword";
import {Container} from "@material-ui/core";
import Homepage from "../components/Pages/Home"
import NavTabs from "../components/Nav/NavTabs";

const appRouter: React.FC = () => {
  return (
    <Router>
      <Container maxWidth={"md"}>
        <div>
          <NavTabs/>
          <Route exact path="/" component={Homepage}/>
          <Route path="/singup/" component={SingUp}/>
          <Route path="/resetpassword/" component={ResetPassword}/>
          <Route path="/singin" component={LoginScreen}/>
        </div>
      </Container>
    </Router>
  );
};

export default appRouter;
