import { combineReducers } from 'redux';
import {ActionType, StateType} from 'typesafe-actions';

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

export const Actions = {
  login,
  logout,
  getMe,
};

export const ActionTypes = {
  loginActionTypes,
  logoutActionTypes,
  getMeActionTypes,
};

export const reducer = combineReducers({
  loginRequest: loginReducer,
  logoutRequest: logoutReducer,
  getMeRequest: getMeReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginEpic,
  logoutEpic,
  getMeEpic,
];

export type State = StateType<typeof reducer>;