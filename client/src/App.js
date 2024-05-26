import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/navbar';
import Team from './components/Team';
import Footer from './components/footer';
import WhatsAppIcon from './components/whatsappIcon';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AppNavbar />
        <main className="flex-grow">
          <Routes>
          <Route path="/team" element={<Team />} />
        </Routes>
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </Router>
  );
}

export default App;
