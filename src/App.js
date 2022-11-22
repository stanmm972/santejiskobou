import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import {Container} from 'react-bootstrap';
import Apropos from './components/Apropos';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <main>
        <Container>
          <Apropos/>
        </Container>
      </main>
    </>
  );
}

export default App;
