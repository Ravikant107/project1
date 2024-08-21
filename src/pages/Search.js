import { motion } from 'framer-motion';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import PlaceCard from '../components/PlaceCard';

const Search = () => {
  const places = [
    {
      id: 1,
      imageUrl: '/place1.jpg',
      title: 'Cozy Apartment in the City',
      location: 'New York, NY',
      price: 150,
      rating: 4.8
    },
    {
      id: 2,
      imageUrl: '/place2.jpg',
      title: 'Stunning Beach House',
      location: 'Malibu, CA',
      price: 300,
      rating: 4.9
    },
    {
      id: 3,
      imageUrl: '/place3.jpg',
      title: 'Charming Countryside Villa',
      location: 'Tuscany, Italy',
      price: 200,
      rating: 4.7
    },
    {
      id: 4,
      imageUrl: '/place4.jpg',
      title: 'Modern Loft in the Heart of the City',
      location: 'Chicago, IL',
      price: 180,
      rating: 4.6
    },
    {
      id: 5,
      imageUrl: '/place5.jpg',
      title: 'Oceanfront Cabin',
      location: 'Hawaii',
      price: 400,
      rating: 4.8
    },
    {
      id: 6,
      imageUrl: '/place6.jpg',
      title: 'Rustic Mountain Retreat',
      location: 'Colorado',
      price: 250,
      rating: 4.7
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <SearchBar />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <Filters />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8"
      >
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Search;