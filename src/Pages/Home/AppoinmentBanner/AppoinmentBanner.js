import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appoinmentBg = {
    background: `url(${bg})`,
    backgroundPosition: 'right 50% bottom 50%',
    backgroundColor: 'rgba( 39, 53, 68, 0.9 )',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:175,
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg } sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
                    <img
                        style={{width:400, marginTop: '-120px' }}
                        src={doctor} alt="" />
          </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',
                }} >
                    <Box>
                    <Typography sx={{mb:5}} variant="h6" style={{color: '#2ed8e0'}}>
                        Appoinment
                </Typography>
                    <Typography sx={{my:5}} variant="h4" style={{color:'white', fontWeight:'700px'}}>
                        Make Appoinment Today
                </Typography>
                    <Typography sx={{my:5}} variant="h6" style={{color:'white', fontSize:'14px', fontWeight:'300px'}}>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur consequuntur repudiandae <br /> deleniti temporibus blanditiis voluptates distinctio in quaerat ad expedita!
                </Typography>
                    <Button variant="contained" style={{backgroundColor: '#2ed8e0'}}>Learn More</Button>
                  </Box>
          </Grid>   
        </Grid>
      </Box>
    );
};

export default AppoinmentBanner;