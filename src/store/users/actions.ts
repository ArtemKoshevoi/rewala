import { action, ActionType } from 'typesafe-actions';
import { UserValues } from '../../shared/interfaces/userValues';

export enum ActionTypes {
  SET_USER = 'SET_USER',
}

export const Actions = {
  setUsers: (users: UserValues[]) => action(ActionTypes.SET_USER, users),
};

export type ActionTypeUnion = ActionType<typeof Actions>;