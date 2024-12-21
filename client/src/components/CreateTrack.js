import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (!track.name.trim()) {
      toast.error('Name field is required!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Slide,
      });
      return;
    }

    axios
      .post('/tracks', track)
      .then(() => {
        setTrack({
          name: '',
          date: '',
          steps: '',
          caloriesburned: '',
          distancecovered: '',
          weight: '',
        });

        toast.success('Track added successfully!', {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in CreateTrack:', err.response?.data || err.message);
        toast.error('Failed to create track. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
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
                  placeholder="Distance Covered"
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
                  placeholder="Weight"
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
  );
};

export default CreateTrack;
