export interface AuthState {
  isAuthorized: boolean | null;
  token: string | null;
  error: string | null;
  wrongLoginPassword: boolean | null;
}
