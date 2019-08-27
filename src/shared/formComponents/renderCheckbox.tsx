import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { FieldsProps } from '../interfaces/fieldsProps';

export const renderCheckbox: React.FC<FieldsProps> = ({input, label}) => (
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