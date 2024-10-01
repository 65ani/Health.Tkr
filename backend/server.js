const express = require('express');
const connectDB = require('./config/db');
const HealthRoutes = require('./routes/HealthRoutes'); // Import room routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("Hellooo");
});

// Use health routes with prefix '/api'
app.use('/api', HealthRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});