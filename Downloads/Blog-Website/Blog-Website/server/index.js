const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const placeRoutes = require('./routes/placeRoutes'); 
const signupRoutes = require('./routes/userRoutes');
const contactRoutes=require('./routes/contactRoutes')
// require('dotenv').config(); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/Blog-database', {
    
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use('/places', placeRoutes); 
app.use('/users', signupRoutes); 
app.use('/contact',contactRoutes)
app.get('/', (req, res) => {
    res.send('Welcome to the Places API!');
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});