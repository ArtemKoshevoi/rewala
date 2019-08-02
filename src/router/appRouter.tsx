import React from 'react';
import SingIn from "../components/Authentification/SingIn";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import SingUp from "../components/Authentification/SingUp";
import ResetPassword from "../components/Authentification/ResetPassword";
import {Container} from "@material-ui/core";
import Homepage from "../components/Pages/Home"
import NavTabs from "../components/Nav/NavTabs";

const appRouter: React.FC = () => {
  return (
    <Router>
      <Container maxWidth={"sm"}>
        <div>
          <NavTabs/>
          {/*<nav>*/}
            {/*<ul>*/}
              {/*<li>*/}
                {/*<Link to="/">Sing In</Link>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<Link to="/singUp/">Sing Up</Link>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<Link to="/resetPassword/">Reset Password</Link>*/}
              {/*</li>*/}
            {/*</ul>*/}
          {/*</nav>*/}
          <Homepage />
          <Route path="/singup/" component={SingUp} />
          <Route path="/resetpassword/" component={ResetPassword} />
          <Route exact path="/singin" component={SingIn} />
        </div>
      </Container>
    </Router>
  );
};

export default appRouter;
