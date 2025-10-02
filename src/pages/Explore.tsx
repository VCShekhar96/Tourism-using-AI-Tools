import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Star, Clock, Users } from 'lucide-react';
import { destinations } from '../data/destinations';
import { Destination } from '../types';

const Explore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', emoji: '🗺️' },
    { id: 'temple', name: 'Temples', emoji: '🏛️' },
    { id: 'forest', name: 'Forests', emoji: '🌲' },
    { id: 'mountain', name: 'Mountains', emoji: '⛰️' },
    { id: 'beach', name: 'Beaches', emoji: '🏖️' },
    { id: 'river', name: 'Rivers', emoji: '🌊' },
    { id: 'architecture', name: 'Architecture', emoji: '🏗️' },
    { id: 'heritage', name: 'Heritage', emoji: '🏺' },
    { id: 'adventure', name: 'Adventure', emoji: '🎯' }
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter(destination => {
      const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           destination.location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           destination.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, destinations]);

  // Group destinations by category
  const destinationsByCategory = useMemo(() => {
    const grouped: { [key: string]: Destination[] } = {};
    
    if (selectedCategory === 'all') {
      // Group all destinations by their categories
      filteredDestinations.forEach(destination => {
        if (!grouped[destination.category]) {
          grouped[destination.category] = [];
        }
        grouped[destination.category].push(destination);
      });
    } else {
      // Show only selected category
      grouped[selectedCategory] = filteredDestinations;
    }
    
    return grouped;
  }, [filteredDestinations, selectedCategory]);

  const DestinationCard: React.FC<{ destination: Destination; index: number }> = ({ destination, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <div className="relative overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800';
            }}
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
            {destination.category}
          </div>
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold">{destination.rating}</span>
            <span className="text-xs text-gray-500">({destination.reviews})</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
          
          <div className="flex items-center space-x-1 text-gray-500 mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{destination.location.address}, {destination.location.state}</span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-green-600 font-semibold">
                {destination.entryFee === 0 ? 'Free Entry' : `₹${destination.entryFee}`}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Best Time to Visit:</p>
            <span className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
              {destination.bestTime}
            </span>
          </div>

          {destination.highlights && destination.highlights.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Highlights:</p>
              <div className="flex flex-wrap gap-1">
                {destination.highlights.slice(0, 3).map((highlight, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold">
            View Details
          </button>
        </div>
      </motion.div>
    );
  };

  const CategorySection: React.FC<{ categoryId: string; destinations: Destination[] }> = ({ 
    categoryId, 
    destinations: categoryDestinations 
  }) => {
    const category = categories.find(cat => cat.id === categoryId);
    const categoryName = category ? category.name : categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
    const categoryEmoji = category ? category.emoji : '📍';

    if (categoryDestinations.length === 0) return null;

    return (
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 mb-6"
        >
          <span className="text-3xl">{categoryEmoji}</span>
          <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {categoryDestinations.length} destinations
          </span>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Explore India's Wonders
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover amazing destinations across India with detailed information and beautiful imagery
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations, locations, or attractions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full border-2 transition-all duration-200 font-medium ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations by Category */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              <span className="ml-4 text-lg text-gray-600">Loading destinations...</span>
            </div>
          ) : Object.keys(destinationsByCategory).length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </motion.div>
          ) : (
            <div>
              {Object.entries(destinationsByCategory)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([categoryId, categoryDestinations]) => (
                  <CategorySection
                    key={categoryId}
                    categoryId={categoryId}
                    destinations={categoryDestinations}
                  />
                ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Explore;