import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Button, Menu, MenuItem, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorElHome, setAnchorElHome] = useState(null);
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const handleOpenHome = (event) => {
    setAnchorElHome(event.currentTarget);
  };

  const handleCloseHome = () => {
    setAnchorElHome(null);
  };

  const handleOpenAbout = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseAbout = () => {
    setAnchorElAbout(null);
  };

  const handleOpenDialog = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogContent('');
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Section: Logo and Health Tracker Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.8rem',
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              component="img"
              src="https://img.icons8.com/?size=100&id=46599&format=png&color=000000" // Replace with your logo's path
              alt="Logo"
              sx={{
                height: '40px',
                width: '40px',
              }}
            />
            Health Tracker
          </Typography>
        </Box>

        {/* Right Section: Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Home Dropdown */}
          <IconButton
            color="primary"
            onClick={handleOpenHome}
            sx={{
              paddingX: 1,
              paddingY: 1,
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
              },
            }}
          >
            Home
          </IconButton>
          <Menu
            anchorEl={anchorElHome}
            open={Boolean(anchorElHome)}
            onClose={handleCloseHome}
          >
            {/* Add home menu items here if needed */}
          </Menu>

          {/* About Us Dropdown */}
          <IconButton
            color="primary"
            onClick={handleOpenAbout}
            sx={{
              paddingX: 1,
              paddingY: 1,
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
              },
              marginLeft: 2,
            }}
          >
            About Us
            <ArrowDropDownIcon sx={{ marginLeft: 0.5 }} />
          </IconButton>
          <Menu
            anchorEl={anchorElAbout}
            open={Boolean(anchorElAbout)}
            onClose={handleCloseAbout}
          >
            <MenuItem onClick={() => handleOpenDialog('healthTracker')}>
              About Health Tracker
            </MenuItem>
            <MenuItem onClick={() => handleOpenDialog('ourTeam')}>
              Our Team
            </MenuItem>
          </Menu>

          {/* GitHub Button */}
          <Button
            component="a"
            href="https://github.com/65ani/Health.Tkr"
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            color="primary"
            sx={{
              paddingX: 1,
              paddingY: 1,
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {},
              marginLeft: 2,
            }}
          >
            <GitHubIcon sx={{ marginRight: 0.5 }} />
            GitHub
          </Button>
        </Box>
      </Toolbar>

      {/* Dialog for About Us Content */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{dialogContent === 'healthTracker' ? 'About Health Tracker' : 'Our Team'}</DialogTitle>
        <DialogContent>
          {dialogContent === 'healthTracker' ? (
            <Typography style={{ fontSize: '14px' }}>
              Health Tracker is an innovative platform designed to help users monitor and manage their health and fitness goals effectively.
              With features like tracking daily steps, calories burned, distance covered, and weight, the app provides comprehensive insights into your physical progress.
            </Typography>
          ) : (
            <Typography style={{ fontSize: '14px' }}>
              Our team consists of dedicated professionals passionate about health and technology. We are committed to providing the best possible tools to help you achieve your wellness goals.
              Our team includes fitness experts, software developers, and designers working together to create an intuitive user experience.
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default Navbar;
