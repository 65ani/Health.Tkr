import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import TrackCard from './TrackCard';

function ShowTrackList() {
  const [track, setTrack] = useState([]); 
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
    .get(`https://5000-65ani-healthtkr-cwo7t3jf0hp.ws-us117.gitpod.io/api/tracks`)
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Track List
      </Typography>

      <Button
        component={Link}
        to="/create-track"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Add New Track
      </Button>

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
            track.map((trackItem) => ( 
              <Grid item xs={12} sm={6} md={4} key={trackItem._id}> {/* Assumes trackItem has _id */}
                <TrackCard track={trackItem} />
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
