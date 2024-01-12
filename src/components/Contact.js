import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {Form, Container, Row, Col} from 'react-bootstrap';
import Shake from 'react-reveal/Shake';
import "./contact.css";
import phone from "../assets/phone.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your email service details
    const serviceId = 'service_2n1a0uj';
    const templateId = 'template_haoamon';
    const userId = 'user_dcPheUydu1AZP5i7w5K8q';

    
  emailjs.send(serviceId, templateId, formData, userId)
  .then((response) => {
    console.log('Email sent successfully:', response);

    // Display a confirmation message to the user
    alert('Email sent successfully!');
  })
  .catch((error) => {
    console.error('Error sending email:', error);

    // Display an error message to the user
    alert('Error sending email. Please try again later.');
  });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <>
        <section className='contact' id='contact'>
            <Container>
                <Row>
                    <Col>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contactez-Nous</h2>
                                <h3 className="section-subheading text-muted sp">Vous avez besoins des services de Jiskobou, ou tout simplement en
                    savoir plus !?</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Form onSubmit={handleSubmit}>
                                    <label>
                                    Nom et Prénom:
                                    <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} required />
                                    </label>
                                    <br />
                                    <label>
                                    Courriel:
                                    <input className="form-control" type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </label>
                                    <br />
                                    <label>
                                    Téléphone:
                                    <input className="form-control" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                    </label>
                                    <br />
                                    <label>
                                    Message:
                                    <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} required />
                                    </label>
                                    <br />
                                    <button className="btn btn-primary btn-xl text-uppercase" type="submit">Envoyez</button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Shake>
                            <img src={phone} alt="logo" />
                        </Shake>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
};

export default Contact;