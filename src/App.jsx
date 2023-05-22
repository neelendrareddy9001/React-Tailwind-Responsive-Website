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
      </Routes>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter />
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;
