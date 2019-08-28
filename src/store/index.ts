import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType, StateType } from 'typesafe-actions';

import { ActionTypeUnion as AuthActionTypeUnion } from './auth/actions';
import { epics as authEpics } from './auth/epics';
import { reducer as authReducer } from './auth/reducer';

import { ActionTypeUnion as UsersActionTypeUnion } from './users/actions';
import { epics as usersEpics } from './users/epics';
import { reducer as usersReducer } from './users/reducer';

import {
  ActionTypeUnion as AuthRequestActionTypeUnion,
  epics as authRequestEpics,
  reducer as authRequestReducer,
} from './auth-requests';

const rootEpic = combineEpics(
  ...authRequestEpics,
  ...authEpics,
  ...usersEpics,
);

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  authRequest: authRequestReducer,
  users: usersReducer,
});

export type RootState = StateType<typeof rootReducer>;

export type RootActions = ActionType<
  | AuthActionTypeUnion
  | AuthRequestActionTypeUnion
  | UsersActionTypeUnion
  >;

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default store;