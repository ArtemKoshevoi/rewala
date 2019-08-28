import { AuthToken } from './authToken';
import { LoginFormValues } from './loginFormValues';

export interface InputValue extends LoginFormValues, AuthToken {
}

export interface MeValues {
  _id: string;
}

export interface Countries {
  name: string;
  code: string;
}