import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { renderCheckbox } from '../../../../../shared/formComponents/renderCheckbox';
import { renderSelectField } from '../../../../../shared/formComponents/renderSelectField';
import { renderTextField } from '../../../../../shared/formComponents/renderTextField';
import { UserInput } from '../../../../../shared/interfaces/userInput';
import { RootState } from '../../../../../store';
import { Actions as configActions } from '../../../../../store/config/actions';
import { getCountries } from '../../../../../store/config/selectors';
import validate from './registrationValidate';
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

type StateProps =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const SingUpForm = (props: InjectedFormProps<UserInput> & StateProps) => {
  const {handleSubmit, pristine, submitting, countries, getConfig} = props;
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
            // type='password'
          />
          <Field
            name='confirmPassword'
            component={renderTextField}
            label='Confirm Password'
            // type='password'
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

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm<{}, any>({
    form: 'registration',
    validate,
  })(SingUpForm),
);
