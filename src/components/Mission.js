import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import Slide from 'react-reveal/Fade';
import pic8 from "../assets/pic8.jpg";
import "./mission.css";

const Mission = () => {
  return (
    <section className='mission' id='service'>
        <Container>
        <div className='text-center py-5'>
                <h1>Notre mission</h1>
            </div>
            <Row>
                <Col sm={8} className='align-self-center'>
                  <Slide left>
                        <blockquote class="blockquote py-5 text-muted">
                                <p class="mb-0">
                                    " Les établissements québécois de la santé travaillent fort, et la
                                    demande est toujours grandissante. Bien que vous preniez le temps
                                    de recruter et de former votre personnel, il arrivera que vous
                                    ayez besoin de renfort ou de remplacement, mais le temps et
                                    l’énergie requis peuvent être mieux placés ailleurs, dans votre
                                    contexte opérationnel. <br />
                                    Nous avons un volet spécialisé dans le placement de personnel en
                                    soins de santé. Grâce à une base de données de personnel qualifiée
                                    et soigneusement compilée, nous soutenons le recrutement
                                    occasionnel pour vous. <br />
                                    C’est ainsi que nous proposons des professionnels doués, qui sont
                                    capable d’intervenir rapidement pour assurer la continuité des
                                    services que vous offrez à votre clientèle. service de
                                    réadaptation et assistance médicale aux personnes âgées à
                                    domicile. Nous savons pertinemment que chaque établissement est
                                    organisé de manière différente, que chaque entreprise fonctionne
                                    selon ses propres particularités et que chaque individu a des
                                    besoins spécifiques.
                                    <br />
                                    Nous nous faisons donc un devoir de nous adapter aux divers
                                    milieux et organisations sollicitant nos services afin que nos
                                    employés s’intègrent le plus rapidement possible au cadre de leurs
                                    assignations. Choisir Jiskobou, c’est miser sur l’excellence et la
                                    tranquillité d’esprit! "
                                </p>
                            </blockquote>
                    </Slide>
                </Col>
                <Col>
                    <Slide sm={4} right>
                        <img src={pic8} alt="logo" className='rounded'/>
                    </Slide>   
                </Col>
            </Row> 
            </Container>
    </section>
  )
}

export default Mission