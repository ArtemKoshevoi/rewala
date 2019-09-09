interface AllValuesProps {
  password: string;
}

export const matchPassword = (value: string, allValues: AllValuesProps) =>
  value !== allValues.password
    ? `This field must match with your password field`
    : undefined;