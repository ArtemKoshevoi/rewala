import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { StateType } from 'typesafe-actions';
import {
  getCurrentUserEpic,
  loginEpic,
  loginSucceededEpic,
  logoutEpic, logoutSucceededEpic,
  redirectOnLoginSuccessEpic, redirectOnLogoutSuccessEpic,
} from './auth/epics';
import { reducer as authReducer } from './auth/reducer';

import {
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
  redirectOnLogoutSuccessEpic
);

export type RootState = StateType<typeof rootReducer>;

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  authRequest: authRequestReducer,
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default store;