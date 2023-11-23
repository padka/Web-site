import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импорт компонентов
import Header from './components/Header/Header';
import SliderComponent from './components/SliderComponent/SliderComponent';
import IntroSection from './components/IntroSection/IntroSection';
import Catalog from './components/Catalog/Catalog';
import ContactPage from './components/ContactPage/ContactPage'; 
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';

// Компонент для главной страницы, включающий SliderComponent и Catalog
const IndexPage = () => {
  return (
    <>
      <SliderComponent />
      <Catalog />
      <AboutPage/>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <main>
            <Routes>
              <Route path="/about" element={<IntroSection />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<IndexPage />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;



