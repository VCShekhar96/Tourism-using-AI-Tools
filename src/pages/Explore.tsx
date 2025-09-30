import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Star, Clock, IndianRupee, Car, Heart } from 'lucide-react';
import { destinationService } from '../services/destinationService';
import { wishlistService } from '../services/wishlistService';
import { getCurrentLocation, calculateDistance, calculateTollCharges } from '../utils/location';
import { UserLocation, TollInfo } from '../types';
import { Database } from '../types/database';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

type Destination = Database['public']['Tables']['destinations']['Row'];

const Explore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [tollInfo, setTollInfo] = useState<{ [key: string]: TollInfo }>({});
  const [wishlistItems, setWishlistItems] = useState<Set<string>>(new Set());
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const { user } = useAuth();

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

  // Load destinations
  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const data = await destinationService.getAll();
        setDestinations(data);
      } catch (error) {
        console.error('Failed to load destinations:', error);
        toast.error('Failed to load destinations');
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, []);

  // Load user's wishlist
  useEffect(() => {
    const loadWishlist = async () => {
      if (!user) return;
      
      try {
        const wishlist = await wishlistService.getUserWishlist(user.id);
        const wishlistSet = new Set(wishlist.map(item => item.destination_id));
        setWishlistItems(wishlistSet);
      } catch (error) {
        console.error('Failed to load wishlist:', error);
      }
    };

    loadWishlist();
  }, [user]);

  useEffect(() => {
    const getLocation = async () => {
      setIsLoadingLocation(true);
      try {
        const location = await getCurrentLocation();
        setUserLocation(location);
      } catch (error) {
        console.error('Failed to get location:', error);
        // Don't show error toast immediately, let user manually enable location
      } finally {
        setIsLoadingLocation(false);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      const tollData: { [key: string]: TollInfo } = {};
      destinations.forEach(destination => {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          destination.latitude,
          destination.longitude
        );
        tollData[destination.id] = calculateTollCharges(distance);
      });
      setTollInfo(tollData);
    }
  }, [userLocation]);

  const filteredDestinations = useMemo(() => {
    return destinations.filter(destination => {
      const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           destination.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           destination.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleWishlist = async (destinationId: string) => {
    if (!user) {
      toast.error('Please sign in to add to wishlist');
      return;
    }

    try {
      const isInWishlist = wishlistItems.has(destinationId);
      
      if (isInWishlist) {
        await wishlistService.remove(user.id, destinationId);
        setWishlistItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(destinationId);
          return newSet;
        });
        toast.success('Removed from wishlist');
      } else {
        await wishlistService.add(user.id, destinationId);
        setWishlistItems(prev => new Set(prev).add(destinationId));
        toast.success('Added to wishlist');
      }
    } catch (error) {
      console.error('Wishlist error:', error);
      toast.error('Failed to update wishlist');
    }
  };

  const handleViewDetails = (destination: Destination) => {
    setSelectedDestination(destination);
    if (!userLocation) {
      toast.error('Please enable location services to see distance and toll information');
    }
  };

  const DestinationDetailsModal: React.FC = () => {
    if (!selectedDestination) return null;

    const distance = userLocation ? calculateDistance(
      userLocation.lat,
      userLocation.lng,
      selectedDestination.latitude,
      selectedDestination.longitude
    ) : null;

    const toll = tollInfo[selectedDestination.id];
    const isInWishlist = wishlistItems.has(selectedDestination.id);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="relative">
            <img
              src={selectedDestination.image_url}
              alt={selectedDestination.name}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all"
            >
              ✕
            </button>
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
              {selectedDestination.category}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedDestination.name}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedDestination.address}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{selectedDestination.rating} ({selectedDestination.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleWishlist(selectedDestination.id)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isInWishlist
                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-6 w-6 ${isInWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{selectedDestination.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Duration</span>
                </div>
                <p className="text-gray-700">{selectedDestination.duration}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <IndianRupee className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Entry Fee</span>
                </div>
                <p className="text-gray-700">₹{selectedDestination.entry_fee}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Best Time to Visit</h3>
              <p className="text-gray-700">{selectedDestination.best_time}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {selectedDestination.highlights?.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {userLocation && distance && toll && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Distance & Travel Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{distance} km</div>
                    <div className="text-sm text-gray-600">Distance from you</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">₹{toll.estimatedToll}</div>
                    <div className="text-sm text-gray-600">Estimated toll (car)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{toll.duration}</div>
                    <div className="text-sm text-gray-600">Travel time</div>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                  Route: {toll.route}
                </div>
              </div>
            )}

            {!userLocation && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 text-yellow-800">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Enable location services to see distance and toll information</span>
                </div>
              </div>
            )}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-200 font-semibold">
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    );
  };
  const DestinationCard: React.FC<{ destination: Destination; index: number }> = ({ destination, index }) => {
    const isInWishlist = wishlistItems.has(destination.id);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <div className="relative overflow-hidden">
          <img
            src={destination.image_url}
            alt={destination.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
          <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1 text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>{destination.address}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1 text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <IndianRupee className="h-4 w-4" />
                <span>₹{destination.entry_fee}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-sm text-gray-600 mb-1">Best time to visit:</div>
              <div className="text-sm font-medium text-gray-900">{destination.best_time}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {destination.highlights?.slice(0, 3).map((highlight, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => toggleWishlist(destination.id)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isInWishlist
                  ? 'bg-red-100 text-red-600 hover:bg-red-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
            </button>
            <button 
              onClick={() => handleViewDetails(destination)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold"
            >
              View Details
            </button>
          </div>
        </div>
      </motion.div>
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
              Discover amazing destinations across India. View details to see distance and toll information from your location.
            </p>
          </motion.div>

          {/* Search and Filter */}
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

      {/* Categories */}
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
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Location Status */}
      {isLoadingLocation && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-400 border-t-transparent mr-3"></div>
            <p className="text-blue-700">Getting your location for distance calculations...</p>
          </div>
        </div>
      )}

      {!userLocation && !isLoadingLocation && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-yellow-600 mr-3" />
              <p className="text-yellow-800">Enable location services to see distance and toll information when viewing destination details.</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
            >
              Enable Location
            </button>
          </div>
        </div>
      )}

      {/* Destinations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              <span className="ml-4 text-lg text-gray-600">Loading destinations...</span>
            </div>
          ) : (
            <>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredDestinations.length} destinations found
            </h2>
          </div>

          {filteredDestinations.length === 0 ? (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>
          )}
            </>
          )}
        </div>
      </section>

      {/* Destination Details Modal */}
      <DestinationDetailsModal />
    </div>
  );
};

export default Explore;