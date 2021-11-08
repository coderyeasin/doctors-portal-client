import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Navigation = () => {
       
  const { user, logOUt } = useAuth();
  
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Link to="/appoinment"><Button sx={{color:'whitesmoke'}} color="inherit">Appoinment</Button></Link>
            {
              user?.email ?
                <Box>
                   <NavLink to="/dashboard">
              <Button sx={{color:'whitesmoke'}} color="inherit">Dashboard</Button>
                </NavLink>
              <Button style={{color: 'white'}} onClick={ logOUt} color="inherit">Logout</Button>
              </Box>
           
              :
                <NavLink to="/login">
              <Button sx={{color:'whitesmoke'}} color="inherit">Login</Button>
                </NavLink>
                
           }
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;