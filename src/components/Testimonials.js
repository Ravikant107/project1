import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "I had an amazing experience booking my vacation through this platform. The process was seamless and the customer service was top-notch.",
      author: "John Doe",
      position: "Frequent Traveler"
    },
    {
      id: 2,
      quote:
        "Finding the perfect accommodation for my family was a breeze with the helpful filters and recommendations. Highly recommend this service!",
      author: "Jane Smith",
      position: "Travel Enthusiast"
    },
    {
      id: 3,
      quote:
        "Booking my dream vacation was made so much easier with this platform. The secure payment options and user-friendly interface are a game-changer.",
      author: "Michael Johnson",
      position: "Business Traveler"
    },
    {
      id: 4,
      quote:
        "I was hesitant at first, but the 24/7 customer support team put all my concerns to rest. They went above and beyond to ensure my stay was perfect.",
      author: "Sarah Lee",
      position: "Leisure Traveler"
    }
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-12 rounded-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={`https://randomuser.me/api/portraits/men/${testimonial.id}.jpg`}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-gray-800 font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;