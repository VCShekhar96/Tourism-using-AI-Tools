/*
  # Tourism Web Application Database Schema

  1. New Tables
    - `destinations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text)
      - `latitude` (numeric)
      - `longitude` (numeric)
      - `address` (text)
      - `state` (text)
      - `description` (text)
      - `image_url` (text)
      - `rating` (numeric)
      - `reviews` (integer)
      - `entry_fee` (integer)
      - `best_time` (text)
      - `duration` (text)
      - `highlights` (text array)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `user_profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `full_name` (text)
      - `phone` (text)
      - `location` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `wishlists`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `destination_id` (uuid, foreign key to destinations)
      - `created_at` (timestamp)

    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `destination_id` (uuid, foreign key to destinations)
      - `booking_date` (timestamp)
      - `visit_date` (date)
      - `guests` (integer)
      - `total_amount` (integer)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Public read access for destinations
*/

-- Create destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  address text NOT NULL,
  state text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  rating numeric DEFAULT 4.0,
  reviews integer DEFAULT 0,
  entry_fee integer DEFAULT 0,
  best_time text NOT NULL,
  duration text NOT NULL,
  highlights text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  phone text,
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create wishlists table
CREATE TABLE IF NOT EXISTS wishlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, destination_id)
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  booking_date timestamptz DEFAULT now(),
  visit_date date NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  total_amount integer NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Destinations policies (public read, authenticated write)
CREATE POLICY "Anyone can read destinations"
  ON destinations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert destinations"
  ON destinations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update destinations"
  ON destinations
  FOR UPDATE
  TO authenticated
  USING (true);

-- User profiles policies
CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Wishlists policies
CREATE POLICY "Users can read own wishlist"
  ON wishlists
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert to own wishlist"
  ON wishlists
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete from own wishlist"
  ON wishlists
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Bookings policies
CREATE POLICY "Users can read own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Insert sample destinations
INSERT INTO destinations (name, category, latitude, longitude, address, state, description, image_url, rating, reviews, entry_fee, best_time, duration, highlights) VALUES
('Taj Mahal', 'architecture', 27.1751, 78.0421, 'Agra, Uttar Pradesh', 'Uttar Pradesh', 'An ivory-white marble mausoleum and UNESCO World Heritage Site, one of the New Seven Wonders of the World.', 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800', 4.8, 15420, 50, 'October - March', '2-3 hours', '{"Mughal Architecture", "UNESCO World Heritage", "Love Monument"}'),

('Goa Beaches', 'beach', 15.2993, 74.1240, 'Goa', 'Goa', 'Beautiful tropical beaches with golden sand, crystal clear waters, and vibrant nightlife.', 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800', 4.6, 8940, 0, 'November - February', '2-5 days', '{"Water Sports", "Beach Shacks", "Nightlife"}'),

('Varanasi Ghats', 'temple', 25.3176, 82.9739, 'Varanasi, Uttar Pradesh', 'Uttar Pradesh', 'Sacred ghats along the Ganges River, one of the oldest continuously inhabited cities in the world.', 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800', 4.7, 12350, 0, 'October - March', '1-2 days', '{"Sacred Rituals", "Boat Rides", "Ancient Temples"}'),

('Manali Mountains', 'mountain', 32.2432, 77.1892, 'Manali, Himachal Pradesh', 'Himachal Pradesh', 'Breathtaking Himalayan views, adventure sports, and pleasant weather in the hill station.', 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800', 4.5, 9870, 0, 'March - June, September - November', '3-5 days', '{"Trekking", "River Rafting", "Snow Activities"}'),

('Kerala Backwaters', 'river', 9.4981, 76.3388, 'Alleppey, Kerala', 'Kerala', 'Serene network of brackish lagoons and lakes with traditional houseboats and lush greenery.', 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800', 4.8, 11250, 0, 'September - March', '2-3 days', '{"Houseboat Stay", "Ayurvedic Spa", "Local Cuisine"}'),

('Sundarbans Forest', 'forest', 21.9497, 89.1833, 'Sundarbans, West Bengal', 'West Bengal', 'Largest mangrove forest in the world and home to the Royal Bengal Tiger.', 'https://images.pexels.com/photos/3608311/pexels-photo-3608311.jpeg?auto=compress&cs=tinysrgb&w=800', 4.4, 6780, 100, 'November - February', '2-3 days', '{"Tiger Safari", "Mangrove Ecosystem", "Boat Cruises"}'),

('Red Fort Delhi', 'heritage', 28.6562, 77.2410, 'Delhi', 'Delhi', 'Historic fortified palace of the Mughal emperors, a UNESCO World Heritage Site.', 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800', 4.3, 8920, 35, 'October - March', '2-3 hours', '{"Mughal Architecture", "Light and Sound Show", "Historical Significance"}'),

('Rishikesh Adventure', 'adventure', 30.0869, 78.2676, 'Rishikesh, Uttarakhand', 'Uttarakhand', 'Adventure capital of India with river rafting, bungee jumping, and spiritual experiences.', 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800', 4.6, 7650, 0, 'September - November, February - May', '2-4 days', '{"River Rafting", "Bungee Jumping", "Yoga Retreats"}');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_destinations_category ON destinations(category);
CREATE INDEX IF NOT EXISTS idx_destinations_state ON destinations(state);
CREATE INDEX IF NOT EXISTS idx_destinations_rating ON destinations(rating DESC);
CREATE INDEX IF NOT EXISTS idx_wishlists_user_id ON wishlists(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);