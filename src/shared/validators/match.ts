export const matchPassword = (value: string, allValues: any) =>
  value !== allValues.password
    ? `This field must match with your password field`
    : undefined;