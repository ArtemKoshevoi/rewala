import {TextField} from '@material-ui/core';
import React from 'react';

export const renderTextField = (
  {input, label, meta: {touched, invalid, error}, ...custom}: any,
) => (
  <TextField
    label={label}
    hinttext={label}
    floatinglabeltext={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    variant='outlined'
    placeholder={label}
    margin='normal'
    fullWidth={true}
  />
);