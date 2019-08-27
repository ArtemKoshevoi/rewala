export interface AuthState {
  isAuthorized: boolean | null;
  authorizedUserId: string | null;
  token: string | null;
}