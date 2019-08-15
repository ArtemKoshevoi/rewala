
export const isLoggedIn = (): boolean => {
  return (localStorage.getItem('auth-token') !== null);
};