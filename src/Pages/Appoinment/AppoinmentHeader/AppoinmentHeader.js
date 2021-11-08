import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Home/Shared/Calendar/Calendar';

const AppoinmentHeader = ({value, setValue}) => {
    // const [value, setValue] = React.useState(new Date());
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Calendar date={value} setValue={setValue}></Calendar>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={chair} alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default AppoinmentHeader;