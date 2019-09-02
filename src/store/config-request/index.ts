import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import {
  Actions as getConfig,
  ActionTypes as getConfigActionTypes,
  epic as getConfigEpic,
  reducer as getConfigReducer,
} from './nested-states/getConfig';

export const Actions = {
  getConfig,
};

export const ActionTypes = {
  getConfigActionTypes,
};

export const reducer = combineReducers({
  getConfigRequest: getConfigReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [
  getConfigEpic,
];