import React from 'react';
import { Redirect } from 'react-router';
import { push } from 'react-router-redux';

export const redirectToHomepage = () => {
  console.log(444);
  return (
    push('/')
  );
};