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
  registration,
};

export const ActionTypes = {
  loginActionTypes,
  logoutActionTypes,
  registrationActionTypes,
};

export const reducer = combineReducers({
  loginRequest: loginReducer,
  logoutRequest: logoutReducer,
  registrationRequest: registrationReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginEpic,
  logoutEpic,
  registrationEpic,
];
