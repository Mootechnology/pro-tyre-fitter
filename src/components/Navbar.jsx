import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink, Link, useLocation } from "react-router-dom";
import Topheader from "./Topheader";
import logo from "../assets/images/logo2.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";

function Navbar({ activeClassName, ...props }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrollBackground, setScrollBackground] = useState(false); // State to track scroll background color
  const [showTopHeader, setShowTopHeader] = useState(true); // State to track if Topheader should be displayed
  const [navMarginTop, setNavMarginTop] = useState(0); // State to control margin-top for nav
  const location = useLocation();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const [menuVisibility, setMenuVisibility] = useState({
    hertfordshire: false,
    london: false,
  });

  const toggleMenu = (menu) => {
    setMenuVisibility((prevVisibility) => ({
      ...prevVisibility,
      [menu]: !prevVisibility[menu],
    }));
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // Listen for changes to the pathname

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollThreshold = 50;
    if (window.scrollY > scrollThreshold) {
      setScrollBackground(true);
      setShowTopHeader(false);
      setNavMarginTop(-50);
    } else {
      setScrollBackground(false);
      setShowTopHeader(true);
      setNavMarginTop(0);
    }
  };

  const screenWidth = window.innerWidth;

  // Conditionally render the appropriate navbar based on screen width
  if (screenWidth < 992) {
    return (
      <>
        <Helmet>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </Helmet>
        <Topheader />

        <div className="container-fluid main-nav-bar p-0 mx-auto mobile-navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 px-lg-5 py-2 py-lg-0">
            <section className="ts-logo-container">
              <Link to="/" className="p-0 m-0">
                <div className="ts-logo-mobile container p-0 m-0">
                  <img src={logo} alt="logo" />
                </div>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                onClick={handleNavCollapse}
                aria-expanded={!isNavCollapsed}
                style={{ border: "none", outline: "none" }}
              >
                <span className="fa fa-bars"></span>
              </button>
            </section>

            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto py-0">
                <NavLink
                  to="/"
                  className="nav-item nav-link"
                  activeClassName="active"
                  exact
                  onClick={handleNavCollapse}
                >
                  Home
                </NavLink>

                <div className="nav-item dropdown">
                  <button
                    className="btn dropdown-toggle text-white px-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </button>
                  <div className="dropdown-menu m-0">
                    <Link
                      to="/services/mobile-tyre-fitting"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Mobile Tyre Fitting
                    </Link>
                    <Link
                      to="/services/mobile-tyre-repair"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Mobile Tyre Repair
                    </Link>
                    <Link
                      to="/services/tyre-replacement"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Tyre Replacement
                    </Link>
                    <Link
                      to="/services/flat-tyre"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Flat Tyre
                    </Link>
                    <Link
                      to="/services/burst-tyre"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Burst Tyre
                    </Link>
                    <Link
                      to="/services/part-worn-tyre"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Part Worn Tyre
                    </Link>
                    <Link
                      to="/services/jumpstart"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Jumpstart
                    </Link>
                    <Link
                      to="/services/locknut-wheel-removal"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Locknut Wheel Removal
                    </Link>
                    <Link
                      to="/services/mobile-breakdown"
                      className="dropdown-item"
                      onClick={handleNavCollapse}
                    >
                      Mobile Breakdown
                    </Link>
                  </div>
                </div>

                {/* Areas */}
                <div className="nav-item dropdown">
                  <button
                    className="btn dropdown-toggle text-white px-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Areas
                  </button>
                  <div className="dropdown-menu m-0">
                    <Link to="/areas/st-albans" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - St-Albans</Link>
                    <Link to="/areas/luton" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Luton</Link>
                    <Link to="/areas/harlow" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Harlow</Link>
                    <Link to="/areas/hatfield" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Hatfield</Link>
                    <Link to="/areas/potters-bar" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Potters Bar</Link>
                    <Link to="/areas/hemelhempstead" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Hemel Hempstead</Link>
                    <Link to="/areas/cheshunt" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Cheshunt</Link>
                    <Link to="/areas/codicote" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Codicote</Link>
                    <Link to="/areas/londoncolney" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - London Colney</Link>
                    <Link to="/areas/kingslangley" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Kings Langley</Link>
                    <Link to="/areas/wheathampstead" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Wheathampstead</Link>
                    <Link to="/areas/abbotslangley" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Abbots Langley</Link>
                    <Link to="/areas/broxbourne" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Broxbourne</Link>
                    <Link to="/areas/borehamwood" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Borehamwood</Link>
                    <Link to="/areas/southmimms" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - South Mimms</Link>
                    <Link to="/areas/cuffley" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Cuffley</Link>
                    <Link to="/areas/ware" className="dropdown-item" onClick={handleNavCollapse}>Hertfordshire - Ware</Link>

                    <Link to="/areas/ilford" className="dropdown-item" onClick={handleNavCollapse}>London - Ilford</Link>
                    <Link to="/areas/edmonton" className="dropdown-item" onClick={handleNavCollapse}>London - Edmonton</Link>
                    <Link to="/areas/wangsted" className="dropdown-item" onClick={handleNavCollapse}>London - Wangsted</Link>
                    <Link to="/areas/chingford" className="dropdown-item" onClick={handleNavCollapse}>London - Chingford</Link>
                    <Link to="/areas/woodford-green" className="dropdown-item" onClick={handleNavCollapse}>London - Woodford Green</Link>
                    <Link to="/areas/barnet" className="dropdown-item" onClick={handleNavCollapse}>London - Barnet</Link>
                    <Link to="/areas/woodgreen" className="dropdown-item" onClick={handleNavCollapse}>London - Woodgreen</Link>
                    <Link to="/areas/hoddesdon" className="dropdown-item" onClick={handleNavCollapse}>London - Hoddesdon</Link>
                  </div>
                </div>
                {/* Areas */}

                <NavLink
                  to="/about"
                  className="nav-item nav-link"
                  activeClassName="active"
                  onClick={handleNavCollapse}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/faqs"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Faq
                </NavLink>
                <NavLink
                  to="/blogs"
                  className="nav-item nav-link"
                  activeClassName="active"
                  onClick={handleNavCollapse}
                >
                  Blog
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  } else {
    return (
      <>
        {showTopHeader && <Topheader />}

        <div className="container-fluid main-nav-bar p-0">
          <nav
            className="navbar navbar-expand-lg navbar-light py-0"
            style={{
              backgroundColor: scrollBackground
                ? "rgb(8, 8, 8)"
                : "rgb(70,69,69)",
              padding: "0.5rem 2rem",
              marginTop: `${navMarginTop}px`,
            }}
          >
            <div className="container desktop-navbar justify-content-center">
              <div className="d-flex justify-content-center w-75">
                <div className="d-flex align-items-center">
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                      <NavLink
                        to="/"
                        className="nav-item nav-link"
                        exact activeClassName="active"
                      >
                        Home
                      </NavLink>
                      <div className="nav-item dropdown">
                        <Link
                          to="/services/mobile-tyre-fitting"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Services
                        </Link>
                        <div className="dropdown-menu new-dropdown-menu m-0">
                          <div className="row">
                            <div className="col">
                              <Link
                                to="/services/mobile-tyre-fitting"
                                className="dropdown-item"
                              >
                                <img src={six} className="tyre-icons" alt="1" />{" "}
                                Mobile Tyre Fitting
                              </Link>
                              <Link
                                to="/services/mobile-tyre-repair"
                                className="dropdown-item"
                              >
                                <img src={two} className="tyre-icons" alt="1" />{" "}
                                Mobile Tyre Repair
                              </Link>
                              <Link
                                to="/services/tyre-replacement"
                                className="dropdown-item"
                              >
                                <img
                                  src={three}
                                  className="tyre-icons"
                                  alt="1"
                                />{" "}
                                Tyre Replacement
                              </Link>
                              <Link
                                to="/services/flat-tyre"
                                className="dropdown-item"
                              >
                                <img
                                  src={four}
                                  className="tyre-icons"
                                  alt="1"
                                />{" "}
                                Flat Tyre
                              </Link>
                            </div>
                            <div className="col">
                              <Link
                                to="/services/burst-tyre"
                                className="dropdown-item"
                              >
                                <img
                                  src={five}
                                  className="tyre-icons"
                                  alt="1"
                                />{" "}
                                Burst Tyre
                              </Link>
                              <Link
                                to="/services/part-worn-tyre"
                                className="dropdown-item"
                              >
                                <img src={six} className="tyre-icons" alt="1" />{" "}
                                Part Worn Tyre
                              </Link>
                              <Link
                                to="/services/jumpstart"
                                className="dropdown-item"
                              >
                                <img
                                  src={four}
                                  className="tyre-icons"
                                  alt="1"
                                />{" "}
                                Jumpstart
                              </Link>
                              <Link
                                to="/services/locknut-wheel-removal"
                                className="dropdown-item"
                              >
                                <img
                                  src={five}
                                  className="tyre-icons"
                                  alt="1"
                                />{" "}
                                Locknut Wheel Removal
                              </Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <Link
                                to="/services/mobile-breakdown"
                                className="dropdown-item"
                              >
                                <img src={six} className="tyre-icons" alt="1" />{" "}
                                Mobile Breakdown
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Areas */}
                      <div className="nav-item dropdown">
                        <button
                          className="nav-link dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Areas
                        </button>
                        <div className="dropdown-menu m-0">
                          {/* Dropend */}
                          <div className="btn-group px-4 dropdown-hover">
                            <button className="btn harea-btn">
                              <div className="d-flex justify-content-center align-items-center">
                                Hertfordshire <small><i className="fa-solid fa-greater-than fa-3xs"></i></small>
                              </div>
                            </button>
                            <ul className="harea-menu mt-4 rounded">
                              <Link to="/areas/st-albans" className="dropdown-item">St-Albans</Link>
                              <Link to="/areas/luton" className="dropdown-item">Luton</Link>
                              <Link to="/areas/harlow" className="dropdown-item">Harlow</Link>
                              <Link to="/areas/hatfield" className="dropdown-item">Hatfield</Link>
                              <Link to="/areas/potters-bar" className="dropdown-item">Potters Bar</Link>
                              <Link to="/areas/hemelhempstead" className="dropdown-item">Hemel Hempstead</Link>
                              <Link to="/areas/cheshunt" className="dropdown-item">Cheshunt</Link>
                              <Link to="/areas/codicote" className="dropdown-item">Codicote</Link>
                              <Link to="/areas/londoncolney" className="dropdown-item">London Colney</Link>
                              <Link to="/areas/kingslangley" className="dropdown-item">Kings Langley</Link>
                              <Link to="/areas/wheathampstead" className="dropdown-item">Wheathampstead</Link>
                              <Link to="/areas/abbotslangley" className="dropdown-item">Abbots Langley</Link>
                              <Link to="/areas/broxbourne" className="dropdown-item">Broxbourne</Link>
                              <Link to="/areas/borehamwood" className="dropdown-item">Borehamwood</Link>
                              <Link to="/areas/southmimms" className="dropdown-item">South Mimms</Link>
                              <Link to="/areas/cuffley" className="dropdown-item">Cuffley</Link>
                              <Link to="/areas/ware" className="dropdown-item">Ware</Link>
                            </ul>
                          </div>
                          {/* Dropend */}

                          {/* Dropend */}
                          <div className="btn-group px-4 dropdown-hover">
                            <button className="btn harea-btn">
                              <div className="d-flex justify-content-center align-items-center">
                                London <small><i className="fa-solid fa-greater-than fa-2xs"></i></small>
                              </div>
                            </button>
                            <ul className="harea-menu mt-4 rounded">
                              <Link to="/areas/ilford" className="dropdown-item">Ilford</Link>
                              <Link to="/areas/edmonton" className="dropdown-item">Edmonton</Link>
                              <Link to="/areas/wangsted" className="dropdown-item">Wangsted</Link>
                              <Link to="/areas/chingford" className="dropdown-item">Chingford</Link>
                              <Link to="/areas/woodford-green" className="dropdown-item">Woodford Green</Link>
                              <Link to="/areas/barnet" className="dropdown-item">Barnet</Link>
                              <Link to="/areas/woodgreen" className="dropdown-item">Woodgreen</Link>
                              <Link to="/areas/hoddesdon" className="dropdown-item">Hoddesdon</Link>
                            </ul>
                          </div>
                          {/* Dropend */}
                        </div>
                      </div>

                      {/* Areas */}
                      <NavLink
                        to="/blogs"
                        className="nav-item nav-link"
                        activeClassName="active"
                      >
                        Blog
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="container-xxxl">
                  <Link to="/">
                    <div className="ts-logo p-0 m-0  site_logo">
                      <img src={logo} alt="logo" />
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="navbar-nav ms-auto py-0">
                    <NavLink
                      to="/about"
                      className="nav-item nav-link"
                      activeClassName="active"
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/contact"
                      className="nav-item nav-link"
                      activeClassName="active"
                    >
                      Contact
                    </NavLink>
                    <NavLink
                      to="/faqs"
                      className="nav-item nav-link"
                      activeClassName="active"
                    >
                      Faq
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
