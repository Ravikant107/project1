import { motion } from 'framer-motion';
import Header from '../components/Header';
import PlaceCard from '../components/PlaceCard';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: '/profile-avatar.jpg',
    bookings: [
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
      }
    ],
    reviews: [
      {
        id: 1,
        placeId: 1,
        rating: 5,
        comment: 'This place was amazing! Highly recommend it.'
      },
      {
        id: 2,
        placeId: 2,
        rating: 4,
        comment: 'Great location and amenities, but could use some improvements.'
      }
    ],
    favorites: [
      {
        id: 4,
        imageUrl: '/place4.jpg',
        title: 'Modern Loft in the Heart of the City',
        location: 'Chicago, IL',
        price: 180,
        rating: 4.6
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex items-center mb-8">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Your Bookings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {user.bookings.map((booking) => (
              <PlaceCard key={booking.id} place={booking} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Your Reviews</h3>
          <div className="space-y-4">
            {user.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-100 rounded-lg p-4"
              >
                <div className="flex items-center">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <h5 className="font-bold">{user.name}</h5>
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
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Your Favorite Places</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {user.favorites.map((favorite) => (
              <PlaceCard key={favorite.id} place={favorite} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;