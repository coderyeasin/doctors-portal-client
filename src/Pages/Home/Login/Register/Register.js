import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import login from '../../../../images/login.png'



const Register = () => {
        
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { user, handleRegister, isLoading, authError} = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match')
            return
       }

        handleRegister(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault()
    }
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
               Register
            </Typography>
         {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    onChange={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="Your Email"
                    name="email"
                    type="email"
                    onChange={handleOnBlur}
                    variant="standard" />
                <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    type="password"
                    label="Your Password"
                    name="password"
                    onChange={handleOnBlur}
                        variant="standard" />
                    
                <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    type="password"
                    label="re-type Your Password"
                    name="password2"
                    onChange={handleOnBlur}
                        variant="standard" />
                    
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                    
                    <NavLink style={{textDecoration:'none'}}  to="/login">
                    <Button variant="text">Already Register? Please Login</Button>
                    </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">User created successfully!</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;