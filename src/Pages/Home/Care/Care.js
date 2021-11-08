import React from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png'

const cardPatient = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Care = () => {
    return (
        <Container sx={{ flexGrow: 1, my:5, py:5 }}>
        <Grid container spacing={2} style={cardPatient}>
          <Grid item xs={12} md={6}>
                    {/* <img src={treatment} style={{width:'auto'}} alt="" /> */}
                    <CardMedia
        component="img"
        height="550"
        image={treatment}
        alt="Paella dish"
      />
          </Grid>
          <Grid item xs={12} md={6} sx={{px:3, textAlign:'left'}} >
                    <Typography variant="h3">
                        Exceptional Dental Care, on Your Terms
                    </Typography>
                    
                    <Typography variant="h6"  sx={{ fontWeight: 'light', m: 1, py: 3 }} style={{fontWeight:'200px', margin:''}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere tempore excepturi blanditiis quo quis ex quod iure. Molestias rem, quae consequuntur in natus eaque perferendis fuga veniam quo nobis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere tempore excepturi blanditiis quo quis ex quod iure. Molestias rem, quae consequuntur in natus eaque perferendis fuga veniam quo nobis!
                    </Typography> <br />
                    <Button variant="contained" style={{backgroundColor: '#2ed8e0'}}>Learn More</Button>                  
          </Grid>
        </Grid>
      </Container>
    );
};

export default Care;