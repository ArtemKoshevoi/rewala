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

import { ActionTypeUnion as CountriesConfigActionTypeUnion } from './config/actions';
import { epics as countriesConfigEpics } from './config/epics';
import { reducer as countriesConfigReducer } from './config/reducer';

import {
  ActionTypeUnion as AuthRequestActionTypeUnion,
  epics as authRequestEpics,
  reducer as authRequestReducer,
} from './auth-requests';

import {
  ActionTypeUnion as CountriesConfigRequestActionTypeUnion,
  epics as countriesConfigRequestEpics,
  reducer as countriesConfigRequestReducer,
} from './config-request';

const rootEpic = combineEpics(
  ...authRequestEpics,
  ...countriesConfigRequestEpics,
  ...authEpics,
  ...usersEpics,
  ...countriesConfigEpics,
);

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: authReducer,
  authRequest: authRequestReducer,
  users: usersReducer,
  config: countriesConfigReducer,
  configRequest: countriesConfigRequestReducer,
});

export type RootState = StateType<typeof rootReducer>;

export type RootActions = ActionType<
  | AuthActionTypeUnion
  | AuthRequestActionTypeUnion
  | UsersActionTypeUnion
  | CountriesConfigActionTypeUnion
  | CountriesConfigRequestActionTypeUnion
  >;

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default store;