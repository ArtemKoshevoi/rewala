import React from "react"
import {Button, Container, TextField} from "@material-ui/core";
import SingInForm from "../../../shared/Forms/SingInForm";
import { showResults } from "../../../shared/Forms/showResults"
// import { Values } from "redux-form-website-template";

class singIn extends React.Component {


  render(): React.ReactNode {
    return (
      <Container>
        <SingInForm onSubmit={showResults}/>
        {/*<Values form="simple" />*/}
      </Container>
    );
  }
}

export default singIn