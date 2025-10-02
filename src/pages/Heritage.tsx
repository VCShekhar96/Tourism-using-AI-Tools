import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Camera, Users } from 'lucide-react';

const Heritage: React.FC = () => {
  const heritageDestinations = [
    {
      id: 1,
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      description: 'An ivory-white marble mausoleum built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. This UNESCO World Heritage Site is considered one of the New Seven Wonders of the World.',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      bestTime: 'October - March',
      duration: '2-3 hours',
      highlights: ['Mughal Architecture', 'UNESCO World Heritage', 'Symbol of Love', 'Marble Inlay Work'],
      category: 'Monument'
    },
    {
      id: 2,
      name: 'Red Fort',
      location: 'Delhi',
      description: 'A historic fortified palace of the Mughal emperors that served as the main residence of the Mughal dynasty for nearly 200 years. Famous for its massive red sandstone walls.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      bestTime: 'October - March',
      duration: '2-3 hours',
      highlights: ['Mughal Architecture', 'Independence Day Venue', 'Light & Sound Show', 'Historical Significance'],
      category: 'Fort'
    },
    {
      id: 3,
      name: 'Ajanta Caves',
      location: 'Maharashtra',
      description: 'Ancient Buddhist cave monuments dating from 2nd century BCE to 6th century CE. These rock-cut caves are famous for their paintings and sculptures depicting Buddhist religious art.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'November - March',
      duration: '4-5 hours',
      highlights: ['Buddhist Art', 'Ancient Paintings', 'Rock-cut Architecture', 'UNESCO Site'],
      category: 'Cave'
    },
    {
      id: 4,
      name: 'Hampi',
      location: 'Karnataka',
      description: 'The ruins of the Vijayanagara Empire, showcasing magnificent temples, royal complexes, and ancient marketplaces. A UNESCO World Heritage Site with over 1,600 monuments.',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      bestTime: 'October - February',
      duration: '2-3 days',
      highlights: ['Vijayanagara Empire', 'Temple Architecture', 'Boulder Landscape', 'Ancient Bazaars'],
      category: 'Archaeological Site'
    },
    {
      id: 5,
      name: 'Khajuraho Temples',
      location: 'Madhya Pradesh',
      description: 'A group of Hindu and Jain temples famous for their nagara-style architectural symbolism and erotic sculptures. Built between 950-1050 CE by the Chandela dynasty.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'October - March',
      duration: '1-2 days',
      highlights: ['Erotic Sculptures', 'Chandela Architecture', 'Hindu Temples', 'Stone Carvings'],
      category: 'Temple Complex'
    },
    {
      id: 6,
      name: 'Fatehpur Sikri',
      location: 'Uttar Pradesh',
      description: 'A city built by Mughal Emperor Akbar, serving as the capital of the Mughal Empire from 1571 to 1585. Known for its stunning Indo-Islamic architecture.',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      bestTime: 'October - March',
      duration: '3-4 hours',
      highlights: ['Akbar\'s Capital', 'Indo-Islamic Architecture', 'Buland Darwaza', 'Ghost City'],
      category: 'Historic City'
    },
    {
      id: 7,
      name: 'Konark Sun Temple',
      location: 'Odisha',
      description: 'A 13th-century CE Sun Temple built in the form of a gigantic chariot with elaborately carved stone wheels, pillars, and walls. A UNESCO World Heritage Site.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      bestTime: 'October - February',
      duration: '2-3 hours',
      highlights: ['Sun God Temple', 'Chariot Architecture', 'Stone Wheels', 'Kalinga Architecture'],
      category: 'Temple'
    },
    {
      id: 8,
      name: 'Ellora Caves',
      location: 'Maharashtra',
      description: 'A UNESCO World Heritage Site featuring 34 monasteries and temples carved into the rock face. Represents Buddhist, Hindu, and Jain religious art spanning 600-1000 CE.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      bestTime: 'November - March',
      duration: '4-6 hours',
      highlights: ['Multi-religious Site', 'Kailasa Temple', 'Rock-cut Architecture', 'Ancient Sculptures'],
      category: 'Cave Complex'
    },
    {
      id: 9,
      name: 'Mahabalipuram',
      location: 'Tamil Nadu',
      description: 'A historic town known for its rock-cut temples and sculptures dating from the 7th-8th centuries. Famous for the Shore Temple and Five Rathas.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.4,
      bestTime: 'November - February',
      duration: '1-2 days',
      highlights: ['Shore Temple', 'Five Rathas', 'Rock Sculptures', 'Pallava Architecture'],
      category: 'Temple Town'
    }
  ];

  const categories = [
    { name: 'All', count: heritageDestinations.length },
    { name: 'Monument', count: heritageDestinations.filter(d => d.category === 'Monument').length },
    { name: 'Temple', count: heritageDestinations.filter(d => d.category.includes('Temple')).length },
    { name: 'Fort', count: heritageDestinations.filter(d => d.category === 'Fort').length },
    { name: 'Cave', count: heritageDestinations.filter(d => d.category.includes('Cave')).length }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredDestinations = selectedCategory === 'All' 
    ? heritageDestinations 
    : heritageDestinations.filter(d => d.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-600 via-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Heritage <span className="text-yellow-300">Sites</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Explore India's magnificent heritage sites that showcase thousands of years of 
              architectural brilliance, cultural richness, and historical significance
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="text-2xl">🏛️</span>
                <span>37 UNESCO Sites</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="text-2xl">⏳</span>
                <span>5000+ Years</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="text-2xl">🎨</span>
                <span>Multiple Dynasties</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.name
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover India's <span className="text-amber-600">Heritage Treasures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each site tells a unique story of India's glorious past and architectural mastery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
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
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                      <Calendar className="h-4 w-4" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium"
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

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold flex items-center justify-center space-x-2">
                      <Camera className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200">
                      <MapPin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Facts */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Heritage by Numbers</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              India's incredible heritage statistics that showcase our rich cultural legacy
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '37', label: 'UNESCO World Heritage Sites', icon: '🏛️' },
              { number: '5000+', label: 'Years of Documented History', icon: '📜' },
              { number: '100+', label: 'Archaeological Survey Protected Sites', icon: '🏺' },
              { number: '15+', label: 'Architectural Styles', icon: '🎨' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-200 mb-2">{stat.number}</div>
                <div className="text-orange-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;