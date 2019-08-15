import { of } from 'rxjs';

class AuthService {
  token = 'auth-token';

  setToken(token: string) {
    return localStorage.setItem(this.token, token);
  }

  getToken() {
    return of(localStorage.getItem(this.token));
  }

  removeToken() {
    return of(localStorage.removeItem(this.token));
  }
}

export const authService = new AuthService();