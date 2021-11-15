import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)
        
        fetch('http://localhost:5000/doctors', {
        method: 'POST',
        body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                setSuccess('doctors added successfully')
                // console.log('doctors added successfully');
            }
        })  
        .catch(error => {
        console.error('Error:', error);
        });
    }

    return (
        <div>
            <h3>Add a Doctor</h3>
            {success &&
                <p style={{color:'green'}}>{success} </p>
            }
            
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{windth:'50%'}}
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    variant="standard"
                    required
                focused
                /> <br />
                <TextField
                    sx={{windth:'50%'}}
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                    required
                focused
                /> <br />

                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                /> <br />
                    
                <Button
                    variant="contained" type="submit">
                    Upload
                </Button>

            </form>
        </div>
    );
};

export default AddDoctor;