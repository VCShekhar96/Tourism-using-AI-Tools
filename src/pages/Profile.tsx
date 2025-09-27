import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Heart, ShoppingBag, MapPin, Calendar, Star, Trash2, Eye } from 'lucide-react';
import { destinations } from '../data/destinations';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'wishlist' | 'orders'>('profile');

  // Mock data
  const userProfile = {
    name: 'Arjun Sharma',
    email: 'arjun@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    joinDate: 'January 2024',
    totalTrips: 12,
    favoriteDestinations: 8
  };

  const wishlistItems = [
    { id: '1', destinationId: '1', addedAt: new Date('2024-01-15') },
    { id: '2', destinationId: '3', addedAt: new Date('2024-01-20') },
    { id: '3', destinationId: '5', addedAt: new Date('2024-02-01') }
  ];

  const orders = [
    {
      id: 'ORD001',
      destinationId: '2',
      bookingDate: new Date('2024-01-10'),
      visitDate: new Date('2024-02-15'),
      guests: 2,
      totalAmount: 15000,
      status: 'confirmed' as const
    },
    {
      id: 'ORD002',
      destinationId: '4',
      bookingDate: new Date('2024-01-25'),
      visitDate: new Date('2024-03-10'),
      guests: 4,
      totalAmount: 28000,
      status: 'pending' as const
    }
  ];

  const getDestinationById = (id: string) => destinations.find(d => d.id === id);

  const tabs = [
    { id: 'profile' as const, label: 'Profile', icon: User },
    { id: 'wishlist' as const, label: 'Wishlist', icon: Heart, count: wishlistItems.length },
    { id: 'orders' as const, label: 'My Orders', icon: ShoppingBag, count: orders.length }
  ];

  const ProfileSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {userProfile.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{userProfile.name}</h2>
            <p className="text-gray-600">{userProfile.email}</p>
            <div className="flex items-center space-x-1 text-gray-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span>{userProfile.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{userProfile.totalTrips}</div>
            <div className="text-sm text-gray-600">Total Trips</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{userProfile.favoriteDestinations}</div>
            <div className="text-sm text-gray-600">Favorite Places</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{userProfile.joinDate}</div>
            <div className="text-sm text-gray-600">Member Since</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={userProfile.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={userProfile.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={userProfile.phone}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={userProfile.location}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const WishlistSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {wishlistItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600">Start exploring and add destinations to your wishlist!</p>
        </div>
      ) : (
        wishlistItems.map((item, index) => {
          const destination = getDestinationById(item.destinationId);
          if (!destination) return null;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{destination.name}</h3>
                  <p className="text-gray-600">{destination.location.address}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{destination.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Added {item.addedAt.toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })
      )}
    </motion.div>
  );

  const OrdersSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {orders.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-600">Book your first destination to see your orders here!</p>
        </div>
      ) : (
        orders.map((order, index) => {
          const destination = getDestinationById(order.destinationId);
          if (!destination) return null;

          const statusColors = {
            confirmed: 'bg-green-100 text-green-800',
            pending: 'bg-yellow-100 text-yellow-800',
            cancelled: 'bg-red-100 text-red-800'
          };

          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">
                    Booked on {order.bookingDate.toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={destination.imageUrl}
                  alt={destination.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{destination.name}</h4>
                  <p className="text-gray-600">{destination.location.address}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Visit: {order.visitDate.toLocaleDateString()}</span>
                    </div>
                    <span>• {order.guests} guests</span>
                    <span>• ₹{order.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Account</h1>
          <p className="text-gray-600">Manage your profile, wishlist, and bookings</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-200 rounded-xl p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'profile' && <ProfileSection />}
        {activeTab === 'wishlist' && <WishlistSection />}
        {activeTab === 'orders' && <OrdersSection />}
      </div>
    </div>
  );
};

export default Profile;