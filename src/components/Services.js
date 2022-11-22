import React from 'react'
import {Card, CardGroup, Row, Col, Button, Nav} from 'react-bootstrap';

import Pdf from "../documents/formulaire_d_emploi.pdf";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import ser4 from "../assets/ser4.png";
import ser5 from "../assets/ser5.png";

const Services = () => {
  return (
    <>
        <section>
            <div className='text-center py-5'>
                <h1>Nos services</h1>
            </div>
            <div>
                <Row className='py-5'>
                    <Col style={{ width: 300, height: 100 }} md={2} sm={12}>
                        
                            <img src={ser1} alt="service" />
                        
                    </Col>
                    <Col style={{ width: 300, height: 100 }} md={2} sm={12}>
                        
                            <img src={ser2} alt="service" />
                        
                    </Col>
                    <Col style={{ width: 300, height: 100 }} md={2} sm={12}>
                        
                            <img src={ser3} alt="service" />
                        
                    </Col>
                    <Col style={{ width: 300, height: 100 }} md={2} sm={12}>
                        
                            <img src={ser4} alt="service" />
                        
                    </Col>
                    <Col style={{ width: 300, height: 100 }} md={2} sm={12}>
                        
                            <img src={ser5} alt="service" />
                        
                    </Col>
                </Row>
                <Row>
                    
                        <h4 className='py-5 text-center'>
                            Notre équipe est composée de ressources triées sur le volet afin
                            de satisfaire aux plus hauts standards de l'industrie. <br />
                            Parmi les ressources disponibles avec notre agence afin de
                            supporter adéquatement vos équipes déjà en place.
                        </h4>
                    
                </Row>           
                <Row>               
                        <CardGroup className='text-center'>
                                <Card>
                                    <Card.Img variant="top" src={photo3} className='img'/>
                                    <Card.Body>
                                    <Card.Title>Personnel de qualité</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={photo4} className='img'/>
                                    <Card.Body>
                                    <Card.Title>Professionnalisme</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={photo5} className='img'/>
                                    <Card.Body>
                                    <Card.Title>Personnel de qualité</Card.Title>
                                    </Card.Body>
                                </Card>
                            </CardGroup>   
                    </Row> 
            </div>
            </section>
            <section>
            <div>
                <div className='text-center py-5'>
                    <h1>Nos emplois</h1>
                </div>
                <Row>
                    <Col>
                        
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Header>Débutez une carrière chez Santé Jiskobou</Card.Header>
                                <Card.Body>
                                <Card.Title>Postulez dès maintenant</Card.Title>
                                <Card.Text>
                                    Vous pouvez remplir notre formulaire d'emploi et nous le renvoyer
                                    par courriel à: 
                                    <Nav.Link href="mailto:rh@santejiskobou.com">rh@santejiskobou.com</Nav.Link>
                                    <br/>
                                    <p>
                                        <a href="tel:+1-438-337-3037"><i class="fa-solid fa-phone-volume"> (438)337-3037</i></a>
                                    </p>
                                    <Nav.Link href={Pdf} target="_blank" rel="noreferrer"><i class="fa-regular fa-file"></i> Document à télécharger</Nav.Link>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        
                    </Col>
                    <Col>
                        
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Header className='text-center'>Vous êtes déjà un membre</Card.Header>
                                <Card.Body>
                                <Card.Text className='text-center'>
                                    <Button variant="Light"><Nav.Link href="https://jiskobou-ws.herokuapp.com" target="_blank" rel="noreferrer">Cliquez ici</Nav.Link></Button>            
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        
                    </Col>
                </Row>
            </div>
        </section>
    </>
  )
}

export default Services