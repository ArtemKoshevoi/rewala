import { Button } from '@material-ui/core';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { renderTextField } from '../../../../../shared/formComponents/renderTextField';
import { LoginFormValues } from '../../../../../shared/interfaces/loginFormValues';
import { email } from '../../../../../shared/validators/email';
import { required } from '../../../../../shared/validators/required';

const Index = (props: InjectedFormProps<LoginFormValues>) => {
  const {handleSubmit, pristine, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='email'
            component={renderTextField}
            label='Email'
            validate={[required, email]}
          />
        </div>
        <div>
          <Field
            name='password'
            component={renderTextField}
            label='Password'
            validate={[required]}
            // type='password'
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

export default reduxForm<LoginFormValues>({
  form: 'Login',
})(Index);