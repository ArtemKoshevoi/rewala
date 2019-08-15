import { of } from 'rxjs';

class AuthService {
  token = 'auth-token';

  setToken(token: any) {
    return localStorage.setItem(this.token, token.data.login.authToken);
  }

  getToken() {
    return of(localStorage.getItem(this.token));
  }

  removeToken() {
    return of(localStorage.removeItem(this.token));
  }
}

export const authService = new AuthService();