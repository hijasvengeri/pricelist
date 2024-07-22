const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://hijas:hijas123@cluster0.fdvdmzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
  slno: Number,
  items: String,
  brand: String,
  single: String,
  price1: String,
  price2: String,
  price3: String,
  price4: String,
  price5: String,
  gst: Number,
  mrp: String,
  imageURL: String,
});

const Product = mongoose.model('Product', productSchema);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname)); // Generate unique file name
  },
});

const upload = multer({ storage });

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

app.use(express.json());

// Route to handle image upload
app.post('/api/upload', upload.single('image'), (req, res) => {
  const filePath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.json({ filePath });
});

// Route to handle product creation
app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
