export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LogOutValue {
  FCMToken: string | null;
}

export interface InputValue extends LoginFormValues, LogOutValue {
}

export interface Profile {
  fullName: string;
  notifications: boolean;
}

export interface MeValues {
  me: {
    email: string;
    profile: Profile;
    countryCode: string
  };
}

interface ProfileInput {
  fullName: string;
  phone: string;
  countryCode: string;
  notifications: boolean;
}

export interface UserInput {
  email: string;
  password: string;
  isAgreeWithPrivacyPolicyAndTermOfUse: boolean;
  profileInput: ProfileInput;
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