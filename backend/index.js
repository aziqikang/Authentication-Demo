require('dotenv').config();
const express = require('express');         // Import express.js
const mongoose = require('mongoose');       // Import mongoose for db access
const cors = require('cors');               // Import cors so api can be accessed from anywhere
const peopleRoute = require('./routes/people')      // Import route

const app = express();                  // Create new express app
app.use(cors());                        // Allow any user to access API
app.use(express.json());                // Allow API to use json
app.use('/people', peopleRoute);        // Allow API to use people route

mongoose.connect(process.env.DATABASE_URL); // Connect to database
const db = mongoose.connection                                  // Get connection instance
db.on('error', (error) => console.error(error));                // Log any errors
db.once('open', () => console.log('Connected to Database'))     // Log initial connection

app.listen(3000, () => console.log("Server Started"));          // Start server on port 3000