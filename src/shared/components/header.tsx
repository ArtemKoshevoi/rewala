import React from 'react';

import { Button, ButtonGroup, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <Grid item={true}>
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
  }
}

export default Header;
