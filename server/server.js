const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/secure-share', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/message');

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);  //

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
