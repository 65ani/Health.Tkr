import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateTrackInfo(props) {
  const [track, setTrack] = useState({
      name: '',
      date: '',
      steps: '',
      caloriesburned: '',
      distancecovered: '',
      weight: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/tracks/${id}`)
      .then((res) => {
        setTrack({
             
                Name: res.data.name, 
                Date: res.data.date, 
                steps: res.data.steps, 
                caloriesburned: res.data.caloriesburned, // Assuming caloriesburned are available in res.data
                distancecovered: res.data.distancecovered, // Assuming distancecovered are available in res.data
                weight: res.data.weight, 
                
              
        });
      })
      .catch((err) => {
        console.log('Error from UpdateTrackInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: track.name,
      date: track.date,
      steps: track.steps,
      caloriesburned: track.caloriesburned,
      distancecovered: track.distancecovered,
      weight: track.weight,
    };

    axios
      .put(`/api/tracks/${id}`, data)
      .then((res) => {
        navigate(`/show-track/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateTrackInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdateTrackInfo'>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Track List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Track</h1>
            <p className='lead text-center'>Update Track's Info</p>
          </div>
        </div>
               <div className='col-md-8 m-auto'>
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

              <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Book
            </button>
            <br /> <br />
          </form>
        </div>
      </div>

    </div>
  );
}

export default UpdateTrackInfo;