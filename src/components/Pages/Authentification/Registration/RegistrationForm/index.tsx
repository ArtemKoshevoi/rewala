import { Button, Checkbox, FormControlLabel, Select, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderCheckbox, renderRegistrationTextField, renderSelectField } from '../style';

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
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

const SingUpForm = (props: any) => {
  const {handleSubmit, pristine, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='fullName'
            component={renderRegistrationTextField}
            label='FullName'
          />
        </div>
        <div>
          <Field
            name='countryCode'
            component={renderSelectField}
            label='Country Code'
          >
            <MenuItem value='+38'>+38</MenuItem>
          </Field>
          <Field
            name='phone'
            component={renderRegistrationTextField}
            label='Phone (optional)'
          />
          <Field
            name='email'
            component={renderRegistrationTextField}
            label='Email'
          />
          <Field
            name='password'
            component={renderRegistrationTextField}
            label='Password'
            type='password'
          />
          <Field
            name='confirmPassword'
            component={renderRegistrationTextField}
            label='Confirm Password'
            type='password'
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
