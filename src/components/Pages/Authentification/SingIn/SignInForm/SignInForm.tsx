import { Button, FormHelperText } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../style';


const SignInForm = (props: any) => {
  const { handleSubmit, pristine, submitting, warningMessage} = props;
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name='Email'
              component={renderTextField}
              label='Email'
            />
          </div>
          <div>
            <Field
              name='Password'
              component={renderTextField}
              label='Password'
              // type='password'
            />
          </div>
        </div>
        <FormHelperText id='component-error-text' style={{color: 'red', fontSize: '16px'}}>
          {warningMessage}
        </FormHelperText>
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
  form: 'singIn',
})(SignInForm);