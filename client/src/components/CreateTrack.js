import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '@mui/material';
import axios from 'axios';

// Set base URL for Axios
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

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate required fields
  //   if (!track.name.trim() || !track.date.trim() || !track.steps) {
  //     toast.error('Name, Date, and Steps are required!', {
  //       position: 'top-right',
  //       autoClose: 3000,
  //       theme: 'dark',
  //       transition: Slide,
  //     });
  //     return;
  //   }

  //   try {
  //     // Log the payload for debugging
  //     console.log("Payload being sent:", track);

  //     // Send the request to the backend
  //     const response = await axios.post('/tracks', {
  //       name: track.name,
  //       date: track.date,
  //       steps: parseInt(track.steps, 10),
  //       caloriesburned: track.caloriesburned ? parseInt(track.caloriesburned, 10) : 0,
  //       distancecovered: track.distancecovered ? parseFloat(track.distancecovered) : 0,
  //       weight: track.weight ? parseFloat(track.weight) : 0,
  //     });

  //     // Reset form and notify success
  //     setTrack({
  //       name: '',
  //       date: '',
  //       steps: '',
  //       caloriesburned: '',
  //       distancecovered: '',
  //       weight: '',
  //     });

  //     toast.success('Track added successfully!', {
  //       position: 'top-right',
  //       autoClose: 5000,
  //       theme: 'dark',
  //       transition: Slide,
  //     });

  //     setTimeout(() => {
  //       navigate('/');
  //     }, 5000);
  //   } catch (error) {
  //     console.error('Error in CreateTrack:', error.response?.data || error.message);
  //     toast.error(
  //       `Error: ${error.response?.data?.message || 'Something went wrong!'}`,
  //       {
  //         position: 'top-right',
  //         autoClose: 5000,
  //         theme: 'dark',
  //         transition: Slide,
  //       }
  //     );
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Validate required fields
    if (!track.name.trim() || !track.date || !track.steps) {
      toast.error('name, date, and steps are required!', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
        transition: Slide,
      });
      return;
    }
  
    try {
      // Log the payload for debugging
      console.log("Payload being sent:", track);
  
      // Send the request to the backend
      const response = await axios.post('/tracks', track);
  
      // Reset form and notify success
      setTrack({
        name: '',
        date: '',
        steps: '',
        caloriesburned: '',
        distancecovered: '',
        weight: '',
      });
  
      toast.success('Track added successfully!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
        transition: Slide,
      });
  
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      console.error('Error in CreateTrack:', error.response?.data || error.message);
      toast.error(
        `Error: ${error.response?.data?.message || 'Something went wrong!'}`,
        {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
          transition: Slide,
        }
      );
    }
  };
  


  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
    <div className="CreateTrack">
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Track List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Track</h1>
            <p className="lead text-center">Track your health journey</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name of the track"
                  name="name"
                  className="form-control"
                  value={track.name}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={track.date}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Steps"
                  name="steps"
                  className="form-control"
                  value={track.steps}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Calories Burned"
                  name="caloriesburned"
                  className="form-control"
                  value={track.caloriesburned}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Distance Covered (km)"
                  name="distancecovered"
                  className="form-control"
                  value={track.distancecovered}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  name="weight"
                  className="form-control"
                  value={track.weight}
                  onChange={onChange}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-outline-warning btn-block mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default CreateTrack;
