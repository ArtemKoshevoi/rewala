import {TextField} from '@material-ui/core';
import React from 'react';

export const renderTextField = (
  {input, label, meta: {touched, error}, ...custom}: any,
) => (
  <TextField
    hinttext={label}
    floatinglabeltext={label}
    {...input}
    {...custom}
    variant='outlined'
    placeholder={label}
    margin='normal'
    fullWidth={true}
  />
);