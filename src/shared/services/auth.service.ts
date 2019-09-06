import { of } from 'rxjs';
import { authToken } from '../variables/authToken';

class AuthService {

  setToken(token: string) {
    return localStorage.setItem(authToken, token);
  }

  getToken() {
    return of(localStorage.getItem(authToken));
  }

  removeToken() {
    return of(localStorage.removeItem(authToken));
  }
}

export const authService = new AuthService();