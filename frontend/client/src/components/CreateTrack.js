import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const CreateTrack = (props) => {
    const navigate = useNavigate();
    const [track, setTrack] = useState({
      Name: '',
      Date: '',
      Steps: '',
      Caloriesburned: '',
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
          .post('/api/tracks', track)
          .then((res) => {
            setTrack({
              Name: '',
              Date: '',
              Steps: '',
              Caloriesburned: '',
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
                    <Link to='/' className='btn btn-outline-warning float-left'>
                      Show Track List
                    </Link>
                  </div>
                  <div className='col-md-8 m-auto'>
                    <h1 className='display-4 text-center'>Add Track</h1>
                    <p className='lead text-center'>Create New Track</p>
        
                    <form noValidate onSubmit={onSubmit}>
                      <div className='form-group'>
                        <input
                          type='text'
                          placeholder='Name of the track'
                          name='Name'
                          className='form-control'
                          value={track.name}
                          onChange={onChange}
                        />
                      </div>
                      <br />
                      <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date'
                  name='Date'
                  className='form-control'
                  value={track.date}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Steps'
                  name='Steps'
                  className='form-control'
                  value={track.Steps}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Caloriesburned'
                  name='Caloriesburned'
                  className='form-control'
                  value={track.Caloriesburned}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Distancecovered'
                  name='Distancecovered'
                  className='form-control'
                  value={track.Distancecovered}
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


 