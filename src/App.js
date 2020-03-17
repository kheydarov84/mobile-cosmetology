import React from 'react';
import {Route, Link} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Cover from './components/cover/cover';
import Grid from './components/grid/grid';
import Footer from './components/footer/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="wrapper">  
      <Navbar />
      <Cover />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;

// 1 add bootstrap
// 2 import google fonts
// 3 add slider 
//   add photo carousel
// 4 add project Photos 
// 5 add grid elements gallery
// 6 add logo to navbar
// 7 design navbar
// 8 add testimonials
// 9 add google maps contacts page
// 10 add services  
// 11 Footer social media icons
