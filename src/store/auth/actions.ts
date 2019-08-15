import { action, ActionType } from 'typesafe-actions';
import { LoginFormValues, LogOutValue } from '../../shared/Interfaces';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCEDED = 'LOGOUT_SUCCEDED',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
  GET_WRONG_LOGIN_PASSWORD = 'GET_WRONG_LOGIN_PASSWORD',
}

export const Actions = {
  login: (payload: LoginFormValues) => action(ActionTypes.LOGIN, payload),
  loginSucceded: (token?: string) => action(ActionTypes.LOGIN_SUCCEDED, token),
  loginFailed: (payload?: any) => action(ActionTypes.LOGIN_FAILED, payload),
  logout: (payload: LogOutValue) => action(ActionTypes.LOGOUT, payload),
  logoutSucceded: (token?: string) => action(ActionTypes.LOGOUT_SUCCEDED, token),
  getCurrentUser: () => action(ActionTypes.GET_CURRENT_USER),
  loginPasswordWrong: () => action(ActionTypes.GET_WRONG_LOGIN_PASSWORD),
  setAccessToken: (token?: string) => action(ActionTypes.SET_ACCESS_TOKEN, token),
};

export type ActionTypeUnion = ActionType<typeof Actions>;