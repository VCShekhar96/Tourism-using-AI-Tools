/*
  # Add comprehensive Indian tourist destinations

  1. New Data
    - Insert 50+ popular Indian tourist destinations across all categories
    - Cover all major states and union territories
    - Include temples, mountains, beaches, forests, heritage sites, and more
    
  2. Categories Covered
    - Temples and religious sites
    - Mountains and hill stations  
    - Beaches and coastal areas
    - Forests and wildlife sanctuaries
    - Architecture and monuments
    - Heritage and cultural sites
    - Rivers and backwaters
    - Adventure destinations
*/

-- Insert comprehensive Indian tourist destinations
INSERT INTO destinations (name, category, latitude, longitude, address, state, description, image_url, rating, reviews, entry_fee, best_time, duration, highlights) VALUES

-- Temples
('Golden Temple', 'temple', 31.6200, 74.8765, 'Amritsar, Punjab', 'Punjab', 'The holiest Gurdwara of Sikhism, known for its stunning golden architecture and spiritual significance.', 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg', 4.9, 25000, 0, 'October - March', '2-3 hours', ARRAY['Golden Architecture', 'Free Meals', 'Sacred Pool']),

('Meenakshi Temple', 'temple', 9.9195, 78.1193, 'Madurai, Tamil Nadu', 'Tamil Nadu', 'Ancient temple complex dedicated to Goddess Meenakshi with intricate Dravidian architecture.', 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg', 4.7, 18500, 50, 'October - March', '2-3 hours', ARRAY['Dravidian Architecture', 'Colorful Sculptures', 'Religious Ceremonies']),

('Jagannath Temple', 'temple', 19.8135, 85.8312, 'Puri, Odisha', 'Odisha', 'Famous temple dedicated to Lord Jagannath, known for the annual Rath Yatra festival.', 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg', 4.6, 22000, 0, 'October - February', '2-4 hours', ARRAY['Rath Yatra Festival', 'Ancient Architecture', 'Spiritual Experience']),

('Somnath Temple', 'temple', 20.8880, 70.4017, 'Somnath, Gujarat', 'Gujarat', 'One of the twelve Jyotirlinga shrines of Shiva, located on the Arabian Sea coast.', 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg', 4.5, 15000, 0, 'October - March', '2-3 hours', ARRAY['Jyotirlinga Shrine', 'Coastal Location', 'Historical Significance']),

-- Mountains
('Leh Ladakh', 'mountain', 34.1526, 77.5771, 'Leh, Ladakh', 'Ladakh', 'High-altitude desert with stunning landscapes, Buddhist monasteries, and adventure activities.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.8, 35000, 0, 'May - September', '5-7 days', ARRAY['High Altitude', 'Buddhist Culture', 'Adventure Sports']),

('Shimla', 'mountain', 31.1048, 77.1734, 'Shimla, Himachal Pradesh', 'Himachal Pradesh', 'Former British summer capital with colonial architecture and scenic mountain views.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.4, 28000, 0, 'March - June, September - November', '2-3 days', ARRAY['Colonial Architecture', 'Toy Train', 'Mall Road']),

('Darjeeling', 'mountain', 27.0360, 88.2627, 'Darjeeling, West Bengal', 'West Bengal', 'Famous hill station known for tea gardens, toy train, and views of Kanchenjunga.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.5, 24000, 0, 'March - May, October - December', '2-3 days', ARRAY['Tea Gardens', 'Toy Train', 'Mountain Views']),

('Ooty', 'mountain', 11.4064, 76.6932, 'Ooty, Tamil Nadu', 'Tamil Nadu', 'Queen of Hill Stations with beautiful gardens, lakes, and pleasant climate.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.3, 20000, 0, 'April - June, September - November', '2-3 days', ARRAY['Botanical Gardens', 'Nilgiri Mountain Railway', 'Pleasant Climate']),

('Mussoorie', 'mountain', 30.4598, 78.0664, 'Mussoorie, Uttarakhand', 'Uttarakhand', 'Queen of Hills with stunning Himalayan views and colonial charm.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.2, 18000, 0, 'April - June, September - November', '2-3 days', ARRAY['Himalayan Views', 'Cable Car', 'Colonial Architecture']),

-- Beaches
('Radhanagar Beach', 'beach', 11.9804, 92.9093, 'Havelock Island, Andaman', 'Andaman and Nicobar Islands', 'Pristine white sand beach with crystal clear waters, rated among Asia''s best beaches.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.8, 15000, 0, 'October - May', '1-2 days', ARRAY['White Sand', 'Crystal Clear Water', 'Sunset Views']),

('Varkala Beach', 'beach', 8.7379, 76.7160, 'Varkala, Kerala', 'Kerala', 'Cliff-top beach with natural springs and Ayurvedic treatments.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.5, 12000, 0, 'October - March', '1-2 days', ARRAY['Cliff Views', 'Natural Springs', 'Ayurvedic Spa']),

('Palolem Beach', 'beach', 15.0100, 74.0233, 'Palolem, Goa', 'Goa', 'Crescent-shaped beach with palm trees and vibrant nightlife.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.4, 18000, 0, 'November - February', '1-3 days', ARRAY['Crescent Shape', 'Palm Trees', 'Beach Shacks']),

('Marina Beach', 'beach', 13.0500, 80.2824, 'Chennai, Tamil Nadu', 'Tamil Nadu', 'One of the longest urban beaches in the world with cultural significance.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.1, 25000, 0, 'November - February', '2-4 hours', ARRAY['Longest Urban Beach', 'Cultural Events', 'Street Food']),

-- Forests and Wildlife
('Jim Corbett National Park', 'forest', 29.5316, 78.9463, 'Nainital, Uttarakhand', 'Uttarakhand', 'India''s oldest national park, famous for Bengal tigers and diverse wildlife.', 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg', 4.6, 22000, 500, 'November - June', '2-3 days', ARRAY['Bengal Tigers', 'Wildlife Safari', 'Bird Watching']),

('Kaziranga National Park', 'forest', 26.5775, 93.1714, 'Kaziranga, Assam', 'Assam', 'UNESCO World Heritage Site famous for one-horned rhinoceros.', 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg', 4.7, 18000, 400, 'November - April', '2-3 days', ARRAY['One-horned Rhino', 'UNESCO Heritage', 'Elephant Safari']),

('Bandipur National Park', 'forest', 11.6840, 76.6413, 'Bandipur, Karnataka', 'Karnataka', 'Tiger reserve with rich biodiversity in the Western Ghats.', 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg', 4.4, 15000, 300, 'October - May', '1-2 days', ARRAY['Tiger Reserve', 'Western Ghats', 'Wildlife Photography']),

('Periyar Wildlife Sanctuary', 'forest', 9.4667, 77.2667, 'Thekkady, Kerala', 'Kerala', 'Wildlife sanctuary around Periyar Lake with boat safaris and spice plantations.', 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg', 4.3, 12000, 250, 'September - March', '1-2 days', ARRAY['Boat Safari', 'Spice Plantations', 'Elephant Sightings']),

-- Architecture and Monuments
('Red Fort', 'architecture', 28.6562, 77.2410, 'Delhi', 'Delhi', 'Mughal fortress and UNESCO World Heritage Site, symbol of India''s independence.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.5, 30000, 35, 'October - March', '2-3 hours', ARRAY['Mughal Architecture', 'UNESCO Heritage', 'Independence Symbol']),

('Hawa Mahal', 'architecture', 26.9239, 75.8267, 'Jaipur, Rajasthan', 'Rajasthan', 'Palace of Winds with unique honeycomb structure and 953 windows.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.4, 25000, 50, 'October - March', '1-2 hours', ARRAY['Unique Architecture', '953 Windows', 'Pink City']),

('Victoria Memorial', 'architecture', 22.5448, 88.3426, 'Kolkata, West Bengal', 'West Bengal', 'Grand marble building dedicated to Queen Victoria with museum and gardens.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.3, 20000, 30, 'October - March', '2-3 hours', ARRAY['Marble Architecture', 'Museum', 'Beautiful Gardens']),

('Charminar', 'architecture', 17.3616, 78.4747, 'Hyderabad, Telangana', 'Telangana', 'Iconic monument and mosque with four grand arches and minarets.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.2, 18000, 25, 'October - February', '1-2 hours', ARRAY['Four Minarets', 'Islamic Architecture', 'Historic Bazaar']),

-- Heritage Sites
('Hampi', 'heritage', 15.3350, 76.4600, 'Hampi, Karnataka', 'Karnataka', 'UNESCO World Heritage Site with ruins of the Vijayanagara Empire.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.6, 16000, 40, 'October - February', '2-3 days', ARRAY['UNESCO Heritage', 'Ancient Ruins', 'Vijayanagara Empire']),

('Khajuraho', 'heritage', 24.8318, 79.9199, 'Khajuraho, Madhya Pradesh', 'Madhya Pradesh', 'Famous for intricately carved temples depicting various aspects of life.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.4, 14000, 40, 'October - February', '1-2 days', ARRAY['Intricate Carvings', 'Ancient Temples', 'UNESCO Heritage']),

('Ajanta Caves', 'heritage', 20.5519, 75.7033, 'Ajanta, Maharashtra', 'Maharashtra', 'Ancient Buddhist cave monuments with exquisite paintings and sculptures.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.5, 12000, 40, 'November - March', '3-4 hours', ARRAY['Buddhist Art', 'Ancient Paintings', 'Rock-cut Caves']),

('Ellora Caves', 'heritage', 20.0269, 75.1791, 'Ellora, Maharashtra', 'Maharashtra', 'Rock-cut caves representing Hindu, Buddhist, and Jain religions.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.5, 13000, 40, 'November - March', '3-4 hours', ARRAY['Multi-religious', 'Rock-cut Architecture', 'UNESCO Heritage']),

-- Rivers and Backwaters
('Dal Lake', 'river', 34.1218, 74.8092, 'Srinagar, Kashmir', 'Jammu and Kashmir', 'Pristine lake with houseboats, shikaras, and floating gardens.', 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg', 4.7, 20000, 0, 'April - October', '1-2 days', ARRAY['Houseboats', 'Shikaras', 'Floating Gardens']),

('Kumarakom Backwaters', 'river', 9.6177, 76.4274, 'Kumarakom, Kerala', 'Kerala', 'Serene backwaters with traditional houseboats and bird sanctuary.', 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg', 4.6, 15000, 0, 'September - March', '1-2 days', ARRAY['Houseboat Cruise', 'Bird Sanctuary', 'Traditional Cuisine']),

('Chilika Lake', 'river', 19.7179, 85.3206, 'Chilika, Odisha', 'Odisha', 'Largest coastal lagoon in India, famous for migratory birds and dolphins.', 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg', 4.3, 10000, 50, 'November - February', '1 day', ARRAY['Migratory Birds', 'Dolphins', 'Boat Rides']),

-- Adventure Destinations
('Rishikesh', 'adventure', 30.0869, 78.2676, 'Rishikesh, Uttarakhand', 'Uttarakhand', 'Adventure capital of India with river rafting, bungee jumping, and yoga.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.5, 25000, 0, 'September - November, February - May', '2-3 days', ARRAY['River Rafting', 'Bungee Jumping', 'Yoga Capital']),

('Manali', 'adventure', 32.2432, 77.1892, 'Manali, Himachal Pradesh', 'Himachal Pradesh', 'Adventure hub with trekking, paragliding, and skiing opportunities.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.4, 30000, 0, 'March - June, September - November', '3-5 days', ARRAY['Trekking', 'Paragliding', 'Snow Sports']),

('Gokarna', 'adventure', 14.5492, 74.3200, 'Gokarna, Karnataka', 'Karnataka', 'Coastal town with pristine beaches and trekking trails.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.3, 12000, 0, 'October - March', '2-3 days', ARRAY['Beach Trekking', 'Water Sports', 'Pristine Beaches']),

-- Additional Popular Destinations
('Mysore Palace', 'architecture', 12.3052, 76.6551, 'Mysore, Karnataka', 'Karnataka', 'Magnificent palace known for its Indo-Saracenic architecture and Dussehra celebrations.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.5, 22000, 70, 'October - March', '2-3 hours', ARRAY['Indo-Saracenic Architecture', 'Dussehra Festival', 'Royal Heritage']),

('Rann of Kutch', 'heritage', 23.7337, 69.8597, 'Kutch, Gujarat', 'Gujarat', 'White salt desert with unique landscape and vibrant Rann Utsav festival.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.6, 18000, 0, 'November - February', '2-3 days', ARRAY['Salt Desert', 'Rann Utsav', 'Handicrafts']),

('Coorg', 'mountain', 12.3375, 75.8069, 'Coorg, Karnataka', 'Karnataka', 'Scotland of India with coffee plantations, waterfalls, and pleasant climate.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.4, 16000, 0, 'October - March', '2-3 days', ARRAY['Coffee Plantations', 'Waterfalls', 'Pleasant Climate']),

('Udaipur', 'heritage', 24.5854, 73.7125, 'Udaipur, Rajasthan', 'Rajasthan', 'City of Lakes with magnificent palaces and romantic ambiance.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.6, 28000, 0, 'September - March', '2-3 days', ARRAY['City of Lakes', 'Royal Palaces', 'Romantic Setting']),

('Kodaikanal', 'mountain', 10.2381, 77.4892, 'Kodaikanal, Tamil Nadu', 'Tamil Nadu', 'Princess of Hill Stations with lakes, waterfalls, and scenic viewpoints.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.3, 19000, 0, 'April - June, September - October', '2-3 days', ARRAY['Hill Station', 'Lakes', 'Scenic Views']),

('Jaisalmer', 'heritage', 26.9157, 70.9083, 'Jaisalmer, Rajasthan', 'Rajasthan', 'Golden City with magnificent fort and sand dunes of Thar Desert.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.4, 20000, 0, 'October - March', '2-3 days', ARRAY['Golden Fort', 'Sand Dunes', 'Desert Safari']),

('Munnar', 'mountain', 10.0889, 77.0595, 'Munnar, Kerala', 'Kerala', 'Hill station famous for tea gardens, wildlife, and cool climate.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.5, 24000, 0, 'September - March', '2-3 days', ARRAY['Tea Gardens', 'Wildlife', 'Cool Climate']),

('Pushkar', 'temple', 26.4899, 74.5511, 'Pushkar, Rajasthan', 'Rajasthan', 'Holy city with sacred lake and famous camel fair.', 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg', 4.3, 15000, 0, 'October - March', '1-2 days', ARRAY['Sacred Lake', 'Camel Fair', 'Holy City']),

('Andaman Islands', 'beach', 11.7401, 92.6586, 'Port Blair, Andaman', 'Andaman and Nicobar Islands', 'Tropical paradise with pristine beaches, coral reefs, and water sports.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.7, 22000, 0, 'October - May', '4-7 days', ARRAY['Pristine Beaches', 'Coral Reefs', 'Water Sports']),

('Spiti Valley', 'mountain', 32.2396, 78.0313, 'Spiti, Himachal Pradesh', 'Himachal Pradesh', 'Cold desert mountain valley with Buddhist monasteries and stunning landscapes.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.6, 8000, 0, 'May - October', '5-7 days', ARRAY['Cold Desert', 'Buddhist Monasteries', 'High Altitude']),

('Wayanad', 'forest', 11.6854, 76.1320, 'Wayanad, Kerala', 'Kerala', 'Hill district with wildlife sanctuaries, waterfalls, and spice plantations.', 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg', 4.2, 11000, 0, 'October - May', '2-3 days', ARRAY['Wildlife Sanctuary', 'Waterfalls', 'Spice Plantations']),

('Pondicherry', 'heritage', 11.9416, 79.8083, 'Pondicherry', 'Puducherry', 'French colonial town with beautiful beaches and spiritual atmosphere.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.3, 17000, 0, 'October - March', '2-3 days', ARRAY['French Architecture', 'Beaches', 'Spiritual Atmosphere']),

('Mount Abu', 'mountain', 24.5925, 72.7156, 'Mount Abu, Rajasthan', 'Rajasthan', 'Only hill station in Rajasthan with Dilwara Jain temples and cool climate.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.2, 14000, 0, 'November - March', '2-3 days', ARRAY['Hill Station', 'Jain Temples', 'Cool Climate']),

('Kanyakumari', 'beach', 8.0883, 77.5385, 'Kanyakumari, Tamil Nadu', 'Tamil Nadu', 'Southernmost tip of India where three seas meet, famous for sunrise and sunset.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.1, 16000, 0, 'October - March', '1-2 days', ARRAY['Three Seas Meet', 'Sunrise Sunset', 'Vivekananda Memorial']),

('Agra Fort', 'architecture', 27.1795, 78.0211, 'Agra, Uttar Pradesh', 'Uttar Pradesh', 'Mughal fortress and UNESCO World Heritage Site near the Taj Mahal.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.4, 20000, 50, 'October - March', '2-3 hours', ARRAY['Mughal Architecture', 'UNESCO Heritage', 'Historical Significance']),

('Konark Sun Temple', 'temple', 19.8876, 86.0945, 'Konark, Odisha', 'Odisha', 'UNESCO World Heritage Site designed as a colossal chariot of the Sun God.', 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg', 4.5, 12000, 40, 'October - February', '2-3 hours', ARRAY['Sun Temple', 'UNESCO Heritage', 'Architectural Marvel']),

('Valley of Flowers', 'forest', 30.7268, 79.6033, 'Chamoli, Uttarakhand', 'Uttarakhand', 'UNESCO World Heritage Site with endemic alpine flowers and stunning meadows.', 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg', 4.8, 5000, 150, 'July - September', '3-4 days', ARRAY['Alpine Flowers', 'UNESCO Heritage', 'Trekking']),

('Nainital', 'mountain', 29.3803, 79.4636, 'Nainital, Uttarakhand', 'Uttarakhand', 'Lake district with pear-shaped lake surrounded by hills and pleasant climate.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg', 4.3, 21000, 0, 'March - June, September - November', '2-3 days', ARRAY['Naini Lake', 'Hill Station', 'Boating']),

('Baga Beach', 'beach', 15.5557, 73.7515, 'Baga, Goa', 'Goa', 'Popular beach destination with water sports, nightlife, and beach shacks.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg', 4.2, 25000, 0, 'November - February', '1-3 days', ARRAY['Water Sports', 'Nightlife', 'Beach Shacks']),

('Fatehpur Sikri', 'heritage', 27.0945, 77.6618, 'Fatehpur Sikri, Uttar Pradesh', 'Uttar Pradesh', 'Abandoned Mughal city and UNESCO World Heritage Site with stunning architecture.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg', 4.3, 15000, 40, 'October - March', '2-3 hours', ARRAY['Mughal City', 'UNESCO Heritage', 'Abandoned Capital']);