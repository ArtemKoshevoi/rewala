export enum UserStatus {
  DELETED = 'DELETED',
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

export interface UserValues {
  _id: string;
  email: string;
  FCMToken: string | null;
  status: UserStatus;
}