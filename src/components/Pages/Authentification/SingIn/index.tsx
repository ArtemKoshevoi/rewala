import React, {FunctionComponent} from "react"
import {Button, Container} from "@material-ui/core";
import {Field, reduxForm, InjectedArrayProps} from "redux-form";
import {renderTextField} from "./style";
import {CustomAction, LoginFormValues} from "../../../../shared/Interfaces";
import {Action, compose, Dispatch} from "redux";
import {Actions} from "../../../../store/auth/actions";
import {connect} from "react-redux";
import {RootState} from "../../../../store";
import {getState} from "../../../../store/auth/selectors";


const mapStateToProps = (state: RootState) => ({
  requestState: getState(state),
});


const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: { email: string, password: string }) => dispatch(Actions.login(loginFormValues))
});


const Screen = ({handleSubmit, submitting, pristine, login, requestState}: any) => {
  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
    login({values})
  };
  console.log(requestState);

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


/*import React from "react"
import {Container} from "@material-ui/core";
import SingInForm from "../../../../shared/forms/SingInForm";
import {gql} from "apollo-boost";
import {ApolloConsumer, Mutation} from "react-apollo";


class singIn extends React.Component {

  render(): React.ReactNode {

    const LOG_IN = gql`
      mutation logIn($userLogin: LoginInput) {
       login(input: $userLogin) {
        email
        authToken
        status
  }
}
`;

    return (
      <Container maxWidth={"xs"}>
        <ApolloConsumer>
          {client => (
            <Mutation
              mutation={LOG_IN}
              onCompleted={({login}: any) => {
                localStorage.setItem('token', login.authToken);
                client.writeData({data: {isLoggedIn: true}});
              }}
            >
              {(login: any, {loading, error}: any) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>An error occurred</p>;

                return <SingInForm onSubmit={(e: any) => {
                  login({
                    variables: {
                      userLogin: {
                        email: e.Email,
                        password: e.Password
                      }
                    }
                  });
                }}/>;
              }}
            </Mutation>
          )}
        </ApolloConsumer>
      </Container>
    );
  }
}

export default singIn*/



