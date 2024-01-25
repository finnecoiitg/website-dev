import React from 'react';
import './App.css'
import Carousel from './components/Carousel';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "./components/java.js";
    script.type="text/babel";
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);   
  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

export default App;
