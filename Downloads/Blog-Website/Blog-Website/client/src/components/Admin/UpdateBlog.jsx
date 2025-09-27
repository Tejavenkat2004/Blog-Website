// import { useState, useEffect } from "react";
// import axios from "axios";
// import { TextField, Button, Card, CardContent, CardActions } from "@mui/material";

// const UpdateBlog = () => {
//   const [places, setPlaces] = useState([]);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [updatedPlace, setUpdatedPlace] = useState({
//     name: "",
//     location: "",
//     description: "",
//     image: "",
//   });

//   // Fetch the list of places
//   useEffect(() => {
//     const fetchPlaces = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/places/');
//         setPlaces(response.data);
//       } catch (error) {
//         console.error("Error fetching places:", error);
//       }
//     };
//     fetchPlaces();
//   }, []);

//   // Handle place selection for editing
//   const handleEdit = (place) => {
//     setSelectedPlace(place);
//     setUpdatedPlace({
//       name: place.name,
//       location: place.location,
//       description: place.description,
//       image: place.image,
//     });
//   };

//   // Handle the form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedPlace((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async (id) => {
//     if (!updatedPlace.name || !updatedPlace.location || !updatedPlace.description || !updatedPlace.image) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       const response = await axios.put(`http://localhost:5000/places/update/${id}`, updatedPlace);
//       console.log("Updated place:", response.data);
//       setPlaces((prevPlaces) =>
//         prevPlaces.map((place) =>
//           place._id === id ? { ...place, ...updatedPlace } : place
//         )
//       );
//       setSelectedPlace(null);
//     } catch (error) {
//       console.error("Error updating place:", error.response ? error.response.data : error.message);
//       alert("Error updating place. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <h2>Places List</h2>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {places.map((place) => (
//           <Card key={place._id} sx={{ width: "350px", margin: "10px" }}>
//             <CardContent>
//               <img
//                 src={place.image}
//                 alt={place.name}
//                 style={{ width: "100%", height: "150px", objectFit: "cover" }}
//               />
//               <h3>{place.name}</h3>
//               <p>{place.location}</p>
//               <p>{place.description}</p>
//             </CardContent>
//             <CardActions>
//               <Button size="small" color="primary" onClick={() => handleEdit(place)}>
//                 Update
//               </Button>
//             </CardActions>
//           </Card>
//         ))}
//       </div>

//       {selectedPlace && (
//         <div
//           style={{
//             padding: "20px",
//             marginTop: "20px",
//             background: "rgba(0, 0, 0, 0.1)",
//             borderRadius: "10px",
//             boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
//           }}
//         >
//           <h3>Edit Place: {selectedPlace.name}</h3>
//           <TextField
//             label="Name"
//             name="name"
//             value={updatedPlace.name}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Location"
//             name="location"
//             value={updatedPlace.location}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Description"
//             name="description"
//             value={updatedPlace.description}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Image URL"
//             name="image"
//             value={updatedPlace.image}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => handleUpdate(selectedPlace._id)}
//             disabled={!updatedPlace.name || !updatedPlace.location || !updatedPlace.description || !updatedPlace.image}
//             style={{ marginTop: "10px" }}
//           >
//             Update Place
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UpdateBlog;
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent, CardActions, Typography } from "@mui/material";

const UpdateBlog = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [updatedPlace, setUpdatedPlace] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
  });

  // Fetch the list of places
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:5000/places/');
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };
    fetchPlaces();
  }, []);

  // Handle place selection for editing
  const handleEdit = (place) => {
    setSelectedPlace(place);
    setUpdatedPlace({
      name: place.name,
      location: place.location,
      description: place.description,
      image: place.image,
    });
  };

  // Handle the form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPlace((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (id) => {
    if (!updatedPlace.name || !updatedPlace.location || !updatedPlace.description || !updatedPlace.image) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/places/update/${id}`, updatedPlace);
      console.log("Updated place:", response.data);
      setPlaces((prevPlaces) =>
        prevPlaces.map((place) =>
          place._id === id ? { ...place, ...updatedPlace } : place
        )
      );
      setSelectedPlace(null);
    } catch (error) {
      console.error("Error updating place:", error.response ? error.response.data : error.message);
      alert("Error updating place. Please try again later.");
    }
  };

  return (
    <div>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Places List
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {places.map((place) => (
          <Card key={place._id} sx={{ width: "350px", margin: "10px" }}>
            <CardContent>
              <img
                src={place.image}
                alt={place.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <Typography variant="h6" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
                {place.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {place.location}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", marginTop: "5px" }}>
                {place.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleEdit(place)}>
                Update
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {selectedPlace && (
        <div
          style={{
            padding: "20px",
            marginTop: "20px",
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
            Edit Place: {selectedPlace.name}
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={updatedPlace.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            label="Location"
            name="location"
            value={updatedPlace.location}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            label="Description"
            name="description"
            value={updatedPlace.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            label="Image URL"
            name="image"
            value={updatedPlace.image}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleUpdate(selectedPlace._id)}
            disabled={!updatedPlace.name || !updatedPlace.location || !updatedPlace.description || !updatedPlace.image}
            sx={{ marginTop: "10px" }}
          >
            Update Place
          </Button>
        </div>
      )}
    </div>
  );
};

export default UpdateBlog;
