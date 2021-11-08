import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const HIghlight = () => {
    return (
        <Box>
            <Container  sx={{display:'flex', gap:5, marginTop:'-40px'}}>
                    <Card  sx={{width:350, marginTop:'-30px'}}>
                        <CardContent sx={{display:'flex', justifyContent: 'space-evenly',  alignItems:'center', py:5, backgroundColor:"#2ed8e0" }}>
                        <Typography variant="h5" component="div">
                            belent
                        </Typography>
                        <Grid>
                        <Typography variant="h6" component="div">
                            Opening Hours
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly. <br />
                            well meaning and kindly.
                        </Typography>
                        </Grid>
                        </CardContent>
                </Card>
                
                        <Card sx={{width:350, marginTop:'-30px'}}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', py: 5, backgroundColor: "#2ed8e0" }}>
                    <Typography variant="h5" component="div">
                            belent
                        </Typography>
                        <Grid>
                        <Typography variant="h6" component="div">
                            Visit Our Location
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly. <br />
                            well meaning and kindly.
                        </Typography>
                        </Grid>
                        </CardContent>
                </Card>

                <Card sx={{width:350, marginTop:'-30px'}}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', py: 5, backgroundColor: "#2ed8e0" }}>
                    <Typography variant="h5" component="div">
                            belent
                        </Typography>
                        <Grid>
                        <Typography variant="h6" component="div">
                            Contact us now
                        </Typography>
                        <Typography variant="body2">
                            +8801723798273<br />
                            +8801723798273
                        </Typography>
                        </Grid>
                        </CardContent>
                </Card>
        </Container>
        </Box>
    );
};

export default HIghlight;