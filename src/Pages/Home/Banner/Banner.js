import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box} from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba( 30, 39, 45, 0.3 )',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition: 'bottom 50px right 100px',
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    // border: '1px solid red'
}

const Banner = () => {
    return (
        <Box style={bannerBg}>
              <Container  sx={{ flexGrow: 1, py:5 }}>
      <Grid container spacing={2} sx={{py:5, my:5}}>
        <Grid item style={{...verticalCenter,textAlign:'left'}} xs={12} md={6}>
                    <Box>
                    <Typography variant="h3">
                        Your New Smile
                        Starts Here
            </Typography>
                    <Typography variant="h6" sx={{my:5, fontSize:14, color:'gray',fontWeight:'300'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum minima nostrum est esse blanditiis maxime officiis hic pariatur error quibusdam.
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#2ed8e0'}}>Get Appoinment</Button>
                </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter} >
        <CardMedia
              component="img"
              height="auto"
              image={chair}
              alt="Paella dish"
            />
        </Grid>
      </Grid>
    </Container>
      </Box>
    );
};

export default Banner;