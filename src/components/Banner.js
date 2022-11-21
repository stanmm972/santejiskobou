import React from 'react';
import {Carousel} from 'react-bootstrap';
import home from "../assets/home.jpg";
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import './banner.css';

const Banner = () => {
  return (
    <>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 home"
          src={p2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bienvenue à Jiskobou</h3>
          <p>Le paradigme des soins.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home"
          src={p1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nous sommes là pour vous aider</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 home"
          src={home}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Une équipe de talent</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Banner