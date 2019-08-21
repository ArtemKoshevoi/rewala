import { Checkbox, FormControlLabel, Select, TextField } from '@material-ui/core';
import React from 'react';

export const renderRegistrationTextField = (
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

export const renderSelectField = (
  {input, label, meta: {touched, error}, children, ...custom}: any,
) => (
  <Select
    errorText={touched && error}
    {...input}
    children={children}
    {...custom}
    defaultValue={1}
  />
);

export const renderCheckbox = ({input, label}: any) => (
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