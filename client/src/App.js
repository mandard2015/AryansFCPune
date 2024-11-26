import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Team from './components/Team';
import Events from './components/events';
import Footer from './components/footer';
import WhatsAppIcon from './components/whatsappIcon';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path='/event' element={<Events />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </Router>
  );
}

export default App;
