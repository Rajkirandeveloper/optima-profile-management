const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const cors=require('cors')
require('dotenv').config();

const app = express();

// Connect Database 
connectDB();

//cors midleware for security
app.use(cors())

//  Middleware For Parsing request Body
app.use(express.json());

// Routes 
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
