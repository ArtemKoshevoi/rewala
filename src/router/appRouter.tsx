import React from 'react';
import SingIn from "../components/Authentification/SingIn";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import SingUp from "../components/Authentification/SingUp";
import ResetPassword from "../components/Authentification/ResetPassword";
import {Container} from "@material-ui/core";

const appRouter: React.FC = () => {
  return (
    <Router>
      <Container maxWidth={"xs"}>
        <div>
          <h2>Rewala</h2>
          <nav>
            <ul>
              <li>
                <Link to="/singIn/">Sing In</Link>
              </li>
              <li>
                <Link to="/singUp/">Sing Up</Link>
              </li>
              <li>
                <Link to="/resetPassword/">Reset Password</Link>
              </li>
            </ul>
          </nav>
          <Route path="/singUp/" component={SingUp} />
          <Route path="/resetPassword/" component={ResetPassword} />
          <Route path="/singIn/" component={SingIn} />
        </div>
      </Container>
    </Router>
  );
};

export default appRouter;
