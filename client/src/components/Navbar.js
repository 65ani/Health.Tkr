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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const notesPages = [
  { title: 'Home', path: '/notes/home', icon: <MenuBookOutlinedIcon /> },
  { title: 'Schedule', path: '/notes/schedule', icon: <CalendarMonthOutlinedIcon /> },
];

const Navbar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)',
        paddingX: 2,
      }}
    >
      <Toolbar>
        {/* <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main', // Uses the primary color defined in your theme (sunsetColors.rose)
            fontFamily: '"Courier New", monospace', // A unique font for a distinct look
            fontWeight: '700', // Bold weight for emphasis
            fontSize: '1.8rem', // Slightly larger font size for prominence
            letterSpacing: '0.1em', // Adds some spacing between letters for elegance
            '&:hover': {
              color: 'rgba(111, 0, 255, 0.5)', // Subtle purple glow on hover
            },
          }}
        >
          Health Tracker
        </Typography> */}
       <Box
  component={RouterLink}
  to="/"
  sx={{
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    textDecoration: 'none',
    '& img': {
      height: '50px', // Adjust the height as needed
      width: 'auto', // Maintains the aspect ratio
      transition: '0.3s ease', // Smooth transition for hover effects
    },
    '&:hover img': {
      transform: 'scale(1.1)', // Slight zoom on hover
    },
  }}
>
  <img 
    src="https://cdn-icons-png.flaticon.com/512/535/535285.png" 
    alt="Health Tracker Logo" 
  />
</Box>


        {/* Styled Home Icon */}
        <IconButton
          color="primary"
          component={RouterLink}
          to="/"
          sx={{
            border: '2px solid',
            borderColor: 'primary.main',
            borderRadius: '8px',
            padding: 1,
            marginRight: 2,
            '&:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
          }}
        >
          <HomeOutlinedIcon fontSize="large" />
        </IconButton>

        {/* Styled Notes Icon */}
        <IconButton
          color="primary"
          onClick={handleMenuClick}
          sx={{
            border: '2px solid',
            borderColor: 'primary.main',
            borderRadius: '8px',
            padding: 1,
            marginRight: 2,
            '&:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
          }}
        >
          <MenuBookOutlinedIcon fontSize="large" />
        </IconButton>

        <Menu
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            sx: {
              '& .MuiMenuItem-root:hover': {
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
              },
            },
          }}
        >
          {notesPages.map((page) => (
            <MenuItem
              key={page.path}
              component={RouterLink}
              to={page.path}
              onClick={handleMenuClose}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {page.icon}
              <Typography>{page.title}</Typography>
            </MenuItem>
          ))}
        </Menu>

        {/* Styled GitHub Icon */}
        <IconButton
          color="primary"
          component="a"
          href="https://github.com/65ani/Health.Tkr"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: '2px solid',
            borderColor: 'primary.main',
            borderRadius: '8px',
            padding: 1,
            '&:hover': {
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
          }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
