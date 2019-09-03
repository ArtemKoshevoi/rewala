import { action, ActionType } from 'typesafe-actions';
import { CountriesConfig } from './state';

export enum ActionTypes {
  GET_CONFIG = 'GET_CONFIG',
  GET_CONFIG_SUCCEDED = 'GET_CONFIG_SUCCEDED',
}

export const Actions = {
  getConfig: () => action(ActionTypes.GET_CONFIG),
  getConfigSucceded: (payload: CountriesConfig) => action(ActionTypes.GET_CONFIG_SUCCEDED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;