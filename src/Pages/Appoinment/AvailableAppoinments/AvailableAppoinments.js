import { Alert, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8.00AM - 9.00AM',
        space: '10 Space Available'
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.05AM - 11.30AM',
        space: '10 Space Available'
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '9.00AM - 6.30APM',
        space: '10 Space Available'
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7.00AM - 8.30AM',
        space: '10 Space Available'
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8.00AM - 9.00AM',
        space: '10 Space Available'
    },
    {
        id: 6,
        name: 'Cosmetic Surgery',
        time: '8.00AM - 9.00AM',
        space: '10 Space Available'
    },
]


const AvailableAppoinments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>

            <Typography variant="h4" sx={{ color: 'info.main', my: 3 }}> Available Appoinments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
             </Grid>

     </Container>
    );
};

export default AvailableAppoinments;