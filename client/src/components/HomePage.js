// // src/components/HomePage.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Button,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Fade,
//   CircularProgress,
//   Divider
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import DownloadIcon from '@mui/icons-material/Download';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import PersonIcon from '@mui/icons-material/Person';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import QrCodeIcon from '@mui/icons-material/QrCode';
// import SearchIcon from '@mui/icons-material/Search';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import NotesIcon from '@mui/icons-material/Notes';
// import axios from 'axios';

// const HomePage = () => {
//   const [stats, setStats] = useState({
//     totalTracks: 0,
//     uniqueAuthors: 0,
//     recentTrack: null
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('/api/tracks')
//       .then(res => {
//         const tracks = res.data;
//         const uniqueAuthors = new Set(tracks.map(track => track.author)).size;
//         const recentTrack = tracks.sort((a, b) =>
//           new Date(b.published_date) - new Date(a.published_date)
//         )[0];

//         setStats({
//           totalTracks: tracks.length,
//           uniqueAuthors,
//           recentTrack
//         });
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching stats:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Fade in={true} timeout={800}>
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         {/* Welcome Section */}
//         <Box textAlign="center" mb={6}>
//           <Typography variant="h3" component="h1" color="primary" gutterBottom>
//            WELCOME TO YOUR PERSONAL HEALTH TRACKER
//           </Typography>
//           <Typography variant="h6" color="text.secondary" gutterBottom>
//           Track your health, achieve your goals, and embrace a healthier lifestyle

//           </Typography>
//         </Box>

//         {/* Stats Cards */}
//         <Grid container spacing={4} mb={6}>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
//               <CardContent sx={{ textAlign: 'center', width: '100%' }}>
//                 <MenuBookIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//                 <Typography variant="h4" gutterBottom>
//                   {stats.totalTracks}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary">
//                   Total Tracks
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
//               <CardContent sx={{ textAlign: 'center', width: '100%' }}>
//                 <PersonIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//                 <Typography variant="h4" gutterBottom>
//                   {stats.uniqueAuthors}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary">
//                   Unique Authors
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
//               <CardContent sx={{ textAlign: 'center', width: '100%' }}>
//                 <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
//                 <Typography variant="h4" gutterBottom>
//                   Latest Track
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary">
//                   {stats.recentTrack?.title || 'No tracks yet'}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* Features Section */}
//         <Box sx={{ textAlign: 'center', mb: 4 }}>
//           <Typography variant="h5" gutterBottom color="primary">
//             Available Features
//           </Typography>
//         </Box>

//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Button
//               component={Link}
//               to="/track-list"
//               variant="contained"
//               size="large"
//               startIcon={<LibraryBooksIcon  />}
//               fullWidth
//               sx={{ py: 2 }}
//             >
//               View Tracks
//             </Button>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Button
//               component={Link}
//               to="/create-track"
//               variant="contained"
//               size="large"
//               startIcon={<AddIcon />}
//               fullWidth
//               sx={{ py: 2 }}
//             >
//               Add New Track
//             </Button>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Button
//               component={Link}
//               to="/export"
//               variant="contained"
//               size="large"
//               startIcon={<DownloadIcon />}
//               fullWidth
//               sx={{ py: 2 }}
//             >
//               Export Data
//             </Button>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Button
//               component={Link}
//               to="/qr-codes"
//               variant="contained"
//               size="large"
//               startIcon={<QrCodeIcon />}
//               fullWidth
//               sx={{ py: 2 }}
//             >
//               QR Codes
//             </Button>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Button
//               component={Link}
//               to="/notes/home"
//               variant="contained"
//               size="large"
//               startIcon={<NotesIcon />}
//               fullWidth
//               sx={{ py: 2 }}
//             >
//               Notes
//             </Button>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Button
//               component="a"
//               href="https://github.com/65ani/Health.Tkr"
//               target="_blank"
//               rel="noopener noreferrer"
//               variant="contained"
//               size="large"
//               startIcon={<GitHubIcon />}
//               fullWidth
//               sx={{ py: 2 }}
//             >
//               GitHub
//             </Button>
//           </Grid>

//           {/* Resume Button */}
//           <Grid item xs={12} sm={6} md={3}>
//                 <Button
//                   component="a"
//                   href="https://docs.google.com/document/d/1s2NIMxIjqIe0XhcVG8meiG_llBIKOwTW-gdsZJxbW6E/edit?tab=t.0"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   variant="contained"
//                   startIcon={<MenuBookIcon />}
//                   size="large"
//                   fullWidth
//                   sx={{
//                     padding: '16px',
//                     borderRadius: '8px',
//                     boxShadow: 2,
//                     '&:hover': { boxShadow: 6 },
//                   }}
//                 >
//                   Resume
//                 </Button>
//               </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Button
//               component={Link}
//               to="/search"
//               variant="contained"
//               size="large"
//               startIcon={<SearchIcon />}
//               fullWidth
//               sx={{ py: 2 }}
//             >
//               Explore Track
//             </Button>
//           </Grid>

//         </Grid>
//       </Container>
//     </Fade>
//   );
// };

// export default HomePage;
// 
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Avatar,
  Paper,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import QrCodeIcon from '@mui/icons-material/QrCode';
import NotesIcon from '@mui/icons-material/Notes';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalTracks: 0,
    uniqueAuthors: 0,
    recentTrack: null,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    axios
      .get('https://health-tkr.onrender.com/api/tracks')
      .then((res) => {
        const track = res.data;
        const uniqueAuthors = new Set(track.map((track) => track.author)).size;
        const recentTrack = track.sort((a, b) =>
          new Date(b.published_date) - new Date(a.published_date)
        )[0];

        setStats({
          totalTracks: track.length,
          uniqueAuthors,
          recentTrack,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            WELCOME TO YOUR HEALTH TRACKER SYSTEM
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Discover personalized insights and manage your health journey with ease.
          </Typography>
        </Grid>

       {/* Interactive Feature Section */}
       <Grid item xs={12} md={6}>
  <Paper
    elevation={3}
    sx={{
      p: 3,
      textAlign: 'center',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 400,
      margin: '0 auto',
    }}
  >
    <AddIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
    <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
      Create a New Track
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
      Start your journey by creating a personalized health track.
    </Typography>
    <Button
      component={Link}
      to="/create-track"
      variant="contained"
      size="medium"
      sx={{ px: 3, py: 1 }}
    >
      Create Track
    </Button>
  </Paper>
</Grid>
      </Grid>

      {/* Stats Section */}
      <Grid container spacing={4} sx={{ my: 6 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: 'center', p: 4 }}>
            <Avatar sx={{ bgcolor: 'primary.main', mb: 2, width: 56, height: 56 }}>
              <LibraryBooksIcon fontSize="large" />
            </Avatar>
            <Typography variant="h4">{stats.totalTracks}</Typography>
            <Typography variant="body1" color="text.secondary">
              Total Tracks
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: 'center', p: 4 }}>
            <Avatar sx={{ bgcolor: 'secondary.main', mb: 2, width: 56, height: 56 }}>
              <PersonIcon fontSize="large" />
            </Avatar>
            <Typography variant="h4">{stats.uniqueAuthors}</Typography>
            <Typography variant="body1" color="text.secondary">
              Unique tracks
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: 'center', p: 4 }}>
            <Avatar sx={{ bgcolor: 'error.main', mb: 2, width: 56, height: 56 }}>
              <SearchIcon fontSize="large" />
            </Avatar>
            <Typography variant="h6">
              {stats.recentTrack?.title || 'No recent tracks'}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Latest Track
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Typography
        variant="h5"
        color="primary"
        gutterBottom
        sx={{ textAlign: 'center', mb: 4 }}
      >
        Explore Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            component={Link}
            to="/track-list"
            variant="contained"
            size="large"
            startIcon={<LibraryBooksIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            View Tracks
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            component={Link}
            to="/export"
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            Export Data
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            component={Link}
            to="/qr-codes"
            variant="contained"
            size="large"
            startIcon={<QrCodeIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            QR Codes
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            component={Link}
            to="/notes/home"
            variant="contained"
            size="large"
            startIcon={<NotesIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            Notes
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            component="a"
            href="https://github.com/65ani/Health.Tkr"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            startIcon={<GitHubIcon />}
            fullWidth
            sx={{ py: 2 }}
          >
            GitHub
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
