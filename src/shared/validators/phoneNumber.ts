export const phoneNumber = (value: any) => (
  value && !/^([0-9]{10})$/i.test(value)
) ? 'Invalid phone number, must be 10 digits'
  : undefined;