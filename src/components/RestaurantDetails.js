import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRestaurants } from '../services/api';
import { Container, Typography, Button } from '@mui/material';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await getRestaurants();
        const restaurantData = response.data.find((r) => r.id === parseInt(id));
        setRestaurant(restaurantData);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (!restaurant) return <Typography variant="h6">Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{restaurant.name}</Typography>
      <Typography variant="body1">{restaurant.description}</Typography>
      <Typography variant="body2">{restaurant.location}</Typography>
      <Button variant="contained" color="primary" component={Link} to={`/edit/${restaurant.id}`}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" component={Link} to={`/delete/${restaurant.id}`}>
        Delete
      </Button>
    </Container>
  );
};

export default RestaurantDetails;
