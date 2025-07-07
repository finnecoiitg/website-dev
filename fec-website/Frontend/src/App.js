import './App.css';
import LandingPage from './components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Courses from './components/Courses';
import DiscoverPotential from './components/DiscoverPotential';
// import About from './components/About';
// import Faqs from './components/Faqs';
// import Contact from './components/Contact';
import IntroductoryOptions from './components/IntroductoryOptions';

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/courses" element={<Courses />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/faqs" element={<Faqs />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/options" element={<IntroductoryOptions />} />
    </Routes>
    </>
  );
}

export default App;
