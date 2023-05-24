import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App () {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Navbar/>}/>
        <Route path='/hero' exact element={<Hero/>}/>
        <Route path='/analytics' exact element={<Analytics/>}/>
        <Route path='/newsletter' exact element={<Newsletter/>}/>
        <Route path='/cards' exact element={<Cards/>}/>
        <Route path='/footer' exact element={<Footer/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
