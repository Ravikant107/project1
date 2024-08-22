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
import { usePlaces } from '../contexts/PlacesContext';


const Home = () => {
    const { places } = usePlaces();
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
      place.rating >= filters.rating &&
      (place.location.toLowerCase()).includes(filters.location.toLowerCase())
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