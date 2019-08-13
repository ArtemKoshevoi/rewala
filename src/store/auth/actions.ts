import { action, ActionType } from 'typesafe-actions';
import { LoginFormValues, LogOutValue } from '../../shared/Interfaces';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGOUT = 'LOGOUT',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
}

export const Actions = {
  login: (payload: LoginFormValues) => action(ActionTypes.LOGIN, payload),
  loginSucceded: (token?: string) => action(ActionTypes.LOGIN_SUCCEDED, token),
  loginFailed: (payload?: any) => action(ActionTypes.LOGIN_FAILED, payload),
  logout: (payload: LogOutValue) => action(ActionTypes.LOGOUT, payload),
  getCurrentUser: () => action(ActionTypes.GET_CURRENT_USER),
};

export type ActionTypeUnion = ActionType<typeof Actions>;