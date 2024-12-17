const express = require('express');
const connectDB = require('./config/db');
const HealthRoutes = require('./routes/HealthRoutes'); 
const cors = require("cors")
const tracks = require("./routes/HealthRoutes")
const path = require('path');
require("dotenv").config( { path: "./config.env" } )

// CONNECT TO DB
connectDB()

const app = express();

// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/", HealthRoutes)


app.get("/", (req, res) => {
    res.send("HomePage");
});

const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});