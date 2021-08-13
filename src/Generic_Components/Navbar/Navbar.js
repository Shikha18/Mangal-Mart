import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';


function Navbar() {
    return (
        <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' edge='start' aria-label='menu'>
              <Menu />
            </IconButton>
            <Typography variant='h6' style={{flexGrow: 1}}>
              Mangal Best Price
            </Typography>
            <Button color='inherit'>
              Login
            </Button>
            <Button color='inherit'>
              Register
            </Button>
            <Button color='inherit'>
              Account
              <IconButton color='inherit' aria-label='menu'>
                <AccountCircle />
              </IconButton>
            </Button>
          </Toolbar>
        </AppBar>
      </div>  
    )
}
export default Navbar;
