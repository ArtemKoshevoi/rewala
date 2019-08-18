import { combineReducers } from 'redux';
import { ActionType, StateType } from 'typesafe-actions';

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
};

export const ActionTypes = {
  loginActionTypes,
  logoutActionTypes,
  getMeActionTypes,
  registrationActionTypes,
};

export const reducer = combineReducers({
  loginRequest: loginReducer,
  logoutRequest: logoutReducer,
  getMeRequest: getMeReducer,
  registrationRequest: registrationReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginEpic,
  logoutEpic,
  getMeEpic,
  registrationEpic,
];

export type State = StateType<typeof reducer>;