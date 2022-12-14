import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import {Container} from 'react-bootstrap';
import Apropos from './components/Apropos';
import Mission from './components/Mission';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <main>
        <Container>
          <Apropos/>
        </Container>
        <Mission/>
        <Container>
            <Services/>
        </Container>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
