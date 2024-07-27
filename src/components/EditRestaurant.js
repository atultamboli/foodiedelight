import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditRestaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({ name: '', description: '', location: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`/api/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };
    fetchRestaurant();
  }, [id]);

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/restaurants/${id}`, restaurant);
      navigate('/');
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={restaurant.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="description"
          value={restaurant.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="location"
          value={restaurant.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditRestaurant;
