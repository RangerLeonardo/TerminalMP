import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;