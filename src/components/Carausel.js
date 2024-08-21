import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Carousel = ({ places }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [places.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-96 overflow-hidden rounded-2xl shadow-lg"
    >
      {places.map((place, index) => (
        <motion.div
          key={place.id}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-in-out`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={place.imageUrl}
            alt={place.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/75 to-transparent p-6">
            <h3 className="text-white text-2xl font-bold">{place.title}</h3>
            <p className="text-white text-lg">{place.location}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Carousel;