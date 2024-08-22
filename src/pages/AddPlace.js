// src/pages/AddPlace.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePlaces } from '../contexts/PlacesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddPlace = () => {
  const [newPlace, setNewPlace] = useState({
    title: '',
    location: '',
    price: '',
    rating: '',
    imageUrls: [''],
  });
  const { addPlace } = usePlaces();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlace({ ...newPlace, [name]: value });
  };

  const handleImageUrlChange = (index, value) => {
    const updatedImageUrls = [...newPlace.imageUrls];
    updatedImageUrls[index] = value;
    setNewPlace({ ...newPlace, imageUrls: updatedImageUrls });
  };

  const addImageUrlField = () => {
    setNewPlace({ ...newPlace, imageUrls: [...newPlace.imageUrls, ''] });
  };

  const removeImageUrlField = (index) => {
    const updatedImageUrls = newPlace.imageUrls.filter((_, i) => i !== index);
    setNewPlace({ ...newPlace, imageUrls: updatedImageUrls });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlace({
      ...newPlace,
      price: parseFloat(newPlace.price),
      rating: parseFloat(newPlace.rating),
      imageUrls: newPlace.imageUrls.filter(url => url.trim() !== ''),
    });
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-gray-100"
    >
      <Header />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-8"
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Add New Place</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newPlace.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block mb-2 font-semibold text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={newPlace.location}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="price" className="block mb-2 font-semibold text-gray-700">
                Price per night
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={newPlace.price}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="rating" className="block mb-2 font-semibold text-gray-700">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={newPlace.rating}
                onChange={handleInputChange}
                required
                min="0"
                max="5"
                step="0.1"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Image URLs</label>
            {newPlace.imageUrls.map((url, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => handleImageUrlChange(index, e.target.value)}
                  required
                  className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeImageUrlField(index)}
                    className="ml-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addImageUrlField}
              className="mt-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Add Another Image URL
            </button>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Image Previews</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {newPlace.imageUrls.map((url, index) => (
                url && (
                  <div key={index} className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="object-cover rounded-lg"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Invalid+URL'}
                    />
                  </div>
                )
              ))}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Place
          </motion.button>
        </form>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default AddPlace;