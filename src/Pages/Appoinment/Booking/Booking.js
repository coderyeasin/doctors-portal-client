import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';



const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpenBooking = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);
    return (
     <>
           <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
            <Typography sx={{ color: 'info.main', fontWeight:600 }} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                ${price}
            </Typography>
            <Typography variant="caption" gutterBottom component="div">
                {space}
                </Typography>
                <Button onClick={handleOpenBooking} variant="contained">Book Appoinment</Button>
            </Paper>
        </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleCloseBooking={handleCloseBooking}
                setBookingSuccess={setBookingSuccess}
            >
        </BookingModal>

    </>

    );
};

export default Booking;