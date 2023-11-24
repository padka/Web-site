import React from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import logo from "../../Image/logo.png";
import './regestration.css';
import axios from 'axios'; // Импорт библиотеки Axios

const RegistrationForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    const form = event.target;

    // Получаем значения полей формы
    const username = form.elements.formUsername.value;
    const phoneNumber = form.elements.formPhone.value;

    // Отправляем запрос на сервер
    axios.post('http://your-backend-url.com/api/register', { username, phoneNumber })
      .then(response => {
        console.log('Данные отправлены', response.data);
        // Обработка успешного ответа от сервера
      })
      .catch(error => {
        console.error('Ошибка отправки данных', error);
        // Обработка ошибки
      });
  };

  return (

    <Form onSubmit={handleSubmit} className="container mt-5">
      <div className="text-center mb-4">
        <img className="logo mb-4" src={logo} alt="Логотип" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Регистрация</h1>
      </div>

      <div className="vertical-form" >
        <Form.Group controlId="formUsername" className="form-group">
          <Form.Label className="zagolovokForm" >Уникальное имя пользователя</Form.Label>
          <Form.Control type="text" placeholder="" className="form-control"/>
        </Form.Group>

        <Form.Group controlId="formPhone" className="form-group">
          <Form.Label className="zagolovokForm">Номер телефона</Form.Label>
          <Form.Control type="tel" placeholder="" className="form-group"/>
        </Form.Group>

        <Button variant="primary" type="submit" className="button-form-registration">
          Зарегистрироваться
        </Button>
      </div>
      <div>
        <Nav.Link href="/login">Вход</Nav.Link>
      </div>
    </Form>

    
  );
}

export default RegistrationForm;