import React from 'react';

import Homepage from './components/Homepage/Homepage'
import Header from './components/Header'
import Footer from './components/Footer/'

import './App.css';
import './components/Header/Header.css';
import './components/Homepage/Homepage.css';
import'./components/Footer/Footer.css';


function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Homepage/>
      <Footer></Footer>
    </div>
  );
}

export default App;
