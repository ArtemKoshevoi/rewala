export const phoneNumber = (value: string) => (
  value && isNaN(Number(value))
) ? 'Invalid phone number, must be only digits'
  : undefined;