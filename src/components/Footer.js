import React from 'react'
import './footer.css';
import logo from "../assets/jiskobou.png";
import {Nav} from 'react-bootstrap';


const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='bg-light pt-5 pb-4'>
      <div className='container text-center text-md-left'>
        <div className='row text-center text-md-left'>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <img src={logo} id="logo1" alt="logo" />
          </div>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Pour nous joindre</h5>
            <Nav.Link href='tel:+1-438-337-3037'><i class="fa-solid fa-phone-volume"> (438)337-3037</i></Nav.Link>
            <Nav.Link href='mailto:info@santejiskobou.com'><i class="fa-solid fa-envelope"> info@santejiskobou.com</i></Nav.Link>
            <Nav.Link href="#"className='icon'><i class="fa-brands fa-facebook"></i></Nav.Link>
            <Nav.Link href="#" className='icon'><i class="fa-brands fa-instagram"></i></Nav.Link>
            <p>Copyright@{getCurrentYear()} | Developed by FredMM</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer