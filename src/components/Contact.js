import React, {useState} from 'react';
import {Form, Container, Row, Col} from 'react-bootstrap';
import Shake from 'react-reveal/Shake';
import "./contact.css";
import phone from "../assets/phone.png";

const Contact = () => {
    const [formState, setFormState] = useState({});

    
    const changeHandler = (event) =>{
        setFormState({...formState, [event.target.name]: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
      const config = {
        SecureToken : '531cf605-04db-49f7-827b-162dcdd7fcfb',
        To : 'info@santejiskobou.com',
        From : formState.email,
        Subject : "Un visiteur du site web Santé Jiskobou à un commentaire",
        Body : `Nom du visiteur: ${formState.name}, Telephone:${formState.phone}, Message du visiteur:${formState.message} `,
    };  
    if(window.Email){
    window.Email.send(config).then((message) => alert("Email was sent successfully"));
    };
}

  return (
    <>
        <section className='contact' id='contact'>
            <Container>
            <Row>
                <Col>
                
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contactez-Nous</h2>
                            <h3 className="section-subheading text-muted sp">Vous avez besoins des services de Jiskobou, ou tout simplement en
            savoir plus !?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate" >
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Votre nom *" value={formState.name || ''} name="name" required="required" data-validation-required-message="Please enter your name." onChange={changeHandler}/>
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Votre courriel *" value={formState.email || ''} name="email" required="required" data-validation-required-message="Please enter your email address." onChange={changeHandler}/>
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="phone" type="tel" placeholder="Votre téléphone *" value={formState.phone || ''} name="phone" required="required" data-validation-required-message="Please enter your phone number." onChange={changeHandler}/>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <textarea className="form-control" id="message" placeholder="Votre message *" value={formState.message || ''} name="message" required="required" data-validation-required-message="Please enter a message." onChange={changeHandler}></textarea>
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
                    <Shake>
                        <img src={phone} alt="logo" />
                    </Shake>
                </Col>
            </Row>
            </Container>
        </section>
    </>
  )
}

export default Contact;