import React from 'react';
import {Form, Container, Row, Col} from 'react-bootstrap';

import "./contact.css";
import phone from "../assets/phone.png";

const Contact = () => {
  return (
    <>
        <section className='contact' id='contact'>
            <Container>
            <Row>
                <Col>
                
                <Form>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contactez-Nous</h2>
                            <h3 className="section-subheading text-muted sp">Vous avez besoins des services de Jiskobou, ou tout simplement en
            savoir plus !?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Votre nom *" required="required" data-validation-required-message="Please enter your name."/>
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Votre courriel *" required="required" data-validation-required-message="Please enter your email address."/>
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="phone" type="tel" placeholder="Votre téléphone *" required="required" data-validation-required-message="Please enter your phone number."/>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <textarea className="form-control" id="message" placeholder="Votre message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Envoyez</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </Form>
                </Col>
                <Col>
                    
                        <img src={phone} alt="logo" />
                    
                </Col>
            </Row>
            </Container>
        </section>
    </>
  )
}

export default Contact