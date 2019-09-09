import { FormControl, OutlinedInput, Select } from '@material-ui/core';
import React from 'react';
import { FormsFieldsProps } from '../interfaces/formsFieldsProps';

export const CommonSelectField: React.FC<FormsFieldsProps> = (
  {input, label, data, meta: {touched, error}, children, ...custom},
) => {

  return (
    <FormControl error={touched && error}>
      <Select
        input={<OutlinedInput labelWidth={0} name='code' id='outlined-code'/>}
        error={touched && error}
        {...input}
        children={children}
        {...custom}
      />
    </FormControl>
  );
};
