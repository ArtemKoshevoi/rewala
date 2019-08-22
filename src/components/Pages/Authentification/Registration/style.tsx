import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel, makeStyles,
  OutlinedInput,
  Select,
  TextField
} from '@material-ui/core';
import React, { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';

const useStyles = makeStyles({
  inputLabel: {
    textAlign: 'center',
    padding: '20px',
  },
});



interface Props extends WrappedFieldProps {
  label: string;
  hinttext: string;
  floatinglabeltext: string;
  defaultValue: number;
  children: ReactNode;
}

export const renderRegistrationTextField: React.FC<Props> = (
  {input, label, meta: {touched, invalid, error}, ...custom},
) => (
  <TextField
    label={label}
    hinttext={label}
    floatinglabeltext={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    variant='outlined'
    placeholder={label}
    margin='normal'
    fullWidth={true}
  />
);

export const renderSelectField: React.FC<Props> = (
  {input, label, meta: {touched, error}, children, ...custom},
) => (
  <FormControl error={touched && error}>
    <InputLabel  htmlFor='outlined-code'>Code</InputLabel>
    <Select
      input={<OutlinedInput labelWidth={30} name='code' id='outlined-code'/>}
      error={touched && error}
      {...input}
      children={children}
      {...custom}
    />
  </FormControl>
);

export const renderCheckbox: React.FC<Props> = ({input, label}) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={!!input.value}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);