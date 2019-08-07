import {action, ActionType} from 'typesafe-actions';
import {LoginFormValues} from "../../shared/Interfaces";

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCEDED = 'LOGIN_SUCCEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGIN_CANCELED = 'LOGIN_CANCELED'
}

export const Actions = {
  login: (payload: LoginFormValues) => action(ActionTypes.LOGIN, payload),
  loginSucceded: (token?: string) => action(ActionTypes.LOGIN_SUCCEDED, token),
  loginFailed: (payload?: any) => action(ActionTypes.LOGIN_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;