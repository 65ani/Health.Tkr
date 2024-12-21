// src/theme/sunset.js
import { createTheme } from '@mui/material/styles';

// Define the Sunset theme colors
const sunsetColors = {
  base: '#2e1a47', // Deep purple for base color
  surface: '#3d1e5e', // Darker purple for surface
  overlay: '#5b2a83', // A little lighter purple overlay
  muted: '#d1748d', // Soft muted pink for subtle elements
  subtle: '#f1a1c6', // Lighter pink for softer elements
  text: '#f4e1c1', // Light cream color for text
  love: '#f06f6f', // Warm red for error
  gold: '#f1c27d', // Light gold for warning
  rose: '#f287ae', // Light rose for primary color
  pine: '#ffac33', // Soft orange for secondary
  foam: '#78e0b2', // Aqua for info
  iris: '#6c4a8e', // Rich purple for accents
  highlightLow: '#3e1f52', // Deep shadow for low highlight
  highlightMed: '#5b2a83', // Medium shade for medium highlight
  highlightHigh: '#8c3d9d', // High highlight
};

const sunsetTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: sunsetColors.base,
      paper: sunsetColors.surface,
    },
    primary: {
      main: sunsetColors.rose,
    },
    secondary: {
      main: sunsetColors.pine,
    },
    error: {
      main: sunsetColors.love,
    },
    warning: {
      main: sunsetColors.gold,
    },
    info: {
      main: sunsetColors.foam,
    },
    success: {
      main: sunsetColors.pine,
    },
    text: {
      primary: sunsetColors.text,
      secondary: sunsetColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Arial", "Helvetica", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: sunsetColors.surface,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
      `,
    },
  },
});

export default sunsetTheme;
