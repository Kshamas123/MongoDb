require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB using MONGO_URI from environment variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(cors());            // Enable CORS for all origins (adjust if needed)
app.use(express.json());    // Parse incoming JSON requests

// Import Routes
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/message');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

// Handle 404 for unknown routes (optional)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
