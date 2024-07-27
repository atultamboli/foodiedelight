import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteRestaurant = async () => {
      try {
        await axios.delete(`/api/restaurants/${id}`);
        navigate('/');
      } catch (error) {
        console.error('Error deleting restaurant:', error);
      }
    };
    deleteRestaurant();
  }, [id, navigate]);

  return (
    <div>
      <h2>Deleting Restaurant...</h2>
    </div>
  );
}

export default DeleteRestaurant;
