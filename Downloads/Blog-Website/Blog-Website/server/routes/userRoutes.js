const express = require('express');
const User = require('../db/userSchema.js'); 
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        const user = new User({ username, email, password });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error in signup:', error); // Log the error details
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // You would normally compare passwords here (e.g., with bcrypt)
        if (user.password !== password) { // This is not secure; use bcrypt in production!
            return res.status(400).json({ message: 'Invalid password' });
        }

        // If successful, you might want to return a token or user info
        res.status(200).json({ message: 'Sign in successful', user: { username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;