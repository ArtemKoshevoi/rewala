import { Button } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../style';

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

const Index = (props: any) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='email'
            component={renderTextField}
            label='Email'
          />
        </div>
        <div>
          <Field
            name='password'
            component={renderTextField}
            label='Password'
            type='password'
          />
        </div>
      </div>
      <div>
        <Button
          fullWidth={true}
          type='submit'
          variant='contained'
          color='primary'
          disabled={pristine || submitting}
        >
          Sing In
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'Login',
  validate,
})(Index);