const express = require('express');
const mongoose = require('mongoose');
const Contribution = require('./models/contribution');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');


// Load environment variables
dotenv.config();

const token = jwt.sign({ userId: 'user123' }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

console.log('Generated Token:', token);

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.use('/api/contributions', require('./routes/contributions'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
