import { AuthToken } from './authToken';
import { LoginFormValues } from './loginFormValues';

export interface InputValue extends LoginFormValues, AuthToken {
}