class AuthService {
  token = 'auth-token';

  setToken(token: any) {
    return localStorage.setItem(this.token, token.data.login.authToken);
  }

  getToken() {
    return localStorage.getItem(this.token);
  }

  removeToken() {
    return localStorage.removeItem(this.token);
  }
}

export const authService = new AuthService();