import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import FAQS from './faqs'
import BlogPage from './blogs';
import ContactPage from './Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import MobileTyreFitting from './MobileTyreFitting';
import MobileTyreRepair from './MobileTyreRepair';
import TyreReplacement from './TyreReplacement';
import FlatTyre from './FlatTyre';
import BurstTyre from './BurstTyre';
import PartWornTyre from './PartWornTyre';
import JumpStart from './JumpStart';
import LocknutWheel from './LocknutWheel';
import MobileBreakdown from './MobileBreakdown';
import RegisterPage from './register';
// import aos from 'aos';
// import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";

const App = () => {

  return (
    <>
    <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Helmet>
    
    <ScrollToTop smooth color="#18bd9d" />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/faqs" element={<FAQS/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/services/mobile-tyre-fitting" element={<MobileTyreFitting/>} />
        <Route path="/services/mobile-tyre-repair" element={<MobileTyreRepair/>} />
        <Route path="/services/tyre-replacement" element={<TyreReplacement/>} />
        <Route path="/services/flat-tyre" element={<FlatTyre/>} />
        <Route path="/services/burst-tyre" element={<BurstTyre/>} />
        <Route path="/services/part-worn-tyre" element={<PartWornTyre/>} />
        <Route path="/services/jumpstart" element={<JumpStart/>} />
        <Route path="/services/locknut-wheel-removal" element={<LocknutWheel/>} />
        <Route path="/services/mobile-breakdown" element={<MobileBreakdown/>} />
        <Route path="/services/register" element={<RegisterPage/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}
export default App