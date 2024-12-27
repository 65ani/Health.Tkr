// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import sunsetTheme from './theme/sunset';  // Corrected the import to match theme name

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateTrack from './components/CreateTrack';
import ShowTrackList from './components/ShowTrackList';
import ShowTrackDetails from './components/ShowTrackDetails';
import UpdateTrack from './components/UpdateTrack';
import HomePage from './components/HomePage';
import ExportPage from './components/ExportPage';
import NotesPage from './components/NotesPage'; 
import QRCodePage from './components/QRCodePage'; 
import SearchTrack from './components/SearchTrack';

const App = () => {
  return (
    <ThemeProvider theme={sunsetTheme}>  {/* Corrected the theme usage */}
      <CssBaseline />  {/* Un-commented to use global CSS reset */}
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box component="main" flexGrow={1} py={3}>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/track-list' element={<ShowTrackList />} />
              <Route path='/create-track' element={<CreateTrack />} />
              <Route path='/show-track/:id' element={<ShowTrackDetails />} />
              <Route path='/edit-track/:id' element={<UpdateTrack />} />
              <Route path="/export" element={<ExportPage />} />
              <Route path="/search" element={<SearchTrack />} />
              <Route path="/qr-codes" element={<QRCodePage />} />
              <Route path='/notes/*' element={<NotesPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
