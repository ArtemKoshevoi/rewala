import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
} from '@material-ui/core';
import React, { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';

interface Item {
  code: string;
  name: string;
}

interface Props extends WrappedFieldProps {
  label: string;
  hinttext: string;
  floatinglabeltext: string;
  defaultValue: number;
  children: ReactNode;
  data: Array<Item>;
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
  {input, label, data, meta: {touched, error}, children, ...custom},
) => {

  // const countryList = () => {
  //   const listItems = [];
  //   for (const item in data) {
  //     if (item) {
  //       listItems.push({value: data[item].code, label: `${data[item].name} ${data[item].code}`});
  //     }
  //   }
  //   return listItems;
  // };

  // const countryList = () => {
  //   const listItems = [];
  //   for (const item in data) {
  //     if (item) {
  //       listItems.push(data[item].name);
  //     }
  //   }
  //   return listItems;
  // };
  //
  // console.log(countryList());

  return (
    <FormControl error={touched && error}>
      <InputLabel htmlFor='outlined-code'>Code</InputLabel>
      <Select
        input={<OutlinedInput labelWidth={30} name='code' id='outlined-code'/>}
        error={touched && error}
        {...input}
        children={children}
        {...custom}
        // multiple={true}
        // value={countryList()}
        // inputProps={countryList()}
      />
    </FormControl>
  );
};

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