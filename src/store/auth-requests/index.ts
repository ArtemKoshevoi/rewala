import { combineReducers } from 'redux';
import {ActionType, StateType} from "typesafe-actions";

import {
  Actions as login,
  ActionTypes as loginActionTypes,
  epic as loginEpic,
  reducer as loginReducer,
} from './nested-states/login';

import {
  Actions as getMe,
  ActionTypes as getMeActionTypes,
  epic as getMeEpic,
  reducer as getMeReducer,
} from './nested-states/getMe';

export const Actions = {
  login,
  getMe
};

export const ActionTypes = {
  loginActionTypes,
  getMeActionTypes
};

export const reducer = combineReducers({
  loginRequest: loginReducer,
  getMeRequest: getMeReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginEpic,
  getMeEpic
];

export type State = StateType<typeof reducer>;