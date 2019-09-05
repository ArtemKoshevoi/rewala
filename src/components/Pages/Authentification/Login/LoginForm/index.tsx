import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { textFieldComponent } from '../../../../../shared/formComponents/textField';
import { LoginFormValues } from '../../../../../shared/interfaces/loginFormValues';
import { email } from '../../../../../shared/validators/email';
import { required } from '../../../../../shared/validators/required';
import { RootState } from '../../../../../store';
import { getLoginRequestState } from '../../../../../store/auth-requests/selectors';

const mapStateToProps = (state: RootState) => ({
  requestState: getLoginRequestState(state),
});

type Props =
  & InjectedFormProps<LoginFormValues>
  & ReturnType<typeof mapStateToProps>;

const Index = ({handleSubmit, pristine, submitting, requestState}: Props) => {
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
          disabled={pristine || requestState.loading}
        >
          Sing In
        </Button>
      </div>
    </form>
  );
};

export default connect(mapStateToProps)(
  reduxForm<{}, any>({
    form: 'Login',
  })(Index),
);
