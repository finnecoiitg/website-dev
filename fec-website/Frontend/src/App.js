import './App.css';
import LandingPage from './components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import Courses from './components/Courses';
// import About from './components/About';
// import Faqs from './components/Faqs';
// import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/courses" element={<Courses />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/faqs" element={<Faqs />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;