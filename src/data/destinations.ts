import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Taj Mahal',
    category: 'architecture',
    location: {
      lat: 27.1751,
      lng: 78.0421,
      address: 'Agra, Uttar Pradesh',
      state: 'Uttar Pradesh'
    },
    description: 'An ivory-white marble mausoleum and UNESCO World Heritage Site, one of the New Seven Wonders of the World.',
    imageUrl: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 15420,
    entryFee: 50,
    bestTime: 'October - March',
    duration: '2-3 hours',
    highlights: ['Mughal Architecture', 'UNESCO World Heritage', 'Love Monument']
  },
  {
    id: '2',
    name: 'Goa Beaches',
    category: 'beach',
    location: {
      lat: 15.2993,
      lng: 74.1240,
      address: 'Goa',
      state: 'Goa'
    },
    description: 'Beautiful tropical beaches with golden sand, crystal clear waters, and vibrant nightlife.',
    imageUrl: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 8940,
    entryFee: 0,
    bestTime: 'November - February',
    duration: '2-5 days',
    highlights: ['Water Sports', 'Beach Shacks', 'Nightlife']
  },
  {
    id: '3',
    name: 'Varanasi Ghats',
    category: 'temple',
    location: {
      lat: 25.3176,
      lng: 82.9739,
      address: 'Varanasi, Uttar Pradesh',
      state: 'Uttar Pradesh'
    },
    description: 'Sacred ghats along the Ganges River, one of the oldest continuously inhabited cities in the world.',
    imageUrl: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 12350,
    entryFee: 0,
    bestTime: 'October - March',
    duration: '1-2 days',
    highlights: ['Sacred Rituals', 'Boat Rides', 'Ancient Temples']
  },
  {
    id: '4',
    name: 'Manali Mountains',
    category: 'mountain',
    location: {
      lat: 32.2432,
      lng: 77.1892,
      address: 'Manali, Himachal Pradesh',
      state: 'Himachal Pradesh'
    },
    description: 'Breathtaking Himalayan views, adventure sports, and pleasant weather in the hill station.',
    imageUrl: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    reviews: 9870,
    entryFee: 0,
    bestTime: 'March - June, September - November',
    duration: '3-5 days',
    highlights: ['Trekking', 'River Rafting', 'Snow Activities']
  },
  {
    id: '5',
    name: 'Kerala Backwaters',
    category: 'river',
    location: {
      lat: 9.4981,
      lng: 76.3388,
      address: 'Alleppey, Kerala',
      state: 'Kerala'
    },
    description: 'Serene network of brackish lagoons and lakes with traditional houseboats and lush greenery.',
    imageUrl: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 11250,
    entryFee: 0,
    bestTime: 'September - March',
    duration: '2-3 days',
    highlights: ['Houseboat Stay', 'Ayurvedic Spa', 'Local Cuisine']
  },
  {
    id: '6',
    name: 'Sundarbans Forest',
    category: 'forest',
    location: {
      lat: 21.9497,
      lng: 89.1833,
      address: 'Sundarbans, West Bengal',
      state: 'West Bengal'
    },
    description: 'Largest mangrove forest in the world and home to the Royal Bengal Tiger.',
    imageUrl: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    reviews: 6780,
    entryFee: 100,
    bestTime: 'November - February',
    duration: '2-3 days',
    highlights: ['Tiger Safari', 'Mangrove Ecosystem', 'Boat Cruises']
  }
];