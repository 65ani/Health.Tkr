import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Container } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

axios.defaults.baseURL = "https://health-tkr.onrender.com/api";

const CreateTrack = () => {
    const navigate = useNavigate();
    const [track, setTrack] = useState({
        name: '',
        date: '',
        steps: '',
        caloriesburned: '',
        distancecovered: '',
        weight: '',
    });

    const onChange = (e) => {
        setTrack({ ...track, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/tracks', {
                ...track,
                steps: parseInt(track.steps, 10),
                caloriesburned: parseInt(track.caloriesburned, 10),
                distancecovered: parseFloat(track.distancecovered),
                weight: parseFloat(track.weight),
            });

            toast.success('Track added successfully!!', {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
                transition: Slide,
            });

            setTimeout(() => navigate('/'), 5000);
        } catch (err) {
            console.error('Error in CreateTrack!', err.response?.data || err.message);
            toast.error(err.response?.data?.message || 'Something went wrong, try again!', {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
                transition: Slide,
            });
        }
    };

    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
            <div className='CreateTrack'>
                <ToastContainer position="top-right" autoClose={5000} theme="light" transition={Slide} />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <Link to='/create-track' className='btn btn-outline-warning float-left'>
                                Show Track List
                            </Link>
                        </div>
                        <div className='col-md-8 m-auto'>
                            <h1 className='display-4 text-center'>Add Track</h1>
                            <p className='lead text-center'>Start tracking your health journey by adding a new track.</p>
                            <form noValidate onSubmit={onSubmit}>
                                <input type='text' placeholder='Name of the track' name='name' className='form-control' value={track.name} onChange={onChange} />
                                <input type='date' placeholder='Date' name='date' className='form-control' value={track.date} onChange={onChange} />
                                <input type='number' placeholder='Steps' name='steps' className='form-control' value={track.steps} onChange={onChange} />
                                <input type='number' placeholder='Calories Burned' name='caloriesburned' className='form-control' value={track.caloriesburned} onChange={onChange} />
                                <input type='number' placeholder='Distance Covered (km)' name='distancecovered' className='form-control' value={track.distancecovered} onChange={onChange} />
                                <input type='number' placeholder='Weight (kg)' name='weight' className='form-control' value={track.weight} onChange={onChange} />
                                <input type='submit' className='btn btn-outline-warning btn-block mt-4' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CreateTrack;
