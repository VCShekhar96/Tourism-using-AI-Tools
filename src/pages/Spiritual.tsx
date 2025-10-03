import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Heart, Sun, Users } from 'lucide-react';

const Spiritual: React.FC = () => {
  const spiritualDestinations = [
    {
      id: 1,
      name: 'Varanasi',
      location: 'Uttar Pradesh',
      description: 'One of the oldest continuously inhabited cities in the world, Varanasi is the spiritual capital of India. The sacred ghats along the Ganges River offer profound spiritual experiences.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      bestTime: 'October - March',
      duration: '2-3 days',
      highlights: ['Ganga Aarti', 'Sacred Ghats', 'Kashi Vishwanath Temple', 'Boat Rides'],
      category: 'Sacred City'
    },
    {
      id: 2,
      name: 'Golden Temple',
      location: 'Amritsar, Punjab',
      description: 'The holiest shrine of Sikhism, known for its stunning golden architecture and the sacred Amrit Sarovar. A place of peace, equality, and spiritual solace.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      bestTime: 'October - March',
      duration: '1-2 days',
      highlights: ['Golden Architecture', 'Langar Service', 'Sacred Pool', 'Guru Granth Sahib'],
      category: 'Sikh Temple'
    },
    {
      id: 3,
      name: 'Rishikesh',
      location: 'Uttarakhand',
      description: 'The Yoga Capital of the World, nestled in the foothills of the Himalayas. A spiritual haven for meditation, yoga, and connecting with nature.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'September - April',
      duration: '3-5 days',
      highlights: ['Yoga Ashrams', 'Ganga Aarti', 'Adventure Sports', 'Meditation Centers'],
      category: 'Yoga Capital'
    },
    {
      id: 4,
      name: 'Tirupati',
      location: 'Andhra Pradesh',
      description: 'Home to the famous Venkateswara Temple, one of the richest and most visited temples in the world. A major pilgrimage destination for devotees.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      bestTime: 'September - February',
      duration: '1-2 days',
      highlights: ['Venkateswara Temple', 'Seven Hills', 'Laddu Prasadam', 'Spiritual Atmosphere'],
      category: 'Hindu Temple'
    },
    {
      id: 5,
      name: 'Bodh Gaya',
      location: 'Bihar',
      description: 'The place where Buddha attained enlightenment under the Bodhi Tree. A UNESCO World Heritage Site and the most sacred place for Buddhists worldwide.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'October - March',
      duration: '1-2 days',
      highlights: ['Mahabodhi Temple', 'Bodhi Tree', 'Buddhist Monasteries', 'Meditation'],
      category: 'Buddhist Site'
    },
    {
      id: 6,
      name: 'Shirdi',
      location: 'Maharashtra',
      description: 'The holy town where Sai Baba lived and taught. A place of miracles and devotion that attracts millions of pilgrims seeking blessings and peace.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      bestTime: 'October - February',
      duration: '1-2 days',
      highlights: ['Sai Baba Temple', 'Dwarkamai', 'Chavadi', 'Spiritual Teachings'],
      category: 'Sai Baba Shrine'
    },
    {
      id: 7,
      name: 'Kedarnath',
      location: 'Uttarakhand',
      description: 'One of the twelve Jyotirlingas, located in the Himalayas. A challenging pilgrimage that rewards devotees with divine blessings and breathtaking mountain views.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'May - October',
      duration: '3-4 days',
      highlights: ['Jyotirlinga', 'Himalayan Trek', 'Ancient Temple', 'Spiritual Journey'],
      category: 'Himalayan Temple'
    },
    {
      id: 8,
      name: 'Ajmer Sharif',
      location: 'Rajasthan',
      description: 'The shrine of Sufi saint Moinuddin Chishti, revered by people of all faiths. A symbol of unity, peace, and spiritual harmony in the heart of Rajasthan.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'October - March',
      duration: '1-2 days',
      highlights: ['Sufi Shrine', 'Qawwali Music', 'Interfaith Harmony', 'Spiritual Healing'],
      category: 'Sufi Shrine'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Spiritual <span className="text-purple-300">Places</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Discover India's sacred destinations where spirituality meets serenity. 
              Experience divine peace and inner transformation at these holy places
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Heart className="h-6 w-6" />
                <span>Sacred Sites</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Sun className="h-6 w-6" />
                <span>Inner Peace</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Users className="h-6 w-6" />
                <span>All Faiths</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spiritual Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              India's Most <span className="text-purple-600">Sacred Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Journey through India's spiritual landscape where ancient wisdom meets divine presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                    <div className="flex items-center text-gray-200">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sun className="h-4 w-4" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span>Explore Sacred Place</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Experiences */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Spiritual Experiences & Practices</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Immerse yourself in ancient practices and find inner peace through these spiritual experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { activity: 'Meditation & Yoga', icon: '🧘‍♀️', description: 'Inner Peace, Mindfulness' },
              { activity: 'Temple Rituals', icon: '🕉️', description: 'Sacred Ceremonies, Prayers' },
              { activity: 'Pilgrimage Walks', icon: '🚶‍♂️', description: 'Spiritual Journeys, Devotion' },
              { activity: 'Spiritual Teachings', icon: '📿', description: 'Ancient Wisdom, Guidance' }
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
                <p className="text-purple-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spiritual;