import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Mock data for initial setup
let mockRestaurants = [
  { id: 1, name: 'The Gourmet Kitchen', description: 'Fine dining with international cuisine.', location: 'New York' },
  { id: 2, name: 'Pasta Palace', description: 'Authentic Italian pasta and more.', location: 'Los Angeles' },
];

// Mock API functions
export const getRestaurants = async () => {
  // Mocking a network request with Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockRestaurants });
    }, 1000);
  });
};

export const addRestaurant = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockRestaurants.push({ ...data, id: mockRestaurants.length + 1 });
      resolve({ data });
    }, 1000);
  });
};

export const editRestaurant = async (id, data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockRestaurants = mockRestaurants.map((restaurant) =>
        restaurant.id === id ? { ...restaurant, ...data } : restaurant
      );
      resolve({ data });
    }, 1000);
  });
};

export const deleteRestaurant = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockRestaurants = mockRestaurants.filter((restaurant) => restaurant.id !== id);
      resolve({ message: 'Deleted successfully' });
    }, 1000);
  });
};
