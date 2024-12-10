const express = require("express")
const connectDB = require("./config/db")
const tracks = require("./routes/HealthRoutes")
const cors = require("cors")
const path = require('path');
require("dotenv").config( { path: "./config.env" } )

// CONNECT TO DB
connectDB()

// INITIATE APP
const app = express()

// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/tracks", tracks)


// SERVE STATIC FILES
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("heyyyy");
});

// Use room routes with prefix '/api'
app.use('/api', HealthRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});