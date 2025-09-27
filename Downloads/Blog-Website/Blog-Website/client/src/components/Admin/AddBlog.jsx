import  { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import axios from 'axios';

const AddBlog = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.value); // Set the image URL
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const placeData = {
      name,
      location,
      description,
      image, // Only a single image URL
    };

    try {
      const response = await axios.post('http://localhost:5000/places/send', placeData);
      console.log('Place added:', response.data);
      alert('Place added successfully!');
      window.location.reload();

    } catch (error) {
      console.error('There was an error adding the place:', error);
      alert('Failed to add place!');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <h2>Add a New Place</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Place Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Image URL"
          value={image}
          onChange={handleImageChange}
          sx={{ marginBottom: 2 }}
          required
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddBlog;
