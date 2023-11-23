import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapIcon from '../../Image/Group1.svg'; 
import PhoneIcon from '../../Image/Group2.svg';
import './AboutPage.css'; 

const AboutPage = () => {
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18...";

  return (
    <Container className="about-section my-5">
      <Row className="justify-content-center mb-4">
        <Col xs={12} className="text-center">
          <h2 className="about-title">О нас</h2>
          <p className="about-description">*Какое-то описание компании и продукции*</p>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center text-md-left">
          <div className="contact-info">
            <p><img src={MapIcon} alt="Location" className="icon" /> г.Белгород, ул. Костюкова 46</p>
            <p><img src={PhoneIcon} alt="Phone" className="icon" /> +7(777)777-77-77</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          {/* Здесь iframe для встроенной Google Карты */}
          <iframe
            title="Location"
            src={googleMapsUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, minHeight: '300px' }} 
            allowFullScreen=""
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

