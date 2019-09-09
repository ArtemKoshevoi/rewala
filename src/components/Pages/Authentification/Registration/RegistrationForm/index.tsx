import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { checkboxComponent } from '../../../../../shared/formComponents/checkbox';
import { selectFieldComponent } from '../../../../../shared/formComponents/selectField';
import { textFieldComponent } from '../../../../../shared/formComponents/textField';
import { RegistrationFormValues } from '../../../../../shared/interfaces/registrationFormValues';
import { email } from '../../../../../shared/validators/email';
import { matchPassword } from '../../../../../shared/validators/match';
import { phoneNumber } from '../../../../../shared/validators/phoneNumber';
import { required } from '../../../../../shared/validators/required';
import { RootState } from '../../../../../store';
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
});

type Props =
  & InjectedFormProps<RegistrationFormValues>
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const SingUpForm = ({handleSubmit, pristine, submitting, countries, getConfig}: Props) => {
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
            component={textFieldComponent}
            label='FullName'
            validate={[required]}
          />
        </div>
        <div>
          <Field
            className={classes.select}
            name='profileInput.countryCode'
            component={selectFieldComponent}
            label='Country Code'
          >
            {countryList}
          </Field>
          <Field
            className={classes.phone}
            name='profileInput.phone'
            component={textFieldComponent}
            label='Phone (optional)'
            validate={[phoneNumber]}
          />
          <Field
            name='email'
            component={textFieldComponent}
            label='Email'
            validate={[required, email]}
          />
          <Field
            name='password'
            component={textFieldComponent}
            label='Password'
            validate={[required]}
            // type='password'
          />
          <Field
            name='confirmPassword'
            component={textFieldComponent}
            label='Confirm Password'
            validate={[required, matchPassword]}
            // type='password'
          />
        </div>
      </div>
      <div>
        <Field
          name='isAgreeWithPrivacyPolicyAndTermOfUse'
          component={checkboxComponent}
          label='I have read and agree with Privacy Policy and Terms of Use'
        />
      </div>
      <div className={classes.btn}>
        <Button fullWidth={true} type='submit' variant='contained' color='primary' disabled={pristine || submitting}>
          Sing Up
        </Button>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm<{}, any>({
    form: 'registration',
  })(SingUpForm),
);
