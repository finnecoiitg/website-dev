import './App.css';
import Contactus from './components/home/contactus';
import Footer from "./components/home/footer";
import Navbar from "./components/home/navbar";
import Odometer from "./components/home/odometer";
import Teams from "./components/home/teams"
import Fin from "./components/pages/fin";
import { useEffect } from 'react';
import './components/pages/Course.css' ;
import Course from "./components/pages/Course.js";
import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
window.$ = window.jQuery=jquery;



function App() {

  useEffect(() => {
    const script=document.createElement("script");
    script.src="fin.js";
    document.body.appendChild(script);
   
     return () => {
       document.body.removeChild(script);
     }
   }, []);
 


  return (
    <>
    {/* <Navbar/> */}
    {/* <Odometer/> */}
    {/* <Teams/> */}
    {/* <Contactus/>  */}
    <Course/>
    <Footer/>
    {/* <Fin/> */}
  
    </>
  );
}

export default App;
