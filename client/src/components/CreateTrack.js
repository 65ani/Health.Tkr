import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import {  Grid, Typography, TextField, Button, Box, Paper ,InputLabel} from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '@mui/material';
import axios from 'axios';
       

// Set base URL for Axios
axios.defaults.baseURL = "https://health-tkr.onrender.com/api/tracks";

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
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 5 }}>
      <ToastContainer />
      <Box sx={{ mb: 4 }}>
        <Link to="/track-list" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="warning" sx={{ mb: 4 }}>
            Show Track List
          </Button>
        </Link>
      </Box>

      <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Add Track
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
          Track your health journey
        </Typography>

        <Box component="form" onSubmit={onSubmit}>
          <Grid container spacing={3}>
            {/* Name of the Track */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name of the Track"
                name="name"
                value={track.name}
                onChange={onChange}
                required
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '& .MuiInputLabel-root': {
                    color: 'black', // Black label color
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'pink', // Pink border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'pink', // Pink border on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'pink', // Pink border when focused
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'black', // Black text color
                  },
                }}
              />
            </Grid>

            {/* Date */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                name="date"
                value={track.date}
                onChange={onChange}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'pink',
                    },
                    '&:hover fieldset': {
                      borderColor: 'pink',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'pink',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'black',
                  },
                }}
              />
            </Grid>

            {/* Steps */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Steps"
                type="number"
                name="steps"
                value={track.steps}
                onChange={onChange}
                required
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'pink',
                    },
                    '&:hover fieldset': {
                      borderColor: 'pink',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'pink',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'black',
                  },
                }}
              />
            </Grid>

            {/* Calories Burned */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Calories Burned"
                type="number"
                name="caloriesburned"
                value={track.caloriesburned}
                onChange={onChange}
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'pink',
                    },
                    '&:hover fieldset': {
                      borderColor: 'pink',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'pink',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'black',
                  },
                }}
              />
            </Grid>

            {/* Distance Covered */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Distance Covered (km)"
                type="number"
                name="distancecovered"
                value={track.distancecovered}
                onChange={onChange}
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'pink',
                    },
                    '&:hover fieldset': {
                      borderColor: 'pink',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'pink',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'black',
                  },
                }}
              />
            </Grid>

            {/* Weight */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Weight (kg)"
                type="number"
                name="weight"
                value={track.weight}
                onChange={onChange}
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'pink',
                    },
                    '&:hover fieldset': {
                      borderColor: 'pink',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'pink',
                    },
                  },
                  '& .MuiInputBase-input': {
                    color: 'black',
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ mt: 4 }}>
            <Button type="submit" variant="contained" color="warning" fullWidth>
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateTrack;
