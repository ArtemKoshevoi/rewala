import {TextField} from "@material-ui/core";
import React from "react";

export const renderTextField = (
  {input, label, meta: {touched, error}, ...custom}: any,
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    variant="outlined"
    placeholder={label}
    margin="normal"
    fullWidth={true}
  />
);