import React from 'react';
import './App.css';

// Import your components
// import Navbar from './components/Navbar';
import Top from './components/Top'
import Mycarousel from './components/Mycarousel' 
import Bottom from './components/Bottom'
import GreenBox1 from './components/DiscoverPotential'
import DropDown from './components/dropdown';
// import Footer from './components/Footer';
import ellipse1 from './components/images/Ellipse 35.svg'
import ellipse3 from './components/images/Ellipse 31.png'

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      
       */}
       <Top />
       <DropDown />
      <Mycarousel />
      <Bottom />
      <GreenBox1 />
      <img src={ellipse1} className='ellipse1' />
      <img src={ellipse1} className='ellipse2' />
      <img src={ellipse3} className='ellipse3' />
      <img src={ellipse3} className='ellipse3' style={{top: '200vw', left: '-2vw'}}/>
      <img src={ellipse3} className='ellipse3' style={{top: '230vw'}}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;