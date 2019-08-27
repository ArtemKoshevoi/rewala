import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType, StateType } from 'typesafe-actions';
import { ActionTypeUnion as AuthActionTypeUnion } from './auth/actions';
import {
  errorMessageOnLoginFailedEpic,
  getConfigEpic,
  getCurrentUserEpic, getCurrentUserOnTokenSetEpic, getCurrentUserSucceededEpic,
  loginEpic,
  loginFailedEpic,
  loginSucceededEpic,
  logoutEpic,
  logoutSucceededEpic,
  redirectOnLoginSuccessEpic,
  redirectOnLogoutSuccessEpic,
  redirectOnRegistrationSuccessEpic,
  registrationEpic,
  registrationSucceededEpic,
} from './auth/epics';
import { reducer as authReducer } from './auth/reducer';

import {
  ActionTypeUnion as AuthRequestActionTypeUnion,
  epics as authRequestEpics,
  reducer as authRequestReducer,
} from './auth-requests';

const rootEpic = combineEpics(
  ...authRequestEpics,
  loginEpic,
  logoutEpic,
  getCurrentUserEpic,
  loginSucceededEpic,
  redirectOnLoginSuccessEpic,
  logoutSucceededEpic,
  redirectOnLogoutSuccessEpic,
  loginFailedEpic,
  registrationEpic,
  registrationSucceededEpic,
  redirectOnRegistrationSuccessEpic,
  getConfigEpic,
  getCurrentUserSucceededEpic,
  getCurrentUserOnTokenSetEpic,
  errorMessageOnLoginFailedEpic,
);

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  authRequest: authRequestReducer,
});

export type RootState = StateType<typeof rootReducer>;

export type RootActions = ActionType<
  | AuthActionTypeUnion
  | AuthRequestActionTypeUnion
  >;

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default store;