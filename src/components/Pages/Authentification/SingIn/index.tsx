import React, {FunctionComponent} from "react"
import {Button, Container} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "./style";
import {CustomAction, LoginFormValues} from "../../../../shared/Interfaces";
import {Action, compose, Dispatch} from "redux";
import {string} from "prop-types";
import {Actions} from "../../../../store/auth/actions";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";


const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: { Email: string, Password: string }) => dispatch(Actions.login(loginFormValues))
});


const Screen = ({ handleSubmit, submitting, pristine, login }: any) => {
  const onSubmit =  ({Email, Password}: LoginFormValues) => {
    login({Email, Password})
  };

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
}),connect(null, mapDispatchToProps))(Screen);

// export const LoginScreen = compose(
//   reduxForm<LoginFormData>({
//     form: 'login',
//     initialValues: { code: deviceService.getUserCountryData().cca2, number: undefined },
//   }),
//   connect(mapStateToProps, mapDispatchToProps),
// )(Screen);



/*import React from "react"
import {Container} from "@material-ui/core";
import SingInForm from "../../../../shared/Forms/SingInForm";
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



