import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container} from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
    name: 'Fluoride Treatment',
    decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique exercitationem maiores assumenda! Quam voluptatem facilis dolorum est repellat deserunt, voluptatum expedita voluptate, saepe eligendi consequuntur, cupiditate inventore nisi error!',
    img: fluoride
    },
    {
        name: 'Cavity Filling',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique exercitationem maiores assumenda! Quam voluptatem facilis dolorum est repellat deserunt, voluptatum expedita voluptate, saepe eligendi consequuntur, cupiditate inventore nisi error!',
        img: cavity
    },
    {
        name: 'Treat Whitening',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique exercitationem maiores assumenda! Quam voluptatem facilis dolorum est repellat deserunt, voluptatum expedita voluptate, saepe eligendi consequuntur, cupiditate inventore nisi error!',
        img: whitening
        }
];

//Remove Default
/* const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  })); */

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>          
            <Container>
                <Typography  sx={{ fontWeight: 500, m:2, textTransform:'uppercase',color: 'success.main'   }} variant="h6" component="div" gutterBottom>
                    Our Services
                </Typography>
                <Typography  sx={{ fontWeight: 600, m:5 }} variant="h4" component="div" gutterBottom>
                    Services we Provided
                </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service = {service}
                        />)
                }
        </Grid>
            </Container>
      </Box>
    );
};

export default Services;