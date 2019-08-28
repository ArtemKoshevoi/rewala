import { action, ActionType } from 'typesafe-actions';
import { AuthToken } from '../../shared/interfaces/authToken';
import { LoginFormValues } from '../../shared/interfaces/loginFormValues';
import { MeValues } from '../../shared/interfaces/services';
import { UserInput } from '../../shared/interfaces/userInput';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCEDED = 'LOGOUT_SUCCEDED',
  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCEDED = 'REGISTRATION_SUCCEDED',
  RREGISTRATION_FAILED = 'REGISTRATION_FAILED',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
  GET_CURRENT_USER_SUCCEDED = 'GET_CURRENT_USER_SUCCEDED',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
  GET_CONFIG = 'GET_CONFIG',
}

export const Actions = {
  login: (payload: LoginFormValues) => action(ActionTypes.LOGIN, payload),
  loginSucceded: (token?: string) => action(ActionTypes.LOGIN_SUCCEDED, token),
  loginFailed: (payload?: any) => action(ActionTypes.LOGIN_FAILED, payload),
  logout: (payload: AuthToken) => action(ActionTypes.LOGOUT, payload),
  logoutSucceded: (token?: string) => action(ActionTypes.LOGOUT_SUCCEDED, token),
  registration: (payload: UserInput) => action(ActionTypes.REGISTRATION, payload),
  registrationSucceded: (payload: UserInput) => action(ActionTypes.REGISTRATION_SUCCEDED, payload),
  getCurrentUser: () => action(ActionTypes.GET_CURRENT_USER),
  getCurrentUserSucceded: (_id: MeValues) => action(ActionTypes.GET_CURRENT_USER_SUCCEDED, _id),
  getConfig: () => action(ActionTypes.GET_CONFIG),
  setAccessToken: (token?: string) => action(ActionTypes.SET_ACCESS_TOKEN, token),
};

export type ActionTypeUnion = ActionType<typeof Actions>;