import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import TrackCard from './TrackCard';

function ShowTrackList() {
  const [tracks, setTracks] = useState([]); 
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(`/api/tracks`)
      .then((res) => {
        setTracks(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log('Error from ShowTrackList ->', err);
        setLoading(false); // Set loading to false even on error
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
        <Grid container spacing={3}>
          {tracks.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="text.secondary">
                No Tracks found!
              </Typography>
            </Grid>
          ) : (
            tracks.map((trackItem) => ( // Renamed 'track' to 'trackItem' for clarity
              <Grid item xs={12} sm={6} md={4} key={trackItem._id}> {/* Assumes trackItem has _id */}
                <TrackCard track={trackItem} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}

export default ShowTrackList;
