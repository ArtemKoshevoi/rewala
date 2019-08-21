import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    '&:hover': {
      color: 'orange',
    },
  },
  active: {
    color: 'orange',
  },
  grid: {
    marginBottom: '50px',
  },
});