import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';



const CheckoutFrom = ({ appoint }) => {

    const { price, patientName, _id } = appoint
    const { user } = useAuth();
        
    const stripe = useStripe();
    const elements = useElements();

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [process, setProcess] = useState(false)

    //post c-card
    useEffect(() => {
        fetch('https://radiant-hamlet-62916.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({price})
        })
            .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[price])


    const handleSubmit = async (e) => {
    e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    setProcess(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
            setSuccess('')
        }
        else {
            setError('')
            console.log(paymentMethod);
        }
        //payment intent
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: user.email
                },
              },
            },
        );
        
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setSuccess('payment successfully')
            setError('')
            console.log(paymentIntent);
            setProcess(false)

            //save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transcation: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://radiant-hamlet-62916.herokuapp.com/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

}

    return (
        <div>

            {
            success && <p style={{ color: 'green' }}>{success}</p>
            }
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }

             <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {process ? <CircularProgress />  : <button type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
                </form>
        </div>
    );
};

export default CheckoutFrom;