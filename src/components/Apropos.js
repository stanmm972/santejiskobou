import React from 'react'
import {Col, Row, Alert} from 'react-bootstrap';
import Slide from 'react-reveal/Fade';
import Fade from 'react-reveal/Fade';
import './apropos.css';
import pic6 from "../assets/pic6.jpg";

const Apropos = () => {
  return (
    <>
        <section id='apropos'>
            <Row>
                <Col>
                    <Slide left>
                        <img className="d-block w-100 rounded"
                        src={pic6}
                        alt="Second slide"
                        />
                    </Slide>
                </Col>
                <Col className='align-self-center'>
                    <Slide right>
                        <h2>
                            Vous ferez chez nous, le bon choix pour le placement de personnel en
                            soins de santé.
                        </h2>
                        <blockquote class="blockquote py-5">
                            <p class="mb-0">
                                
                            </p>
                        </blockquote>
                    </Slide>
                </Col>
            </Row>
            <Row className='py-5'>
                <Fade bottom>
                    <Col>
                        <Alert variant="secondary">
                        <Alert.Heading>Bienvenue chez Santé Jiskobou</Alert.Heading>
                        <p>
                                    Nous sommes une équipe motivée qui à pour mission d’offrir un
                                    service hors-pair aux hôpitaux, CHSLD, entreprises et particuliers
                                    sur tout l’île de Montréal et ses environs, en vous déléguant un de
                                    nos associés dûment qualifiés et expérimentés.  
                        </p>      
                        </Alert>
                    </Col>
                </Fade>
            </Row>
        </section>
    </>
  )
}

export default Apropos