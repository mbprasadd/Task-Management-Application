const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('public')); // Ensure 'public' folder has the file


const dbURI = process.env.MONGO_URI;

if (!dbURI) {
  console.error('MongoDB URI is missing');
  process.exit(1);
}


// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

  
  
// Use task routes
app.use(taskRoutes);

// Error handling middleware
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




