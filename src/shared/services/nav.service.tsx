import { createBrowserHistory } from 'history';

export const history =  createBrowserHistory();

export const redirectToHomepage = () => {
  return history.push('/');
  };

export const redirectToLoginpage = () => {
  return history.push('/login');
};