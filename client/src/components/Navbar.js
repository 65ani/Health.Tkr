import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const notesPages = [
  { title: 'Home', path: '/notes/home', icon: <MenuBookOutlinedIcon /> },
  { title: 'Schedule', path: '/notes/schedule', icon: <CalendarMonthOutlinedIcon /> },
];

const Navbar = () => {
  // States for handling dropdown open/close
  const [anchorElHome, setAnchorElHome] = useState(null);
  const [anchorElNotes, setAnchorElNotes] = useState(null);
  const [anchorElAbout, setAnchorElAbout] = useState(null);

  // Open/close handlers for dropdowns
  const handleOpenHome = (event) => setAnchorElHome(event.currentTarget);
  const handleCloseHome = () => setAnchorElHome(null);

  const handleOpenNotes = (event) => setAnchorElNotes(event.currentTarget);
  const handleCloseNotes = () => setAnchorElNotes(null);

  const handleOpenAbout = (event) => setAnchorElAbout(event.currentTarget);
  const handleCloseAbout = () => setAnchorElAbout(null);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for elevation
        backdropFilter: 'blur(10px)', // Blurred background for modern look
        paddingX: 4, // Horizontal padding for spacing
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
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
              padding: 0, // Removes any padding inside the border
              margin: 0, // Removes any margin outside the border
            }}
          />
          Health Tracker
        </Typography>

       {/* Home Dropdown */}
       <IconButton
          color="primary"
          onClick={handleOpenHome}
          sx={{
            paddingX: 2,
            paddingY: 1,
            fontWeight: 'bold',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
          }}
        >
          Home
            <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
        </IconButton>
        <Menu
          anchorEl={anchorElHome}
          open={Boolean(anchorElHome)}
          onClose={handleCloseHome}
        >
          <MenuItem component={RouterLink} to="/">Home</MenuItem>
          <MenuItem component={RouterLink} to="/home/details">Home Details</MenuItem>
        </Menu>

        {/* Notes Dropdown */}
        <IconButton
          color="primary"
          onClick={handleOpenNotes}
          sx={{
            paddingX: 2,
            paddingY: 1,
            fontWeight: 'bold',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
          }}
        >
          Notes
          <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
        </IconButton>
        <Menu
          anchorEl={anchorElNotes}
          open={Boolean(anchorElNotes)}
          onClose={handleCloseNotes}
        >
          <MenuItem component={RouterLink} to="/notes">View Notes</MenuItem>
          <MenuItem component={RouterLink} to="/notes/add">Add Notes</MenuItem>
        </Menu>

        {/* About Us Dropdown */}
        <IconButton
          color="primary"
          onClick={handleOpenAbout}
          sx={{
            paddingX: 2,
            paddingY: 1,
            fontWeight: 'bold',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
          }}
        >
          About Us
          <ArrowDropDownIcon sx={{ marginLeft: 1 }} />
        </IconButton>
        <Menu
          anchorEl={anchorElAbout}
          open={Boolean(anchorElAbout)}
          onClose={handleCloseAbout}
        >
          <MenuItem component={RouterLink} to="/about">About Health Tracker</MenuItem>
          <MenuItem component={RouterLink} to="/about/team">Our Team</MenuItem>
        </Menu>

        {/* GitHub Button */}
        <Button
          component="a"
          href="https://github.com/65ani/Health.Tkr"
          target="_blank"
          rel="noopener noreferrer"
          variant="text" // No border or background
          color="primary"
          sx={{
            paddingX: 2,
            paddingY: 1,
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
            },
          }}
        >
          <GitHubIcon sx={{ marginRight: 1 }} />
          GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;