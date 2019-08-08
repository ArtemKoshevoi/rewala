import {action, ActionType} from 'typesafe-actions';
import {LoginFormValues} from "../../shared/Interfaces";

export enum ActionTypes {
  LOGIN = 'LOGIN',
  GET_CURRENT_USER = 'GET_CURRENT_USER',

}

export const Actions = {
  login: (payload: LoginFormValues) => action(ActionTypes.LOGIN, payload),
  getCurrentUser: () => action(ActionTypes.GET_CURRENT_USER),
};

export type ActionTypeUnion = ActionType<typeof Actions>;