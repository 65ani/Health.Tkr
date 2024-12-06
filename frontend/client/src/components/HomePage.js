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
      </Container>
  );
};

export default HomePage;
