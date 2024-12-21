import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Container } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

axios.defaults.baseURL = "https://health-tkr.onrender.com/api";
// axios.defaults.baseURL = "https://5000-65ani-healthtkr-cwo7t3jf0hp.ws-us117.gitpod.io/api";

const CreateTrack = (props) => {
    const navigate = useNavigate();
    const [track, setTrack] = useState({
      name: '',
      date: '',
      steps: '',
      caloriesburned: '',
      distancecovered: '',
      weight: '',
    });
    const [showToast, setShowToast] = useState(false);
  
    const onChange = (e) => {
        setTrack({ ...track, [e.target.name]: e.target.value });
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
    
        axios
          .post('/tracks', track)
          .then((res) => {
            setTrack({
              name: '',
              date: '',
              steps: '',
              caloriesburned: '',
              distancecovered: '',
              weight: '',
            });

          // Show the success alert
          toast.success('Track added successfully!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          navigate('/'); // Navigate to homepage
      }, 5000); // Adjust the timeout as needed
  })
 

.catch((err) => {
  console.log('Error in CreateTrack!');
  console.log('The error is -> ')
  console.log(err)
  // Show the success alert
  toast.error('Something went wrong, try again!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
  });
});
};
        return (
          <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
            <div className='CreateTrack'>
    <div className='container d-flex align-items-center justify-content-center '></div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
              />
        
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 m-auto'>
                    <br />
                    <Link to='/create-track' className='btn btn-outline-warning float-left'>
                      Show Track List
                    </Link>
                  </div>
                  <div className='col-md-8 m-auto'>
                    <h1 className='display-4 text-center'>Add Track</h1>
                    <p className='lead text-center'>Start tracking your health journey by adding a new track.</p>
        
                    <form noValidate onSubmit={onSubmit}>
                      <div className='form-group'>
                        <input
                          type='String'
                          placeholder='Name of the track'
                          name='name'
                          className='form-control'
                          value={track.name}
                          onChange={onChange}
                        />
                      </div>
                      <br />
                      <div className='form-group'>
                <input
                  type='date'
                  placeholder='date'
                  name='date'
                  className='form-control'
                  value={track.date}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='steps'
                  name='steps'
                  className='form-control'
                  value={track.steps}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='caloriesburned'
                  name='caloriesburned'
                  className='form-control'
                  value={track.caloriesburned}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='distancecovered'
                  name='distancecovered'
                  className='form-control'
                  value={track.distancecovered}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='weight'
                  name='weight'
                  className='form-control'
                  value={track.weight}
                  onChange={onChange}
                />
              </div>
              <br />

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>


    </div>
    </Container>
  
  );
};

export default CreateTrack;


 