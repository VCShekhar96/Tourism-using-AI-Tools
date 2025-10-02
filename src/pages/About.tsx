import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Globe, Heart, Mountain, Waves, TreePine, Star } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'Diverse Geography',
      description: 'From the Himalayas to tropical beaches, India offers every landscape imaginable',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Rich Culture',
      description: 'Home to multiple religions, languages, and traditions living in harmony',
      color: 'text-purple-600'
    },
    {
      icon: Globe,
      title: 'Ancient Heritage',
      description: '5000+ years of history with monuments that tell stories of great civilizations',
      color: 'text-amber-600'
    },
    {
      icon: Heart,
      title: 'Warm Hospitality',
      description: 'Experience the famous Indian hospitality - "Atithi Devo Bhava" (Guest is God)',
      color: 'text-red-600'
    }
  ];

  const facts = [
    { number: '1.4B+', label: 'Population', description: 'Diverse and vibrant people' },
    { number: '28', label: 'States', description: 'Each with unique culture' },
    { number: '22', label: 'Languages', description: 'Official languages recognized' },
    { number: '37', label: 'UNESCO Sites', description: 'World Heritage Sites' },
    { number: '7,500km', label: 'Coastline', description: 'Beautiful beaches' },
    { number: '104', label: 'National Parks', description: 'Wildlife sanctuaries' }
  ];

  const regions = [
    {
      name: 'North India',
      description: 'Home to the majestic Himalayas, historic Delhi, and the iconic Taj Mahal',
      image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Himalayas', 'Golden Triangle', 'Kashmir Valley', 'Punjab Plains']
    },
    {
      name: 'South India',
      description: 'Known for ancient temples, backwaters, hill stations, and rich cultural heritage',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Kerala Backwaters', 'Tamil Temples', 'Goa Beaches', 'Western Ghats']
    },
    {
      name: 'East India',
      description: 'Cultural hub with colonial architecture, tea gardens, and spiritual centers',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Kolkata Heritage', 'Darjeeling Tea', 'Sundarbans', 'Buddhist Sites']
    },
    {
      name: 'West India',
      description: 'Business centers, desert landscapes, and vibrant festivals',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Thar Desert', 'Mumbai Bollywood', 'Gujarat Culture', 'Rajasthan Palaces']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-saffron-600 via-orange-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">India</span>
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              A land of incredible diversity, ancient wisdom, and timeless beauty. 
              Discover the essence of a civilization that has thrived for millennia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Land of <span className="text-saffron-600">Unity in Diversity</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                India, officially known as the Republic of India, is a country in South Asia that stands as 
                the world's largest democracy and the seventh-largest country by land area. With a history 
                spanning over 5,000 years, India is the birthplace of four major world religions: Hinduism, 
                Buddhism, Jainism, and Sikhism.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From the snow-capped peaks of the Himalayas to the tropical beaches of the south, from the 
                deserts of Rajasthan to the lush forests of the Northeast, India offers an unparalleled 
                diversity of landscapes, cultures, languages, and experiences.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-saffron-500 rounded-full"></div>
                  <span className="text-sm font-medium">Saffron - Courage & Sacrifice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                  <span className="text-sm font-medium">White - Truth & Peace</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium">Green - Faith & Chivalry</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="India Heritage"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-saffron-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm">Years of History</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes India <span className="text-saffron-600">Special</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique aspects that make India a truly incredible destination
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <highlight.icon className={`h-12 w-12 mx-auto mb-4 ${highlight.color}`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts & Figures */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">India by Numbers</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Fascinating facts and figures about the incredible nation of India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-green-200 mb-2">{fact.number}</div>
                <div className="text-lg font-semibold mb-1">{fact.label}</div>
                <div className="text-sm text-green-100">{fact.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Diversity */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Regional <span className="text-saffron-600">Diversity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each region of India offers unique experiences, cultures, and landscapes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{region.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-saffron-100 text-saffron-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Indian Philosophy</h2>
            <div className="text-6xl mb-6">🕉️</div>
            <blockquote className="text-2xl italic mb-6 text-purple-100">
              "Vasudhaiva Kutumbakam"
            </blockquote>
            <p className="text-xl mb-8 text-purple-100">
              The World is One Family - This ancient Sanskrit phrase embodies India's philosophy 
              of universal brotherhood and acceptance of all beings as part of one global family.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2">Ahimsa</h3>
                <p className="text-purple-100">Non-violence and compassion for all living beings</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2">Dharma</h3>
                <p className="text-purple-100">Righteous living and moral responsibility</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-bold mb-2">Seva</h3>
                <p className="text-purple-100">Selfless service to humanity and nature</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;