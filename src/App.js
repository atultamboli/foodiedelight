import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import AddRestaurant from './components/AddRestaurant';
import EditRestaurant from './components/EditRestaurant';
import DeleteRestaurant from './components/DeleteRestaurant';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantList />} />
        <Route path="/add" element={<AddRestaurant />} />
        <Route path="/edit/:id" element={<EditRestaurant />} />
        <Route path="/delete/:id" element={<DeleteRestaurant />} />
        <Route path="/details/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
