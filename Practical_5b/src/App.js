import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Team from './components/Team';
import Message from './components/Message';
import Support from './components/Support';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home /> } key="" />
          <Route path='/products' exact element={ <Products /> } key="products" />
          <Route path='/team' exact element={ <Team /> } key="team" />
          <Route path='/message' exact element={ <Message /> } key="message" />
          <Route path='/support' exact element={ <Support /> } key="support" />
        </Routes>
      </Router>
    </>
  );
}

export default App;