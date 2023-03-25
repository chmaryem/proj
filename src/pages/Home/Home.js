import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from '../../components/Hero';
import About from '../../components/About';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import CtaSection from '../../components/CtaSection';
import Footer from '../../components/Footer';
const Home = () => {
  
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
     
      <CtaSection />
      <Footer />
    </div>
  );
  };
  
  export default Home;
  