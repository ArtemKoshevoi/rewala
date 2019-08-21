import { combineReducers } from 'redux';

import {
  Actions as login,
  ActionTypes as loginActionTypes,
  epic as loginEpic,
  reducer as loginReducer,
} from './nested-states/login';

import {
  Actions as logout,
  ActionTypes as logoutActionTypes,
  epic as logoutEpic,
  reducer as logoutReducer,
} from './nested-states/logout';

import {
  Actions as getMe,
  ActionTypes as getMeActionTypes,
  epic as getMeEpic,
  reducer as getMeReducer,
} from './nested-states/getMe';

import {
  Actions as getConfig,
  ActionTypes as getConfigActionTypes,
  epic as getConfigEpic,
  reducer as getConfigReducer,
} from './nested-states/getConfig';

import { ActionType } from 'typesafe-actions';
import {
  Actions as registration,
  ActionTypes as registrationActionTypes,
  epic as registrationEpic,
  reducer as registrationReducer,
} from './nested-states/registration';

export const Actions = {
  login,
  logout,
  getMe,
  registration,
  getConfig,
};

export const ActionTypes = {
  loginActionTypes,
  logoutActionTypes,
  getMeActionTypes,
  registrationActionTypes,
  getConfigActionTypes,
};

export const reducer = combineReducers({
  loginRequest: loginReducer,
  logoutRequest: logoutReducer,
  getMeRequest: getMeReducer,
  registrationRequest: registrationReducer,
  getConfigRequest: getConfigReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginEpic,
  logoutEpic,
  getMeEpic,
  registrationEpic,
  getConfigEpic,
];
