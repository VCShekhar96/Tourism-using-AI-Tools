import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Heritage from './pages/Heritage';
import Beaches from './pages/Beaches';
import HillStations from './pages/HillStations';
import Spiritual from './pages/Spiritual';
import Wildlife from './pages/Wildlife';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/beaches" element={<Beaches />} />
            <Route path="/hill-stations" element={<HillStations />} />
            <Route path="/spiritual" element={<Spiritual />} />
            <Route path="/wildlife" element={<Wildlife />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;