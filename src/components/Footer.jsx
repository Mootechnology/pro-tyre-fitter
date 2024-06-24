import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid py-y dark-color">
        <div className=" container mt-4 bg-dark">
          {/* columns */}
          <section className="row text-white">
            <div className="col-md-3 my-2">
              {/* <Link to="/" className="navbar-brand p-0">
                    <h2 className="m-0">Pro Tyre Fitters</h2>
                </Link>
                <p className='mt-4'>Pro Tyre Fitters is a platform that covers all tyre-related issues and provides the best possible solutions with trained professionals wherever you need them.</p> */}
              <Link to="/" className="p-0 m-0">
                <div className="ts-logo-footer container p-0 m-0">
                  <img src={logo} alt="logo" />
                </div>
              </Link>
            </div>
            {/* 2 */}
            <div className="col-md-3 my-2">
              <h4>Useful links</h4>
              <ul className="d-flex flex-column p-0">
                <Link to="/" className="footer-link">
                  Home
                </Link>
                <Link to="/about" className="footer-link">
                  About
                </Link>
                <Link to="/blogs" className="footer-link">
                  Blog
                </Link>
                <Link
                  to="/services/mobile-tyre-fitting"
                  className="footer-link"
                >
                  Services
                </Link>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </ul>
            </div>
            {/* 3 */}
            <div className="col-md-3 my-2">
              <h4>Useful links</h4>
              <ul className="d-flex flex-column p-0">
                <Link
                  to="/services/mobile-tyre-fitting"
                  className="footer-link"
                >
                  Mobile Tyre Fitting
                </Link>
                <Link to="/services/mobile-tyre-repair" className="footer-link">
                  Mobile Tyre Repair
                </Link>
                <Link to="/services/tyre-replacement" className="footer-link">
                  Tyre Replacement
                </Link>
                <Link to="/services/flat-tyre" className="footer-link">
                  Flat Tyres
                </Link>
                <Link to="/faqs" className="footer-link">
                  FAQs
                </Link>
                <Link to="/sitemap.xml" className="footer-link" target="_blank" rel="noopener noreferrer">Sitemap</Link>
              </ul>
            </div>
            {/* 4 */}
            <div className="col-md-3 my-2">
              {/* Contact Info */}
              <div className="d-flex flex-column align-items-start">
                <h4 className="mb-3">Contact Information</h4>
                <div className="mb-2">
                  <strong>Phone:</strong> <a href="tel: +442033939473" style={{textDecoration:'none', color: 'white'}}>+44 2035041723</a>
                </div>
                <div className="mb-3">
                  <strong>Email:</strong> <a href="mailto:info@protyrefitters.com" style={{textDecoration:'none', color: 'white'}}>info@protyrefitters.com</a>
                </div>
                <Link to="/contact" className="btn btn-success">
                  Contact Us
                </Link>
              </div>
            </div>
            {/* END */}
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
