import { Button, Checkbox, FormControlLabel, Select, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values: any) => {
  const errors: any = {};
  const requiredFields = [
    'email',
    'password',
    'confirmPassword',
    'fullName',
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

const renderCheckbox = ({ input, label }: any) => (
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

const SingUpForm = (props: any) => {
  const {handleSubmit, pristine, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='fullName'
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
            name='phone'
            component={renderTextField}
            label='Phone (optional)'
          />
          <Field
            name='email'
            component={renderTextField}
            label='Email'
          />
          <Field
            name='password'
            component={renderTextField}
            label='Password'
          />
          <Field
            name='confirmPassword'
            component={renderTextField}
            label='Confirm Password'
          />
        </div>
      </div>
      <div>
        <Field
          name='policy'
          component={renderCheckbox}
          label='I have read and agree with Privacy Policy and Terms of Use'
        />
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
