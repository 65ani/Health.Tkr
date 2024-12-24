// src/components/QRCodePage.js
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Box
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const QRCodePage = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = 'https://health-tkr.onrender.com/show-track';

  useEffect(() => {
    axios.get('/api/tracks')
      .then(res => {
        setTracks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching tracks:', err);
        setLoading(false);
      });
  }, []);

  const downloadQR = (trackId, trackName) => {
    const canvas = document.createElement('canvas');
    const svg = document.getElementById(`qr-${trackId}`);
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
  
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
  
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
  
      const a = document.createElement('a');
      a.download = `HealthTracker_QR_${trackName.replace(/\s+/g, '_')}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
  };
  
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Track QR Codes
      </Typography>
      <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
        Scan QR codes to quickly access track details
      </Typography>

      <Grid container spacing={3}>
        {tracks.map((track) => (
          <Grid item xs={12} sm={6} md={4} key={track._id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <QRCodeSVG
                  id={`qr-${track._id}`}
                  value={`${baseUrl}${track._id}`}
                  size={200}
                  level="H"
                  includeMargin
                />
                <Typography variant="h6" component="div" align="center" sx={{ mt: 2, mb: 1 }}>
                  {track.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
                  Date: {track.date}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
                  Steps: {track.steps}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
                  Calories Burned: {track.caloriesBurned}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
                  Distance Covered: {track.distanceCovered} km
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
                  Weight: {track.weight} kg
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={() => downloadQR(track._id, track.name)}
                  size="small"
                >
                  Download QR
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QRCodePage;
