import { action, ActionType } from 'typesafe-actions';
import { User } from '../../shared/interfaces/user';

export enum ActionTypes {
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
}

export const Actions = {
  setUsers: (users: User[]) => action(ActionTypes.SET_USER, users),
  removeUser: () => action(ActionTypes.REMOVE_USER),
};

export type ActionTypeUnion = ActionType<typeof Actions>;