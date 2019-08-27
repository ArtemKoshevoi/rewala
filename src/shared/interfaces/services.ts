import { AuthToken } from './AuthToken';
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