import { action, ActionType } from 'typesafe-actions';
import { LoginFormValues } from '../../shared/interfaces/loginFormValues';
import { RegistrationFormValues } from '../../shared/interfaces/registrationFormValues';
import { User } from '../../shared/interfaces/user';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCEDED = 'LOGOUT_SUCCEDED',
  REGISTRATION = 'REGISTRATION',
  REGISTRATION_SUCCEDED = 'REGISTRATION_SUCCEDED',
  RREGISTRATION_FAILED = 'REGISTRATION_FAILED',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
  GET_CURRENT_USER = 'GET_CURRENT_USER',
  GET_CURRENT_USER_SUCCEDED = 'GET_CURRENT_USER_SUCCEDED',

}

export const Actions = {
  login: (payload: LoginFormValues) => action(ActionTypes.LOGIN, payload),
  loginSucceded: (token?: string) => action(ActionTypes.LOGIN_SUCCEDED, token),
  loginFailed: (payload?: any) => action(ActionTypes.LOGIN_FAILED, payload),
  logout: () => action(ActionTypes.LOGOUT),
  logoutSucceded: () => action(ActionTypes.LOGOUT_SUCCEDED),
  registration: (payload: RegistrationFormValues) => action(ActionTypes.REGISTRATION, payload),
  registrationSucceded: (payload: RegistrationFormValues) => action(ActionTypes.REGISTRATION_SUCCEDED, payload),
  getCurrentUser: () => action(ActionTypes.GET_CURRENT_USER),
  getCurrentUserSucceded: (payload: User) => action(ActionTypes.GET_CURRENT_USER_SUCCEDED, payload),
  setAccessToken: (token: string | null) => action(ActionTypes.SET_ACCESS_TOKEN, token),
};

export type ActionTypeUnion = ActionType<typeof Actions>;