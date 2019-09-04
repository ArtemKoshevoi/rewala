export interface ProfileInput {
  fullName: string;
  phone: string;
  countryCode: string;
  notifications: boolean;
}

export interface RegistrationFormValues {
  email: string;
  password: string;
  isAgreeWithPrivacyPolicyAndTermOfUse: boolean;
  profileInput: ProfileInput;
}