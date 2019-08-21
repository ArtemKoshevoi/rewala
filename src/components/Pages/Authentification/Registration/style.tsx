import { Checkbox, FormControlLabel, Select, TextField } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';

interface Props extends WrappedFieldProps{
  label: string;
  hinttext: string;
  floatinglabeltext: string;
  defaultValue: number;
  children: ReactNode;
}

export const renderRegistrationTextField: React.FC<Props> = (
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

export const renderSelectField: React.FC<Props> = (
  {input, label, meta: {touched, error}, children, ...custom},
) => (
  <Select
    error={touched && error}
    {...input}
    children={children}
    {...custom}
    defaultValue={1}
  />
);

export const renderCheckbox: React.FC<Props> = ({input, label}) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={!!input.value}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);