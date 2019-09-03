export const email = (values: any) => (
    values &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)
  ) ? 'Invalid email address' : undefined;