import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowTrackDetails = () => {
  const [track, setTrack] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/tracks/${id}`)
      .then((res) => {
        setTrack(res.data);
      })
      .catch((err) => {
        console.error('Error fetching track details:', err);
        setTrack({ error: 'Error fetching track details' });
      });
  }, [id]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`/api/tracks/${id}`)
      .then(() => {
        navigate('/track-list');
      })
      .catch((err) => {
        console.error('Error deleting track:', err);
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  if (!track) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={track.imageUrl || "https://defaultimageurl.com"}
                alt={track.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {track.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              by {track.date}
            </Typography>
            <Divider sx={{ my: 2 }} />

            {/* Display track details */}
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" paragraph>
                {track.steps}
              </Typography>
              <Typography variant="body1">calories burned: {track.caloriesburned}</Typography>
              <Typography variant="body1">distance covered: {track.distancecovered}</Typography>
              <Typography variant="body1">weight: {track.weight}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/track-list"
            variant="outlined"
          >
            Back to Track List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit-track/${track._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Track
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Track
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this track? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowTrackDetails;
