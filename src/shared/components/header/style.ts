import { makeStyles } from '@material-ui/core';
import {CSSProperties} from 'react';

export const gridStyle: CSSProperties = {
  marginBottom: '50px',
};

export const useStyles = makeStyles({
  root: {
    '&:hover': {
      color: 'orange',
    },
  },
  active: {
    color: 'orange',
  },
});