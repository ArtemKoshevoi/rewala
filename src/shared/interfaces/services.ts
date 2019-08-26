import { LoginFormValues } from './login';
import { LogOutValue } from './logout';
import { ProfileInput } from './registration';

export interface InputValue extends LoginFormValues, LogOutValue {
}

export interface MeValues {
  email: string;
  profile: ProfileInput;
  countryCode: string;
}

export enum UserStatus {
  DELETED = 'DELETED',
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

export interface RegistrationValues {
  email: string;
  FCMToken: string | null;
  status: UserStatus;
}

export interface Countries {
  name: string;
  code: string;
}