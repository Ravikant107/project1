import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/place/${place.id}`);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 shadow-md rounded-lg overflow-hidden"
      onClick={handleClick}

    >
      <img
        src={place.imageUrl}
        alt={place.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{place.title}</h3>
        <p className="text-gray-400 text-sm">{place.location}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-white font-bold">${place.price}/night</p>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-white">{place.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaceCard;