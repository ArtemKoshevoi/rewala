import { Button } from '@material-ui/core';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { textFieldComponent } from '../../../../../shared/formComponents/textField';
import { LoginFormValues } from '../../../../../shared/interfaces/loginFormValues';
import { email } from '../../../../../shared/validators/email';
import { required } from '../../../../../shared/validators/required';

type Props =
  & InjectedFormProps<LoginFormValues>;

const Index = ({handleSubmit, pristine, submitting}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='email'
            component={textFieldComponent}
            label='Email'
            validate={[required, email]}
          />
        </div>
        <div>
          <Field
            name='password'
            component={textFieldComponent}
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