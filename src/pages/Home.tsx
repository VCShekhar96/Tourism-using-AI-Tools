import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mountain, Waves, TreePine, Heart, Camera, Users, Star, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const categories = [
    {
      title: 'Heritage Sites',
      description: 'Explore ancient monuments and UNESCO World Heritage Sites',
      icon: Mountain,
      path: '/heritage',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Beautiful Beaches',
      description: 'Pristine coastlines and tropical paradise destinations',
      icon: Waves,
      path: '/beaches',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Hill Stations',
      description: 'Scenic mountain retreats and cool climate destinations',
      icon: Mountain,
      path: '/hill-stations',
      image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Spiritual Places',
      description: 'Sacred temples and spiritual journey destinations',
      icon: Heart,
      path: '/spiritual',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Wildlife Sanctuaries',
      description: 'National parks and wildlife conservation areas',
      icon: TreePine,
      path: '/wildlife',
      image: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Photo Gallery',
      description: 'Stunning photography from across India',
      icon: Camera,
      path: '/gallery',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const stats = [
    { number: '37', label: 'UNESCO Sites', icon: Mountain },
    { number: '7,500km', label: 'Coastline', icon: Waves },
    { number: '104', label: 'National Parks', icon: TreePine },
    { number: '28', label: 'States', icon: MapPin }
  ];

  const featuredDestinations = [
    {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      category: 'Heritage'
    },
    {
      name: 'Kerala Backwaters',
      location: 'Alleppey, Kerala',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      category: 'Nature'
    },
    {
      name: 'Goa Beaches',
      location: 'Goa',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      category: 'Beach'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-600 via-orange-500 to-red-500"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-saffron-300">Incredible</span>{' '}
              <span className="text-white">India</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover the land of diverse cultures, ancient heritage, and breathtaking landscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-full transition-all duration-300 shadow-2xl hover:shadow-saffron-500/25 transform hover:-translate-y-1 text-lg"
              >
                Explore India
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-full transition-all duration-300 text-lg"
              >
                <Camera className="mr-2 h-6 w-6" />
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-green-200" />
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Explore by <span className="text-saffron-600">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ancient monuments to pristine beaches, discover India's incredible diversity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={category.path} className="block">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <category.icon className="h-8 w-8 mb-3 text-white" />
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-gray-100 mb-4">{category.description}</p>
                      <div className="flex items-center text-white font-semibold">
                        <span>Explore Now</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-saffron-600">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Must-visit places that showcase India's incredible beauty and rich heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{destination.location}</span>
                  </div>
                  <button className="w-full bg-saffron-500 hover:bg-saffron-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-saffron-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Explore India?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Start planning your incredible journey through India's most amazing destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-saffron-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Users className="mr-2 h-6 w-6" />
                Plan Your Trip
              </Link>
              <Link
                to="/map"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-saffron-600 font-bold rounded-full transition-all duration-300"
              >
                <MapPin className="mr-2 h-6 w-6" />
                View Map
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;