import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Member from './components/member';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Member />
      <Footer />
    </>
  );
};

export default App;
