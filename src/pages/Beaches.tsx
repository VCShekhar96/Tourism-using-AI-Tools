import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Waves, Sun, Umbrella } from 'lucide-react';

const Beaches: React.FC = () => {
  const beachDestinations = [
    {
      id: 1,
      name: 'Goa Beaches',
      location: 'Goa',
      description: 'Famous for its pristine beaches, vibrant nightlife, and Portuguese colonial architecture. Goa offers a perfect blend of relaxation and adventure with water sports, beach shacks, and stunning sunsets.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'November - February',
      duration: '3-5 days',
      highlights: ['Water Sports', 'Beach Shacks', 'Nightlife', 'Portuguese Heritage'],
      category: 'Beach Paradise'
    },
    {
      id: 2,
      name: 'Marina Beach',
      location: 'Chennai, Tamil Nadu',
      description: 'One of the longest urban beaches in the world, Marina Beach is a popular destination for locals and tourists alike. Famous for its lighthouse, aquarium, and bustling atmosphere.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.2,
      bestTime: 'November - March',
      duration: '1-2 days',
      highlights: ['Longest Urban Beach', 'Lighthouse', 'Street Food', 'Cultural Events'],
      category: 'Urban Beach'
    },
    {
      id: 3,
      name: 'Kovalam Beach',
      location: 'Kerala',
      description: 'A crescent-shaped beach known for its lighthouse and Ayurvedic treatments. Kovalam offers a serene atmosphere with coconut palms and clear blue waters.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'October - March',
      duration: '2-3 days',
      highlights: ['Lighthouse Beach', 'Ayurvedic Spa', 'Coconut Groves', 'Surfing'],
      category: 'Tropical Beach'
    },
    {
      id: 4,
      name: 'Radhanagar Beach',
      location: 'Andaman Islands',
      description: 'Voted as one of the best beaches in Asia, Radhanagar Beach offers pristine white sand, crystal clear waters, and spectacular sunsets in a tropical paradise setting.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      bestTime: 'October - May',
      duration: '3-4 days',
      highlights: ['White Sand', 'Crystal Waters', 'Sunset Views', 'Snorkeling'],
      category: 'Island Paradise'
    },
    {
      id: 5,
      name: 'Puri Beach',
      location: 'Odisha',
      description: 'A sacred beach town famous for the Jagannath Temple and its golden sand beach. Puri combines spiritual significance with coastal beauty.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      bestTime: 'October - February',
      duration: '2-3 days',
      highlights: ['Jagannath Temple', 'Golden Sand', 'Spiritual Significance', 'Beach Festival'],
      category: 'Sacred Beach'
    },
    {
      id: 6,
      name: 'Varkala Beach',
      location: 'Kerala',
      description: 'Known for its dramatic cliffs, natural springs, and pristine beach. Varkala is considered sacred by Hindus and offers a unique cliff-top beach experience.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      bestTime: 'November - March',
      duration: '2-3 days',
      highlights: ['Cliff Beach', 'Natural Springs', 'Sacred Waters', 'Yoga Retreats'],
      category: 'Cliff Beach'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Beautiful <span className="text-cyan-300">Beaches</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Discover India's stunning coastline with pristine beaches, crystal clear waters, 
              and breathtaking sunsets along 7,500 kilometers of coastline
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Waves className="h-6 w-6" />
                <span>7,500km Coastline</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Sun className="h-6 w-6" />
                <span>Year-round Sunshine</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Umbrella className="h-6 w-6" />
                <span>Water Sports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beach Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              India's Most <span className="text-blue-600">Beautiful Beaches</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the party beaches of Goa to the pristine shores of Andaman, explore India's diverse coastal beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beachDestinations.map((beach, index) => (
              <motion.div
                key={beach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={beach.image}
                    alt={beach.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {beach.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{beach.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{beach.name}</h3>
                    <div className="flex items-center text-gray-200">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{beach.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {beach.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{beach.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sun className="h-4 w-4" />
                      <span>{beach.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {beach.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {beach.highlights.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{beach.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2">
                    <Waves className="h-4 w-4" />
                    <span>Explore Beach</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Activities */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Beach Activities & Experiences</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the exciting activities and experiences waiting for you at India's beaches
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { activity: 'Water Sports', icon: '🏄‍♂️', description: 'Surfing, Jet Skiing, Parasailing' },
              { activity: 'Beach Relaxation', icon: '🏖️', description: 'Sunbathing, Beach Walks' },
              { activity: 'Seafood Cuisine', icon: '🦞', description: 'Fresh Catch, Local Delicacies' },
              { activity: 'Cultural Events', icon: '🎭', description: 'Beach Festivals, Music' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.activity}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beaches;