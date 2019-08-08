import React, {FunctionComponent} from "react"
import {Button, Container} from "@material-ui/core";
import {Field, reduxForm, InjectedArrayProps} from "redux-form";
import {renderTextField} from "./style";
import {Action, compose, Dispatch} from "redux";
import {Actions} from "../../../../store/auth/actions";
import {connect} from "react-redux";
import {RootState} from "../../../../store";
import {getState} from "../../../../store/auth/selectors";

interface LoginFormValuesUpperCase {
  Email: string,
  Password: string
}

const mapStateToProps = (state: RootState) => {
  const { loginRequest } = getState(state);
  return { requestState: loginRequest.data }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: { email: string, password: string }) => dispatch(Actions.login(loginFormValues)),
});

const Screen = ({handleSubmit, submitting, pristine, login, requestState}: any) => {
  const onSubmit = ({Email: email, Password: password}: LoginFormValuesUpperCase) => {
    login({email, password})
  };
  if (requestState !== null) {
    localStorage.setItem('token', requestState.data.login.authToken)
  }

  return (
    <Container maxWidth={"xs"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <Field
              name="Email"
              component={renderTextField}
              label="Email"
            />
          </div>
          <div>
            <Field
              name="Password"
              component={renderTextField}
              label="Password"
            />
          </div>
        </div>
        <div>
          <Button fullWidth={true} type="submit" variant="contained" color="primary" disabled={pristine || submitting}>
            Sing In
          </Button>
        </div>
      </form>
    </Container>
  )
};

export const LoginScreen: any = compose(
  reduxForm({
    form: 'singIn',
  }), connect(mapStateToProps, mapDispatchToProps))(Screen);



