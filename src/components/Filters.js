import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Filters = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [rating, setRating] = useState(4);
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
    onFilter({ priceRange: values, rating, location, guests });
  };

  const handleRatingChange = (value) => {
    setRating(value);
    onFilter({ priceRange, rating: value, location, guests });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilter({ priceRange, rating, location: e.target.value, guests });
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value));
    onFilter({ priceRange, rating, location, guests: parseInt(e.target.value) });
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-indigo-100 to-orange-200 p-6 rounded-lg shadow-lg"
    >
      <h2 className=" text-2xl font-bold mb-4">Filters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className=" font-medium mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            Location
          </p>
          <input
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 rounded-md focus:outline-none bg-gray-100 "
          />
        </div>
        <div>
          <p className=" font-medium mb-2">
            <FaStar className="inline-block mr-2" />
            Rating
          </p>
          <div className="flex items-center">
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={rating}
              onChange={(e) => handleRatingChange(parseInt(e.target.value))}
              className="w-full accent-orange-200"
            />
            <span className=" ml-4">{rating} stars</span>
          </div>
        </div>
        <div>
          <p className=" font-medium mb-2">
            <i className="fas fa-dollar-sign inline-block mr-2"></i>
            Price Range
          </p>
          <div className="flex items-center">
            <input
              type="range"
              min="50"
              max="300"
              step="10"
              value={priceRange[0]}
              onChange={(e) =>
                handlePriceRangeChange([
                  parseInt(e.target.value),
                  priceRange[1]
                ])
              }
              className="w-full accent-orange-200"
            />
            <span className=" ml-4">${priceRange[0]}</span>
          </div>
          <div className="flex items-center">
            <input
              type="range"
              min="50"
              max="300"
              step="10"
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceRangeChange([
                  priceRange[0],
                  parseInt(e.target.value)
                ])
              }
              className="w-full accent-orange-200"
            />
            <span className=" ml-4">${priceRange[1]}</span>
          </div>
        </div>
        <div>
          <p className=" font-medium mb-2">
            <i className="fas fa-user inline-block mr-2"></i>
            Guests
          </p>
          <input
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={handleGuestsChange}
            className="w-full px-4 py-2 rounded-md focus:outline-none bg-gray-100"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Filters;