import React from "react"
import {Button, Container} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "./style";
import {string} from "prop-types";

interface LoginFormValues {
  Email: string,
  Password: string;
}

const LogInScreen = ({ handleSubmit, submitting, pristine }: any) => {
  const onSubmit =  ({Email, Password}: LoginFormValues) => {
    console.log(Email);
    console.log(Password);
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

export default reduxForm({
  form: 'singIn',
})(LogInScreen);



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



