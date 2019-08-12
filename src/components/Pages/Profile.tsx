import React from "react"
import {Button, Container} from "@material-ui/core";
import {compose, Dispatch} from "redux";
import {Actions} from "../../store/auth/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {RootState} from "../../store";
import {getState, getToken, removeToken} from "../../store/auth/selectors";
import Header from "../../shared/components/header";
import {Redirect} from "react-router";

const mapStateToProps = (state: RootState) => {
  const { logoutRequest } = getState(state);
  return { requestState: logoutRequest.data }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCurrentUser: () => dispatch(Actions.getCurrentUser()),
  logout: (logoutValue: {FCMToken: string}) => dispatch((Actions.logout(logoutValue)))
});

class Profile extends React.Component {
  render(): React.ReactNode {
    const {getCurrentUser, handleSubmit, requestState, logout}: any = this.props;
    const logOut = (): void => {
      const FCMToken = getToken();
      logout({FCMToken});
      removeToken();
    };

    const getMe = (): void => {
      return getCurrentUser();
    };

    if (requestState !== null){
      console.log(requestState);
      if (requestState.data.logout && !getToken()) {
        console.log(111, requestState.data.logout);
        return  (
          <Redirect to='/login' />
        )
      }
    }
    return (
      <Container>
        <Header />
        <form onSubmit={handleSubmit(getMe)}>
          <Button type="submit" variant="contained" color="secondary">
            Get Me
          </Button>
        </form>
        <form onSubmit={handleSubmit(logOut)}>
          <Button type="submit" variant="contained" color="primary">
            Log Out
          </Button>
        </form>
      </Container>
    )
  }
}

/*const profile = ({getCurrentUser, handleSubmit, requestState, logout}: any) => {
  const getMe = (): void => {
    return getCurrentUser();
  };

  const logOut = (): void => {
    const FCMToken = getToken();
    logout({FCMToken});
    removeToken();
  };

  if (requestState !== null){
    if (!requestState.data.logout) {
      return  (
        <Redirect to='/login' />
      )
    }
  }

  return (
    <Container>
      <Header />
      <form onSubmit={handleSubmit(getMe)}>
        <Button type="submit" variant="contained" color="secondary">
          Get Me
        </Button>
      </form>
      <form onSubmit={handleSubmit(logOut)}>
        <Button type="submit" variant="contained" color="primary">
          Log Out
        </Button>
      </form>
    </Container>
  )
};*/

export const ProfileScreen: any = compose(
  reduxForm({
    form: 'getMe',
  }),
  reduxForm({
    form: 'logOut',
  }),
  connect(mapStateToProps, mapDispatchToProps))(Profile);
