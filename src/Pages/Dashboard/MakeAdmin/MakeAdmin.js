import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const { token } = useAuth();

    const handleOnBlur = e => {
        console.log(e.target.value);
        setEmail(e.target.value);  //ekta man tai direct bole dilei hobe---onk gula hole segula object akare catch kore dhore set korte hoto
    }

    const handleAdminSubmit = e => {
        const user = { email };
        console.log('clicked');
        fetch('https://radiant-hamlet-62916.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {       
            if (data.modifiedCount) {
                    console.log(data);
                setSuccess(true);
            }
        })
        
        e.preventDefault()
    }

    return (
        <div>
            <h3>Make me an Admin</h3>

            <form onSubmit={handleAdminSubmit}>
                
                <TextField
                    sx={{width:'50%'}}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;