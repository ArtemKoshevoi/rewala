import React from "react"
import {Button, Container} from "@material-ui/core";
import {compose, Dispatch} from "redux";
import {Actions} from "../../store/auth/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {RootState} from "../../store";
import {getState, getToken, removeToken} from "../../store/auth/selectors";

const mapStateToProps = (state: RootState) => {
  const { getMeRequest } = getState(state);
  return { requestState: getMeRequest.data }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCurrentUser: () => dispatch(Actions.getCurrentUser()),
  logout: (logoutValue: {FCMToken: string}) => dispatch((Actions.logout(logoutValue)))
});

const hamepage = ({getCurrentUser, handleSubmit, requestState, logout}: any) => {
  const getMe = (): void => {
    return getCurrentUser();
  };

  const logOut = (): void => {
    const FCMToken = getToken();
    logout({FCMToken});
    removeToken();
  };

  console.log(requestState);

  return (
    <Container>
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
};

export const HomepageScreen: any = compose(
  reduxForm({
    form: 'getMe',
  }),
  reduxForm({
    form: 'logOut',
  }),
  connect(mapStateToProps, mapDispatchToProps))(hamepage);
