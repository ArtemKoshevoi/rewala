import { action, ActionType } from 'typesafe-actions';
import { CountriesConfigValues } from '../../shared/interfaces/countriesConfigValues';
import { UserValues } from '../../shared/interfaces/userValues';

export enum ActionTypes {
  GET_CONFIG = 'GET_CONFIG',
  GET_CONFIG_SUCCEDED = 'GET_CONFIG_SUCCEDED',
}

export const Actions = {
  getConfig: () => action(ActionTypes.GET_CONFIG),
  getConfigSucceded: (payload: CountriesConfigValues[]) => action(ActionTypes.GET_CONFIG_SUCCEDED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;