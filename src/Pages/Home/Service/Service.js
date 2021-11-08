import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const { name, img } = props.service
    
    return (
        <Grid item xs={4} sm={4} md={4}> {/* must delete this if not using  key={index} */}
            <Card sx={{ minWidth: 275 }}>
            <CardMedia
                    component="img"
                    style={{width:'auto', height:'80px', margin: '0 auto'}}
                    image={img}
                    alt="green iguana"
                />
                    <CardContent>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem obcaecati laudantium nihil error odio aspernatur laborum sapiente commodi veritatis inventore!
                        </Typography>
                    </CardContent>
                    </Card>
        </Grid>
    );
};

export default Service;