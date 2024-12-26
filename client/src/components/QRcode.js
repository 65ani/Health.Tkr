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
  const [track, setTrack] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });
  const baseUrl = process.env.REACT_APP_TRACK_BASE_URL || 'https://health-tkr.onrender.com/show-track';

  useEffect(() => {
    axios.get('/api/tracks')
      .then((res) => {
        setTrack(res.data);
        setStatus({ loading: false, error: null });
      })
      .catch((err) => {
        console.error('Error fetching tracks:', err);
        setStatus({ loading: false, error: 'Failed to fetch tracks. Please try again later.' });
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

  if (status.loading) {
    return <CircularProgress />;
  }

  if (status.error) {
    return <Typography color="error">{status.error}</Typography>;
  }

  if (tracks.length === 0) {
    return <Typography>No tracks available.</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center">Track QR Codes</Typography>
      <Grid container spacing={3}>
        {track.map((track) => (
          <Grid item xs={12} sm={6} md={4} key={track._id}>
            <Card>
              <CardContent>
                <QRCodeSVG id={`qr-${track._id}`} value={`${baseUrl}${track._id}`} size={200} />
                <Typography>{track.name}</Typography>
                <Button onClick={() => downloadQR(track._id, track.name)}>Download QR</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QRCodePage;
