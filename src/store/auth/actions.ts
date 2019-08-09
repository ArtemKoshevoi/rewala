import {action, ActionType} from 'typesafe-actions';
import {LoginFormValues, LogOutValue} from "../../shared/Interfaces";

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
}

export const Actions = {
  login: (payload: LoginFormValues) => action(ActionTypes.LOGIN, payload),
  logout: (payload: LogOutValue) => action(ActionTypes.LOGOUT, payload),
  getCurrentUser: () => action(ActionTypes.GET_CURRENT_USER),
};

export type ActionTypeUnion = ActionType<typeof Actions>;