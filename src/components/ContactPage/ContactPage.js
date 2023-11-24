import React from 'react';
import './ContactPage.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Свяжитесь с нами</h2>
        <form>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш email" required />
          <textarea placeholder="Ваше сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
      
      <div className="contact-info">
        <div className="address">
          <h3>Адрес:</h3>
          <p>Улица, дом, город, страна</p>
        </div>
        
        <div className="hours">
          <h3>Рабочие часы:</h3>
          <p>Понедельник - Пятница: 9:00 - 18:00</p>
          <p>Суббота - Воскресенье: Закрыто</p>
        </div>
        
        <div className="phone-email">
          <h3>Телефон:</h3>
          <p>+1 (234) 567-8901</p>
          <h3>Email:</h3>
          <p>example@email.com</p>
        </div>
        
        <div className="map">
          {/* Здесь будет ваша карта. Пока что это просто плейсхолдер. */}
          <p>Здесь будет карта</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

