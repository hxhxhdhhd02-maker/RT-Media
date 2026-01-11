import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Stats from './components/Stats';
import Vision from './components/Vision';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="App" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Stats />
      <Vision />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
