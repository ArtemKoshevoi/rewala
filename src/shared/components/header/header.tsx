import React from 'react';

import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { gridStyle } from './style';

const Header: React.FC = () => {
  return (
    <Grid item={true} style={gridStyle}>
      <ButtonGroup
        fullWidth={true}
        variant='contained'
      >
        <Button component={NavLink} to='/' exact={true} activeStyle={{color: 'orange'}}>
          Home
        </Button>
        <Button component={NavLink} to='/search' activeStyle={{color: 'orange'}}>
          Search
        </Button>
        <Button component={NavLink} to='/notifications' activeStyle={{color: 'orange'}}>
          Notifications
        </Button>
        <Button component={NavLink} to='/profile' activeStyle={{color: 'orange'}}>
          Profile
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Header;
