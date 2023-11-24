import React from 'react';
import Header from './Header'; // 
import SliderComponent from './SliderComponent'; 
import Catalog from './Catalog'; 
import Footer from './Footer'; 
import AboutPage from '../AboutPage/AboutPage';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <SliderComponent />
      <Catalog />
      <AboutPage/>
      <Footer />
    </div>
  );
};

export default IndexPage;
