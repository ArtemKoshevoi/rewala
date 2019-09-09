import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { FormsFieldsProps } from '../interfaces/formsFieldsProps';

export const CommonCheckbox: React.FC<FormsFieldsProps> = ({input, label}) => (
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