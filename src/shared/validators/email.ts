export const email = (values: string) => (
    values &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)
  ) ? 'Invalid email address' : undefined;