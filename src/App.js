import React , { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';


function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <Route path='/' exact component={Index} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>
  );
}

export default App;
