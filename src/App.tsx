import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Member from './components/member';
import Slider from './components/slider';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Slider/>
      <Member />
      <Footer />
    </>
  );
};

export default App;
