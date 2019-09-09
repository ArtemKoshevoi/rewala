import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { CommonCheckbox } from '../../../../../shared/formComponents/CommonCheckbox';
import { CommonSelectField } from '../../../../../shared/formComponents/CommonSelectField';
import { CommonTextField } from '../../../../../shared/formComponents/CommonTextField';
import { RegistrationFormValues } from '../../../../../shared/interfaces/registrationFormValues';
import { email } from '../../../../../shared/validators/email';
import { matchPassword } from '../../../../../shared/validators/match';
import { phoneNumber } from '../../../../../shared/validators/phoneNumber';
import { required } from '../../../../../shared/validators/required';
import { RootState } from '../../../../../store';
import { getRegistrationRequestState } from '../../../../../store/auth-requests/selectors';
import { Actions as configActions } from '../../../../../store/config/actions';
import { getCountries } from '../../../../../store/config/selectors';
import { useStyle } from './style';

interface Item {
  code: string;
  name: string;
  _id: string;
  shortName: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getConfig: () => dispatch(configActions.getConfig()),
});

const mapStateToProps = (state: RootState) => ({
  countries: getCountries(state),
  requestState: getRegistrationRequestState(state),
});

type Props =
  & InjectedFormProps<RegistrationFormValues>
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const Component: React.FC<Props> = ({handleSubmit, pristine, submitting, countries, requestState, getConfig}: Props) => {
  const classes = useStyle();

  useEffect(() => {
    getConfig();
  }, [getConfig]);

  let countryList = null;
  if (countries) {
    countryList = countries.map((item: Item) => {
      return (
        <MenuItem key={item._id} value={item.code}>{item.name} {item.code}</MenuItem>
      );
    });
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='profileInput.fullName'
            component={CommonTextField}
            label='FullName'
            validate={[required]}
          />
        </div>
        <div>
          <Field
            className={classes.select}
            name='profileInput.countryCode'
            component={CommonSelectField}
            label='Country Code'
          >
            {countryList}
          </Field>
          <Field
            className={classes.phone}
            name='profileInput.phone'
            component={CommonTextField}
            label='Phone (optional)'
            validate={[phoneNumber]}
          />
          <Field
            name='email'
            component={CommonTextField}
            label='Email'
            validate={[required, email]}
          />
          <Field
            name='password'
            component={CommonTextField}
            label='Password'
            validate={[required]}
            // type='password'
          />
          <Field
            name='confirmPassword'
            component={CommonTextField}
            label='Confirm Password'
            validate={[required, matchPassword]}
            // type='password'
          />
        </div>
      </div>
      <div>
        <Field
          name='isAgreeWithPrivacyPolicyAndTermOfUse'
          component={CommonCheckbox}
          label='I have read and agree with Privacy Policy and Terms of Use'
        />
      </div>
      <div className={classes.btn}>
        <Button
          fullWidth={true}
          type='submit'
          variant='contained'
          color='primary'
          disabled={pristine || requestState.loading}
        >
          Sing Up
        </Button>
      </div>
    </form>
  );
};

export const SingUpForm =
  connect(mapStateToProps, mapDispatchToProps)(
  reduxForm<RegistrationFormValues, any>({
    form: 'registration',
  })(Component));
