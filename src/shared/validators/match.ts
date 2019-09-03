export const match = (matchName: string) => (value, allValues, props) =>
  value !== allValues[matchName]
    ? 'This field must match with ${matchName} field'
    : undefined;