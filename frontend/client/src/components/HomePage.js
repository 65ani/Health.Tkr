import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
    return (
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h2" component="h1" color="primary" gutterBottom>
              WELCOME TO HEALTH TRACKER SYSTEM
              </Typography>
      <Typography variant="h5" gutterBottom>
         Monitor your wellness journey and stay on top of your fitness goals.
      </Typography>
      <Box mt={4}>
        <Button 
          component={Link} 
          to="/track-list" // Updated to link to the ShowTrackList component
          color="primary" 
          variant="contained"
        >
          View Tracks
        </Button>
      </Box>
      </Container>
  );
};

export default HomePage;
