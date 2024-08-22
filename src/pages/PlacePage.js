// PlaceDetails.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaWifi, FaParking, FaSwimmingPool, FaUtensils, FaBed, FaBath, FaUsers, FaTv, FaSnowflake } from 'react-icons/fa';
import { FaElevator } from "react-icons/fa6";
import Footer from '../components/Footer';
import Header from '../components/Header';


const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [additionalPhotos, setAdditionalPhotos] = useState([]);

  useEffect(() => {
    // Simulate fetching place data
    const fetchPlace = () => {
      // This would typically be an API call in a real application
      const places = [
        {
          id: 1,
          imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Cozy Apartment in the City',
          location: 'New York, NY',
          price: 150,
          rating: 4.8,
          description: 'Experience the vibrant life of New York in this cozy apartment located in the heart of the city. This stylish and comfortable space offers everything you need for a perfect stay, whether you are here for business or pleasure.',
          amenities: ['Wi-Fi', 'Kitchen', 'Air Conditioning', 'TV', 'Elevator'],
          bedrooms: 2,
          bathrooms: 1,
          maxGuests: 4
        },
        {
          id: 2,
          imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Stunning Beach House',
          location: 'Malibu, CA',
          price: 300,
          rating: 4.9,
          description: 'Escape to this stunning beach house in beautiful Malibu. Enjoy breathtaking ocean views, direct beach access, and luxurious amenities for the ultimate coastal getaway.',
          amenities: ['Wi-Fi', 'Kitchen', 'Beach Access', 'Pool', 'Parking'],
          bedrooms: 3,
          bathrooms: 2,
          maxGuests: 6
        },
        {
          id: 3,
          imageUrl: 'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Charming Countryside Villa',
          location: 'Tuscany, Italy',
          price: 200,
          rating: 4.7,
          description: 'Immerse yourself in the beauty of Tuscany with a stay at this charming countryside villa. Surrounded by rolling hills and vineyards, this authentic Italian retreat offers a perfect blend of rustic charm and modern comfort.',
          amenities: ['Wi-Fi', 'Kitchen', 'Pool', 'Garden', 'Parking'],
          bedrooms: 4,
          bathrooms: 3,
          maxGuests: 8
        },
        {
          id: 4,
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Modern Loft in the Heart of the City',
          location: 'Chicago, IL',
          price: 180,
          rating: 4.6,
          description: 'Stay in style at this sleek, modern loft located in the heart of downtown Chicago. With its prime location and contemporary amenities, it is the perfect base for exploring all that the Windy City has to offer.',
          amenities: ['Wi-Fi', 'Kitchen', 'Gym', 'Workspace', 'Parking'],
          bedrooms: 1,
          bathrooms: 1,
          maxGuests: 2
        }
      ];
      
      const selectedPlace = places.find(p => p.id === parseInt(id));
      setPlace(selectedPlace);
    };

    fetchPlace();

    // Fetch additional photos (simulated)
    const fetchAdditionalPhotos = () => {
      const photos = [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858',
      ];
      setAdditionalPhotos(photos);
    };

    fetchAdditionalPhotos();
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const getAmenityIcon = (amenity) => {
    switch(amenity.toLowerCase()) {
      case 'wi-fi': return <FaWifi />;
      case 'kitchen': return <FaUtensils />;
      case 'parking': return <FaParking />;
      case 'pool': return <FaSwimmingPool />;
      case 'tv': return <FaTv />;
      case 'air conditioning': return <FaSnowflake />;
      case 'elevator': return <FaElevator />;
      default: return null;
    }
  };

  return (
    <div className='bg-gradient-to-r from-indigo-100 to-orange-200' >
    <Header/>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto my-12 px-4 py-8 bg-gray-900 text-white rounded-xl "
    >
      <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-2">{place.title}</motion.h1>
      <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-400">{place.location}</motion.p>
      
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <img src={place.imageUrl} alt={place.title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div className="grid grid-cols-2 gap-4">
          {additionalPhotos.map((photo, index) => (
            <motion.img
              key={index}
              src={photo}
              alt={`Additional ${index + 1}`}
              className="w-full h-44 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">About this place</h2>
        <p className="mb-4 text-gray-300">{place.description}</p>
        <div className="flex flex-wrap justify-between items-center mb-4">
          <p className="text-3xl font-bold">${place.price} <span className="text-lg font-normal text-gray-400">/ night</span></p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-xl">{place.rating}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-700 p-3 rounded-lg">
            <FaBed className="text-2xl mx-auto mb-2" />
            <p>{place.bedrooms} Bedrooms</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <FaBath className="text-2xl mx-auto mb-2" />
            <p>{place.bathrooms} Bathrooms</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <FaUsers className="text-2xl mx-auto mb-2" />
            <p>Up to {place.maxGuests} guests</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <FaWifi className="text-2xl mx-auto mb-2" />
            <p>Free Wi-Fi</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {place.amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-gray-700 p-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {getAmenityIcon(amenity)}
              <span className="ml-2">{amenity}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
    <Footer/>
    </div>
  );
};

export default PlaceDetails;