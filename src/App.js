import React, { Component } from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Social from './components/Social';
import Contact from './components/Contact';
import Cloud from './components/Cloud'
import Instagram from './components/Instagram'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './slide'
import Map from './components/Map';
import places from './components/places.json';

class App extends Component {
  render() {
    return (
      <div>
     <Nav />
     <Jumbotron />
     <About />
     <Skills />
     <Tools />
     <Cloud />
     <Social />
     <Map 
     center={{ lat: 25.0330, lng: 121.5654 }}
     zoom={2.7}
     places={places}
     />
     <Contact />
     <Instagram />


     </div>
    
    );
  }
}

export default App;
