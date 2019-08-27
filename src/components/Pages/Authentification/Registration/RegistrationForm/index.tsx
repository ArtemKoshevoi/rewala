import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { renderCheckbox } from '../../../../../shared/formComponents/renderCheckbox';
import { renderSelectField } from '../../../../../shared/formComponents/renderSelectField';
import { renderTextField } from '../../../../../shared/formComponents/renderTextField';
import { UserInput } from '../../../../../shared/interfaces/registration';
import { RootState } from '../../../../../store';
import { getState } from '../../../../../store/auth-requests/selectors';
import { useStyle } from './style';

interface Item {
  code: string;
  name: string;
}

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

const mapStateToProps = (state: RootState) => {
  const {getConfigRequest} = getState(state);
  return {
    getConfigRequestState: getConfigRequest.data,
  };
};

type StateProps =
  & ReturnType<typeof mapStateToProps>;

const SingUpForm = (props: InjectedFormProps<UserInput> & StateProps) => {
  const classes = useStyle();
  const [countryList, setList] = useState(null);
  const {handleSubmit, pristine, submitting, getConfigRequestState} = props;

  useEffect(() => {
    const countriesCode = getConfigRequestState && getConfigRequestState.data.config.countries;
    let list = null;
    if (countriesCode) {
      list = countriesCode.map((item: Item) => {
        return (
          <MenuItem key={Math.random()} value={item.code}>{item.name} {item.code}</MenuItem>
        );
      });
    }
    setList(list);
  }, [getConfigRequestState]);

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
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
            className={classes.select}
            name='countryCode'
            component={renderSelectField}
            label='Country Code'
          >
            {countryList}
          </Field>
          <Field
            className={classes.phone}
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
            type='password'
          />
          <Field
            name='confirmPassword'
            component={renderTextField}
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
      <div className={classes.btn}>
        <Button fullWidth={true} type='submit' variant='contained' color='primary' disabled={pristine || submitting}>
          Sing Up
        </Button>
      </div>
    </form>
  );
};

export default connect(mapStateToProps)(
  reduxForm<{}, any>({
    form: 'registration',
    validate,
  })(SingUpForm),
);
