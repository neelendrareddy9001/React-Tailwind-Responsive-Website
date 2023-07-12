import React from 'react';
//import Router 
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

import AnimateRoutes from './components/AnimateRoutes';

function App () {
  return (
    <>
      <Router>
        <Navbar/>
        <AnimateRoutes/>
      </Router>
    </>
  )
}

export default App;
