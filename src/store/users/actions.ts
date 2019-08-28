import { action, ActionType } from 'typesafe-actions';
import { UserValues } from '../../shared/interfaces/userValues';

export enum ActionTypes {
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
}

export const Actions = {
  setUsers: (users: UserValues[]) => action(ActionTypes.SET_USER, users),
  removeUser: () => action(ActionTypes.REMOVE_USER),
};

export type ActionTypeUnion = ActionType<typeof Actions>;