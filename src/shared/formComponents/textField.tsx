import { TextField } from '@material-ui/core';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface Props extends WrappedFieldProps {
  label: string;
  hinttext: string;
  floatinglabeltext: string;
}

export const textFieldComponent: React.FC<Props> = (
  {input, label, meta: {touched, invalid, error}, ...custom},
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