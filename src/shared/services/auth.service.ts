export const setToken = (storageName: string, token: any ) => {
  console.log(333);
  localStorage.setItem(storageName, token.data.login.authToken);
};

export const getToken = (): string|null => {
  return localStorage.getItem('token');
};

export const removeToken = (isLogout: boolean): void => {
  if (isLogout !== null && isLogout) {
    localStorage.removeItem('token');
  }
};