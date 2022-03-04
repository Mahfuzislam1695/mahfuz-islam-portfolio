import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
  
    return (
        <>
        <AppBar position='fixed'>
        <Toolbar>
        <Avatar alt="M" src="/images/DSC_9411.JPG" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MAHFUZ ISLAM
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Nav.Link href="#about">About</Nav.Link>
        </>
      
      
    );
};

export default Navigation;