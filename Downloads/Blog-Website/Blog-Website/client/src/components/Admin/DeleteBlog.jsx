import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DeleteBlog = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:5000/places/");
        console.log("API Response:", response.data); // Log the response
        if (Array.isArray(response.data)) {
          setPlaces(response.data);
        } else {
          setError("Unexpected data format");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlaces();
  }, []);

  const handleDelete = async (id) => {
    console.log("Attempting to delete place with ID:", id);  // Debugging ID

    try {
        const response = await axios.delete(`http://localhost:5000/places/delete/${id}`);
        console.log('Place deleted:', response.data);

        // Filter the places state to remove the deleted place
        setPlaces((prevPlaces) => prevPlaces.filter((place) => place._id !== id));
    } catch (err) {
        console.error('Error deleting place:', err.response ? err.response.data : err.message);
        setError('Failed to delete place');
    }
};

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {places.length === 0 ? (
        <p>No places available.</p>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {places.map((place) => (
            <Card key={place._id} sx={{ maxWidth: 345, marginBottom: "20px" }}>
              <CardActionArea>
                {/* Show place image if it exists */}
                {place.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={place.image}
                    alt={place.name}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {place.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Location:</strong> {place.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Description:</strong> {place.description}
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(place._id)}
                    sx={{ marginTop: "8px",marginLeft: "12px",marginBottom: "10px" }}
                  >
                    Delete
                  </Button>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
};

export default DeleteBlog;
