const express = require('express');
const Contact = require('../db/contactSchema'); // Import your Contact model
const router = express.Router();

// Route to handle contact form submissions
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({
        name,
        email,
        message,
    });

    try {
        await newContact.save();
        res.status(201).json({ message: 'Contact submitted successfully!' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;