import React from 'react';

import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './style';

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item={true} className={classes.grid}>
      <ButtonGroup
        fullWidth={true}
        variant='contained'
      >
        <Button className={classes.root} component={Link} to='/' >
          Home
        </Button>
        <Button className={classes.root} component={Link} to='/search'>
          Search
        </Button>
        <Button className={classes.root} component={Link} to='/notifications'>
          Notifications
        </Button>
        <Button className={classes.root} component={Link} to='/profile'>
          Profile
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Header;
