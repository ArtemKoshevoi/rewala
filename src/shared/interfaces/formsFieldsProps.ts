import { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';

interface Item {
  code: string;
  name: string;
}

export interface FormsFieldsProps extends WrappedFieldProps {
  label: string;
  defaultValue: number;
  children: ReactNode;
  data: Array<Item>;
}