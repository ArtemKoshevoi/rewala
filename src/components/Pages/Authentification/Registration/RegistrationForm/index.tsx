import { Button, Select, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values: any) => {
  const errors: any = {};
  const requiredFields = [
    'email',
    'password',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};


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

const renderSelectField = (
  {input, label, meta: {touched, error}, children, ...custom}: any,
) => (
  <Select
    errorText={touched && error}
    {...input}
    // onChange={(event, index, value): any => input.onChange(value)}
    children={children}
    {...custom}
    defaultValue={1}
  />
);

const SingUpForm = (props: any) => {
  const {handleSubmit, pristine, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='FullName'
            component={renderTextField}
            label='FullName'
          />
        </div>
        <div>
          <Field
            name='countryCode'
            component={renderSelectField}
            label='Country Code'
          >
            <MenuItem value='1'>+380</MenuItem>
          </Field>
          <Field
            name='Phone'
            component={renderTextField}
            label='Phone (optional)'
          />
          <Field
            name='Email'
            component={renderTextField}
            label='Email'
          />
          <Field
            name='Password'
            component={renderTextField}
            label='Password'
          />
          <Field
            name='ConfirmPassword'
            component={renderTextField}
            label='Confirm Password'
          />
        </div>
      </div>
      <div>
        <Button fullWidth={true} type='submit' variant='contained' color='primary' disabled={pristine || submitting}>
          Sing Up
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'registration',
  validate,
})(SingUpForm);
