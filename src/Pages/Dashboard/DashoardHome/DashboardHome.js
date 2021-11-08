import * as React from 'react';
import  Grid  from '@mui/material/Grid';
import Calendar from '../../Home/Shared/Calendar/Calendar';
import Appointments from '../Appoinments/Appointments';



const DashboardHome = () => {
    const [value, setValue] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={5}>
                  <Calendar
                      value={value}
                      setValue={setValue}
                  />
        </Grid>
        <Grid item xs={12} sm={8} md={7}>
            <Appointments date={value}></Appointments>
        </Grid>
        </Grid>
    );
};

export default DashboardHome;