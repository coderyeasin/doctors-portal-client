import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from './CheckoutFrom';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51JvyZMFYpe3ufKavN2WRucUYZlm9ofrBBWF4IvQxrDJtuj9PRkgebf7owAHbdSvCAbXVcqS6MsuDGsgQuA0hQlUn00G7p0ReHs')



const Payment = () => {
    const { appointId } = useParams();
    const [appoint, setAppoint] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointId}`)
            .then(res => res.json())
        .then(data => setAppoint(data))
    }, [appointId])
    
    return (
        <div>
            <h3>Please Pay for {appoint.patientName} for {appoint.serviceName} </h3>
            <h3>Price:  ${appoint.price} </h3>

            {
                appoint.price &&
                <Elements stripe={stripePromise}>
                <CheckoutFrom
                 appoint = {appoint}>
           </CheckoutFrom>
            </Elements>
           }
         </div>
    );
};

export default Payment;