import { motion } from 'framer-motion';
import { useState } from 'react';

const Listing = ({ listing }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-96 overflow-hidden rounded-lg">
        <img
          src={listing.images[activeImage]}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-white text-2xl font-bold">{listing.title}</h2>
          <p className="text-white text-sm">{listing.location}</p>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white shadow-md rounded-full p-2 text-gray-700"
            onClick={() => setActiveImage((prevIndex) => (prevIndex - 1 + listing.images.length) % listing.images.length)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white shadow-md rounded-full p-2 text-gray-700"
            onClick={() => setActiveImage((prevIndex) => (prevIndex + 1) % listing.images.length)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">{listing.title}</h3>
        <p className="text-gray-500 text-sm">{listing.location}</p>
        <div className="flex items-center mt-2">
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-gray-700">{listing.rating}</span>
        </div>
        <p className="mt-4 text-gray-700">{listing.description}</p>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Amenities</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {listing.amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg p-4 flex items-center"
              >
                <svg
                  className="w-6 h-6 text-gray-700 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl font-bold">Reviews</h4>
          <div className="space-y-4 mt-4">
            {listing.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4"
              >
                <div className="flex items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <h5 className="font-bold">{review.name}</h5>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-gray-700">{review.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white px-6 py-3 rounded-full"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;