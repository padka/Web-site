import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import phoneIcon from '../../Image/phoneIcon.svg'; 
import feedbackIcon from  '../../Image/phoneIcon.svg'; 
import emailIcon from  '../../Image/emailIcon.svg'; 
import logo from '../../Image/logo.jpg'; 
import basket from '../../Image/basket.svg'; 
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const TopHeader = () => {
  return (
    <Navbar className="upper-header" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="tel:+77777777777">
            <img src={phoneIcon} alt="Phone" className="icon" /> +7(777)777-77-77
          </Nav.Link>
          <Nav.Link href="/feedback">
            <img src={feedbackIcon} alt="Feedback" className="icon" /> Обратная связь
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="mailto:sampletext@gmail.com">
            <img src={emailIcon} alt="Email" className="icon" /> sampletext@gmail.com
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const MainHeader = () => {
  return (
    <Navbar className="bg-white" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src ={logo} alt ='logo' className="icon-placeholder-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/catalog">Каталог</Nav.Link>
            <Nav.Link href="/about">О нас</Nav.Link>
            <Nav.Link as={Link} to="/registration">Личный кабинет</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">
            Корзина <img src = {basket} alt = 'корзина 'className="icon-placeholder"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Header = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
    </>
  );
};

export default Header;