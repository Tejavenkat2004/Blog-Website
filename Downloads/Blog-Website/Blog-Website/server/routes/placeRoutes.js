const express = require('express');
const router = express.Router();
const Place = require('../db/placeSchema.js');  // Path to your Place model

// GET all places
router.get('/', async (req, res) => {
    try {
        const places = await Place.find();  // Fetch all places
        res.json(places);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific place by ID
router.get('/:id', async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);  // Find place by ID
        if (!place) return res.status(404).json({ message: 'Place not found' });
        res.json(place);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new place
router.post('/send', async (req, res) => {
    const { name, location, description, image } = req.body;

    // Create a new Place object with the data from the request body
    const newPlace = new Place({
        name,
        location,
        description,
        image,  // Single image URL (not an array)
    });

    try {
        const savedPlace = await newPlace.save();  // Save place to database
        res.status(201).json(savedPlace);  // Return saved place with 201 status
    } catch (err) {
        res.status(400).json({ message: err.message });  // Return error if save fails
    }
});

router.put('/update/:id', async (req, res) => {
    try {
      const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPlace) {
        return res.status(404).json({ message: "Place not found" });
      }
      res.json(updatedPlace);
    } catch (error) {
      console.error("Error updating place:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedPlace = await Place.findByIdAndDelete(req.params.id);
        if (!deletedPlace) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.json({ message: 'Place deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;  // Export the routes to use in the main app
