export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LogOutValue {
  FCMToken: string;
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
