export interface ProfileInput {
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