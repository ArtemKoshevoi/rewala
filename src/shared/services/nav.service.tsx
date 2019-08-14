import React from 'react';
import history from '../../history';

export const redirectToHomepage = () => {
  history.push('/');
};

export const redirectToLoginpage = () => {
  history.push('/login');
};