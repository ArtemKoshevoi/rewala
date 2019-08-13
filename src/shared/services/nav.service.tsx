import React from 'react';
import { Redirect } from 'react-router';

export const redirectToHomepage = () => {
  console.log(444);
  return (
    <Redirect to='/' />
  );
};