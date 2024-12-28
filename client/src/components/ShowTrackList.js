import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, CircularProgress, Box } from '@mui/material';
import { Grid } from '@mui/material';

import TrackCard from './TrackCard';

function ShowTrackList() {
  const [track, setTrack] = useState([]); 
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
    .get(`https://health-tkr.onrender.com/api/tracks`)
    .then((res) => {
      console.log(res.data); // Inspect the response
      setTrack(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error from ShowTrackList:', err); // Log error details
      setLoading(false);
    });  
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(to right, #d3c0eb, #a2c2e0)', // Subtle blue gradient
        borderRadius: 8,
        boxShadow: 4,
      }}
    >
      {/* Card-like Box for Title and Button */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 700,
          padding: 4,
          borderRadius: 6,
          backgroundColor: '#ffffff',
          boxShadow: 6,
          textAlign: 'center',
          zIndex: 1,
          position: 'relative',
          mb: 4, // Adds margin below the title box
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          color="primary"
          sx={{
            fontWeight: 700,
            letterSpacing: 1.5,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2,
          }}
        >
          Track List
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{
            fontSize: 18,
            fontStyle: 'italic',
            marginBottom: 4,
            fontWeight: '300',
          }}
        >
          View, manage, and add new tracks
        </Typography>

        {/* Floating Add Button */}
        <Button
          component={Link}
          to="/create-track"
          variant="contained"
          color="secondary"
          sx={{
            position: 'absolute',
            bottom: -40,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '15px 35px',
            fontSize: '1.2rem',
            fontWeight: 600,
            borderRadius: '50px',
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#ff4081', // Coral hover effect
              boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.4)',
              transform: 'translateX(-50%) scale(1.1)',
            },
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          Add New Track
        </Button>
      </Box>



      {loading ? (
        // Show a loading spinner while data is being fetched
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
        <Grid container spacing={3}>
          {track.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="text.secondary">
                No Tracks found!
              </Typography>
            </Grid>
          ) : (
            track.map((track, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TrackCard track={track} />
              </Grid>
            ))
          )}
        </Grid>
        </Box>
      )}
    </Container>
  );
}

export default ShowTrackList;
