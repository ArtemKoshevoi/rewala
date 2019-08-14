import history from '../../history';

export const redirectToHomepage = () => {
  return history.push('/');
  };

export const redirectToLoginpage = () => {
  return history.push('/login');
};