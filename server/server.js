require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware
const productRoute = require('./routes/productRoute');

const app = express();

// CORS middleware configuration
app.use(cors({
  origin: 'https://pricelist-1.onrender.com', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello world');
});

// MongoDB connection
mongoose.connect('mongodb+srv://hijas:hijas123@cluster0.fdvdmzh.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
