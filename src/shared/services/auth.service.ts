export const setToken = (storageName: string, token: any) => {
  localStorage.setItem(storageName, token.data.login.authToken);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const removeToken = (): void => {
    localStorage.removeItem('token');
};