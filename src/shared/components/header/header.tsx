import React from 'react';

import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { gridStyle, useStyles } from './style';

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item={true} style={gridStyle}>
      <ButtonGroup
        fullWidth={true}
        variant='contained'
      >
        <Button className={classes.root} activeClassName={classes.active} component={NavLink} to='/' exact={true} >
          Home
        </Button>
        <Button className={classes.root} activeClassName={classes.active} component={NavLink} to='/search'>
          Search
        </Button>
        <Button className={classes.root} activeClassName={classes.active} component={NavLink} to='/notifications'>
          Notifications
        </Button>
        <Button className={classes.root} activeClassName={classes.active} component={NavLink} to='/profile'>
          Profile
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Header;
