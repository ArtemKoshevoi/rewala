import { combineReducers } from 'redux';

import {
  Actions as login,
  ActionTypes as loginTypes,
  epic as loginEpic,
  reducer as loginReducer,
} from './nested-states/login';
import {ActionType, StateType} from "typesafe-actions";

export const Actions = {
  login
};

export const ActionTypes = {
  loginTypes
};

export const reducer = combineReducers({
  loginRequest: loginReducer,

});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  loginEpic
];

export type State = StateType<typeof reducer>;