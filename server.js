const express = require('express');
const connectDB = require('./config/db');
// const HealthRoutes = require('./routes/HealthRoutes'); 
const cors = require("cors")
const HealthRoutes = require("./routes/HealthRoutes")
const path = require('path');
require("dotenv").config( { path: "./config.env" } )

// CONNECT TO DB
connectDB()

const app = express();

// HANDLE MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/api", HealthRoutes)

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "/client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.get("/", (req, res) => {
    res.send("WELCOME TO HEALTH TRACKER PROJECT");
});

const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});