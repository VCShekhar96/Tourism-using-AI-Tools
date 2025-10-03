import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Mountain, Thermometer, Camera } from 'lucide-react';

const HillStations: React.FC = () => {
  const hillStationDestinations = [
    {
      id: 1,
      name: 'Shimla',
      location: 'Himachal Pradesh',
      description: 'The Queen of Hills, famous for its colonial architecture, toy train, and pleasant weather. Shimla offers stunning views of the Himalayas and is perfect for a romantic getaway.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      bestTime: 'March - June, September - November',
      duration: '3-4 days',
      highlights: ['Toy Train', 'Mall Road', 'Colonial Architecture', 'Mountain Views'],
      category: 'Colonial Hill Station'
    },
    {
      id: 2,
      name: 'Manali',
      location: 'Himachal Pradesh',
      description: 'Adventure capital of India nestled in the Himalayas. Famous for snow-capped peaks, adventure sports, and beautiful valleys with apple orchards.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'March - June, October - February',
      duration: '4-5 days',
      highlights: ['Adventure Sports', 'Rohtang Pass', 'Solang Valley', 'Apple Orchards'],
      category: 'Adventure Hill Station'
    },
    {
      id: 3,
      name: 'Darjeeling',
      location: 'West Bengal',
      description: 'Famous for its tea gardens, toy train, and stunning views of Kanchenjunga. Known as the Queen of the Hills with British colonial charm.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'March - May, September - November',
      duration: '3-4 days',
      highlights: ['Tea Gardens', 'Tiger Hill', 'Toy Train', 'Kanchenjunga Views'],
      category: 'Tea Hill Station'
    },
    {
      id: 4,
      name: 'Ooty',
      location: 'Tamil Nadu',
      description: 'The Queen of Hill Stations in South India, famous for its botanical gardens, toy train, and pleasant climate throughout the year.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      bestTime: 'October - June',
      duration: '2-3 days',
      highlights: ['Botanical Garden', 'Nilgiri Mountain Railway', 'Rose Garden', 'Doddabetta Peak'],
      category: 'Southern Hill Station'
    },
    {
      id: 5,
      name: 'Munnar',
      location: 'Kerala',
      description: 'Picturesque hill station known for its tea plantations, misty mountains, and exotic wildlife. A paradise for nature lovers and photographers.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      bestTime: 'September - March',
      duration: '3-4 days',
      highlights: ['Tea Plantations', 'Eravikulam National Park', 'Mattupetty Dam', 'Anamudi Peak'],
      category: 'Tea Hill Station'
    },
    {
      id: 6,
      name: 'Mussoorie',
      location: 'Uttarakhand',
      description: 'The Queen of the Hills offering panoramic views of the Himalayas. Famous for its pleasant weather, waterfalls, and colonial architecture.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.2,
      bestTime: 'March - June, September - November',
      duration: '2-3 days',
      highlights: ['Gun Hill', 'Kempty Falls', 'Mall Road', 'Camel\'s Back Road'],
      category: 'Colonial Hill Station'
    },
    {
      id: 7,
      name: 'Nainital',
      location: 'Uttarakhand',
      description: 'Beautiful lake town surrounded by mountains, perfect for boating and enjoying serene natural beauty. Known for its pleasant climate and scenic views.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'March - June, September - November',
      duration: '2-3 days',
      highlights: ['Naini Lake', 'Snow View Point', 'Naina Devi Temple', 'Tiffin Top'],
      category: 'Lake Hill Station'
    },
    {
      id: 8,
      name: 'Kodaikanal',
      location: 'Tamil Nadu',
      description: 'Princess of Hill Stations known for its star-shaped lake, pleasant weather, and beautiful landscapes. Perfect for a peaceful retreat.',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      bestTime: 'October - June',
      duration: '2-3 days',
      highlights: ['Kodai Lake', 'Coaker\'s Walk', 'Bryant Park', 'Pillar Rocks'],
      category: 'Southern Hill Station'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Hill <span className="text-green-300">Stations</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Escape to India's serene hill stations with cool climate, breathtaking views, 
              and peaceful retreats in the lap of nature
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Mountain className="h-6 w-6" />
                <span>Mountain Retreats</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Thermometer className="h-6 w-6" />
                <span>Cool Climate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Camera className="h-6 w-6" />
                <span>Scenic Beauty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hill Station Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              India's Most <span className="text-green-600">Beautiful Hill Stations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the Himalayas to the Western Ghats, discover India's most enchanting mountain retreats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hillStationDestinations.map((destination, index) => (
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
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                      <Thermometer className="h-4 w-4" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
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

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2">
                    <Mountain className="h-4 w-4" />
                    <span>Explore Hill Station</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hill Station Activities */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Hill Station Activities & Experiences</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover the exciting activities and peaceful experiences waiting in India's hill stations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { activity: 'Trekking & Hiking', icon: '🥾', description: 'Mountain Trails, Nature Walks' },
              { activity: 'Photography', icon: '📸', description: 'Scenic Views, Landscapes' },
              { activity: 'Adventure Sports', icon: '🪂', description: 'Paragliding, River Rafting' },
              { activity: 'Tea Garden Tours', icon: '🍃', description: 'Tea Tasting, Plantation Visits' }
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
                <p className="text-green-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HillStations;