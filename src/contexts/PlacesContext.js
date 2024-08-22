// src/contexts/PlacesContext.js
import React, { createContext, useState, useContext } from 'react';

const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {
    const [places, setPlaces] = useState([
        {
          id: 1,
          imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Cozy Apartment in the City',
          location: 'New York, NY',
          price: 150,
          rating: 4.8
        },
        {
          id: 2,
          imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Stunning Beach House',
          location: 'Malibu, CA',
          price: 300,
          rating: 4.9
        },
        {
          id: 3,
          imageUrl: 'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Charming Countryside Villa',
          location: 'Tuscany, Italy',
          price: 200,
          rating: 4.7
        },
        {
          id: 4,
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Modern Loft in the Heart of the City',
          location: 'Chicago, IL',
          price: 180,
          rating: 4.6
        }
      ]);

  const addPlace = (newPlace) => {
    setPlaces([...places, { ...newPlace, id: places.length + 1 }]);
  };

  return (
    <PlacesContext.Provider value={{ places, addPlace }}>
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = () => useContext(PlacesContext);