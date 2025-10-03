import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, TreePine, Binoculars, Camera } from 'lucide-react';

const Wildlife: React.FC = () => {
  const wildlifeDestinations = [
    {
      id: 1,
      name: 'Jim Corbett National Park',
      location: 'Uttarakhand',
      description: 'India\'s oldest national park, famous for its Bengal tigers and diverse wildlife. Established in 1936, it offers excellent tiger sightings and beautiful landscapes in the foothills of the Himalayas.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'November - June',
      duration: '2-3 days',
      highlights: ['Bengal Tigers', 'Elephant Safari', 'Bird Watching', 'River Rafting'],
      category: 'Tiger Reserve'
    },
    {
      id: 2,
      name: 'Ranthambore National Park',
      location: 'Rajasthan',
      description: 'One of the largest national parks in northern India, famous for its tiger population and historic Ranthambore Fort. Offers excellent wildlife photography opportunities.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      bestTime: 'October - April',
      duration: '2-3 days',
      highlights: ['Royal Bengal Tigers', 'Ranthambore Fort', 'Leopards', 'Wildlife Photography'],
      category: 'Tiger Reserve'
    },
    {
      id: 3,
      name: 'Kaziranga National Park',
      location: 'Assam',
      description: 'UNESCO World Heritage Site famous for its one-horned rhinoceros population. Home to the highest density of tigers among protected areas in the world.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      bestTime: 'November - April',
      duration: '2-3 days',
      highlights: ['One-horned Rhinoceros', 'Bengal Tigers', 'Elephant Safari', 'Bird Watching'],
      category: 'UNESCO Site'
    },
    {
      id: 4,
      name: 'Sundarbans National Park',
      location: 'West Bengal',
      description: 'The largest mangrove forest in the world and home to the Royal Bengal Tiger. A unique ecosystem where tigers have adapted to the aquatic environment.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'September - March',
      duration: '2-3 days',
      highlights: ['Royal Bengal Tigers', 'Mangrove Forest', 'Boat Safari', 'Crocodiles'],
      category: 'Mangrove Reserve'
    },
    {
      id: 5,
      name: 'Bandhavgarh National Park',
      location: 'Madhya Pradesh',
      description: 'Known for having the highest density of tigers in India. The park also features the ancient Bandhavgarh Fort and diverse flora and fauna.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'October - June',
      duration: '2-3 days',
      highlights: ['Highest Tiger Density', 'Bandhavgarh Fort', 'Leopards', 'Ancient Caves'],
      category: 'Tiger Reserve'
    },
    {
      id: 6,
      name: 'Periyar National Park',
      location: 'Kerala',
      description: 'Famous for its elephant and tiger reserve, set around the scenic Periyar Lake. Offers unique boat safaris and spice plantation visits.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      bestTime: 'September - March',
      duration: '2-3 days',
      highlights: ['Asian Elephants', 'Periyar Lake', 'Boat Safari', 'Spice Plantations'],
      category: 'Elephant Reserve'
    },
    {
      id: 7,
      name: 'Gir National Park',
      location: 'Gujarat',
      description: 'The only place in the world where you can see Asiatic lions in their natural habitat. Home to over 500 lions and diverse wildlife.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      bestTime: 'December - March',
      duration: '2-3 days',
      highlights: ['Asiatic Lions', 'Leopards', 'Crocodiles', 'Bird Watching'],
      category: 'Lion Sanctuary'
    },
    {
      id: 8,
      name: 'Kanha National Park',
      location: 'Madhya Pradesh',
      description: 'One of India\'s largest national parks, inspiration for Rudyard Kipling\'s "The Jungle Book". Famous for its tigers, leopards, and barasingha deer.',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'October - June',
      duration: '2-3 days',
      highlights: ['Bengal Tigers', 'Barasingha Deer', 'Jungle Book Setting', 'Leopards'],
      category: 'Tiger Reserve'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Wildlife <span className="text-green-300">Sanctuaries</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Discover India's incredible wildlife in pristine national parks and sanctuaries. 
              Experience the thrill of spotting tigers, elephants, and exotic species in their natural habitat
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <TreePine className="h-6 w-6" />
                <span>104 National Parks</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Binoculars className="h-6 w-6" />
                <span>Wildlife Safari</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Camera className="h-6 w-6" />
                <span>Photography</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wildlife Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              India's Premier <span className="text-emerald-600">Wildlife Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the majestic Bengal tiger to the one-horned rhinoceros, explore India's rich biodiversity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wildlifeDestinations.map((destination, index) => (
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
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                      <TreePine className="h-4 w-4" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium"
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

                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2">
                    <Binoculars className="h-4 w-4" />
                    <span>Explore Wildlife</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Activities */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Wildlife Safari Experiences</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Immerse yourself in nature with these exciting wildlife activities and experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { activity: 'Tiger Safari', icon: '🐅', description: 'Jeep Safari, Tiger Tracking' },
              { activity: 'Elephant Safari', icon: '🐘', description: 'Elephant Rides, Close Encounters' },
              { activity: 'Bird Watching', icon: '🦅', description: 'Rare Species, Photography' },
              { activity: 'Nature Walks', icon: '🥾', description: 'Guided Tours, Flora Study' }
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

export default Wildlife;