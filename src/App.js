import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Page from './Page.js';
// import Navbar from './Navbar';
import Navlink from './Navlink';
import Details from './Details.js';
const App = () => {
  return (
    <div>
   
    <Navlink />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='About' element={<About />}/>
    <Route path='*' element={<Page />}/>
    <Route path='Details' element={<Details />}/>
    </Routes>
    </div>
  );
}

export default App;
