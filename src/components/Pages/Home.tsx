import React from "react"
import {Button} from "@material-ui/core";
import {compose, Dispatch} from "redux";
import {Actions} from "../../store/auth/actions";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {RootState} from "../../store";
import {getState} from "../../store/auth/selectors";

const mapStateToProps = (state: RootState) => {
  const { getMeRequest } = getState(state);
  return { requestState: getMeRequest.data }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCurrentUser: () => dispatch(Actions.getCurrentUser()),
});

const hamepage = ({getCurrentUser, handleSubmit, requestState}: any) => {
  console.log(requestState);
  const getMe = (): void => {
    return getCurrentUser()
  };

  return (
    <form onSubmit={handleSubmit(getMe)}>
      <Button type="submit" variant="contained" color="secondary">
        Get Me
      </Button>
    </form>
  )
};

export const HomepageScreen: any = compose(
  reduxForm({
    form: 'getMe',
  }), connect(mapStateToProps, mapDispatchToProps))(hamepage);
