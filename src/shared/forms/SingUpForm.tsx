import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Button, Select, TextField} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom }: any,
) => (
    <TextField
        // hintText={label}
        // floatingLabelText={label}
        // errorText={touched && error}
        {...input}
        {...custom}
        variant="outlined"
        placeholder={label}
        margin="normal"
        fullWidth={true}
        defaultValue={1}
    />
);

const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom }: any,
) => (
    <Select
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        // onChange={(event, index, value): any => input.onChange(value)}
        children={children}
        {...custom}
    />
);

const SingUpForm = (props: any) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field
                        name="FullName"
                        component={renderTextField}
                        label="FullName"
                    />
                </div>
                <div>
                    <Field
                        name="countryCode"
                        component={renderSelectField}
                        label="Country Code"
                    >
                        <MenuItem value="1"  >+380</MenuItem>
                    </Field>
                    <Field
                        name="Phone"
                        component={renderTextField}
                        label="Phone (optional)"
                    />
                    <Field
                        name="Email"
                        component={renderTextField}
                        label="Email"
                    />
                    <Field
                        name="Password"
                        component={renderTextField}
                        label="Password"
                    />
                    <Field
                        name="ConfirmPassword"
                        component={renderTextField}
                        label="Confirm Password"
                    />
                </div>
            </div>
            <div>
                <Button fullWidth={true} type="submit" variant="contained" color="primary" disabled={pristine || submitting}>
                    Sing Up
                </Button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'singUp',
})(SingUpForm);