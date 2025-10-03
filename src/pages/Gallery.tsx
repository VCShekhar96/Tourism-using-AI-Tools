import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Heart, Download, Share2, Eye } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'heritage', name: 'Heritage', count: 8 },
    { id: 'nature', name: 'Nature', count: 6 },
    { id: 'beaches', name: 'Beaches', count: 4 },
    { id: 'mountains', name: 'Mountains', count: 6 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Taj Mahal at Sunrise',
      location: 'Agra, Uttar Pradesh',
      category: 'heritage',
      description: 'The iconic symbol of love bathed in golden morning light'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Goa Beach Paradise',
      location: 'Goa',
      category: 'beaches',
      description: 'Crystal clear waters and golden sand beaches of Goa'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Himalayan Peaks',
      location: 'Himachal Pradesh',
      category: 'mountains',
      description: 'Majestic snow-capped peaks of the Himalayas'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ancient Temple Architecture',
      location: 'Various Locations',
      category: 'heritage',
      description: 'Intricate carvings and timeless architecture'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kerala Backwaters',
      location: 'Kerala',
      category: 'nature',
      description: 'Serene backwaters surrounded by lush greenery'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Wildlife Safari',
      location: 'National Parks',
      category: 'nature',
      description: 'Incredible wildlife in their natural habitat'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Red Fort Delhi',
      location: 'Delhi',
      category: 'heritage',
      description: 'Magnificent Mughal architecture in the heart of Delhi'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Andaman Islands',
      location: 'Andaman & Nicobar',
      category: 'beaches',
      description: 'Pristine beaches with crystal clear turquoise waters'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Darjeeling Tea Gardens',
      location: 'West Bengal',
      category: 'mountains',
      description: 'Rolling hills covered with lush tea plantations'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Khajuraho Temples',
      location: 'Madhya Pradesh',
      category: 'heritage',
      description: 'Exquisite stone carvings and temple architecture'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Munnar Hills',
      location: 'Kerala',
      category: 'nature',
      description: 'Misty hills and tea plantations of Munnar'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tiger in the Wild',
      location: 'Various National Parks',
      category: 'nature',
      description: 'Majestic Bengal tiger in its natural habitat'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-600 via-purple-500 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Photo <span className="text-pink-300">Gallery</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Explore India's breathtaking beauty through our curated collection of 
              high-quality photographs showcasing the country's diverse landscapes and heritage
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Camera className="h-6 w-6" />
                <span>High Quality Images</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Eye className="h-6 w-6" />
                <span>Professional Photography</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <Heart className="h-6 w-6" />
                <span>Incredible India</span>
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
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stunning <span className="text-pink-600">Photography</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each photograph tells a story of India's incredible diversity and timeless beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <div className="flex items-center text-gray-200 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{image.location}</span>
                    </div>
                    <p className="text-sm text-gray-300">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
                      <Heart className="h-4 w-4 text-white" />
                    </button>
                    <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
                      <Share2 className="h-4 w-4 text-white" />
                    </button>
                    <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
                      <Download className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Tips */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Photography Tips for India</h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Capture the essence of India with these professional photography tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { tip: 'Golden Hour Magic', icon: '🌅', description: 'Best light during sunrise and sunset' },
              { tip: 'Cultural Respect', icon: '🙏', description: 'Always ask permission before photographing people' },
              { tip: 'Monsoon Beauty', icon: '🌧️', description: 'Capture the lush landscapes during monsoon' },
              { tip: 'Festival Colors', icon: '🎨', description: 'Document vibrant festivals and celebrations' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.tip}</h3>
                <p className="text-pink-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;