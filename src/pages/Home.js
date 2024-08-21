import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Carousel from '../components/Carausel';
import PlaceCard from '../components/PlaceCard';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
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

  const [filteredPlaces, setFilteredPlaces] = useState(places);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredPlaces(
      places.filter(
        (place) =>
          place.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, places]);

  const handlePlaceClick = (place) => {
    navigate(`/places/${place.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <Header />
      {/* <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      /> */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <Filters onFilter={(filters) => setFilteredPlaces(
  places.filter(
    (place) =>
      place.price >= filters.priceRange[0] &&
      place.price <= filters.priceRange[1] &&
      place.rating >= filters.rating
  )
)} />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <Carousel places={filteredPlaces} />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8"
      >
        {filteredPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onClick={() => handlePlaceClick(place)}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <FeatureSection />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <Testimonials />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Home;