import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  GET_CONFIG = 'GET_CONFIG',
}

export const Actions = {
  getConfig: () => action(ActionTypes.GET_CONFIG),
};

export type ActionTypeUnion = ActionType<typeof Actions>;