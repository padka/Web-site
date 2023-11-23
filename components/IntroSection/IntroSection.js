import React from 'react';
import './IntroSection.css';
import '../../index.css'
import img1 from '../../Image/image 3.png'; 
import img2 from '../../Image/image 3.png';
import img3 from '../../Image/image 3.png';


function IntroSection() {
  return (
    <section className="intro-section">
      <h2>О нашей компании</h2>
      <p>
     Что то нужно написать 
      </p>
      <p>
        что то нужно написать 
      </p>
      <div className="gallery">
      <img src={img1} alt="Пример работы 1" />
        <img src={img2}alt="Пример работы 2" />
        <img src={img3}alt="Пример работы 3" />
        </div>
    </section>
  );
}

export default IntroSection;

