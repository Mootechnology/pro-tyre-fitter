import React, { useEffect } from "react";
// import CarouselPage from "./components/CarouselPage";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./components/Cards";
import Testimonial from "./components/Testimonial";
import Banner from "./components/Banner";
import HowSection from "./components/HowSection";
import CTA from "./components/CTA";
import imgOne from "./assets/images/home/Experience our excellent mobile tyre fitting in London.png";
import imgTwo from "./assets/images/home/Simplify your journey with Mobile tyre fitting.png";
import imgThree from "./assets/images/home/Nimble mobile tyre service near me.png";
import imgFour from "./assets/images/home/Our mission.png";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useCanonical } from "./canonical";

const Home = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/");
  }, [setCanonicalUrl]);

  const location = useLocation();
  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/") {
      document.title =
        "London Mobile Tyre Fitting | 24-Hour Mobile Tyre Service";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "London Mobile Tyre Fitting | 24-Hour Mobile Tyre Service"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Expert mobile tyre fitting in London. Convenient, reliable, and efficient service. Get back on the road ASAP. Call us now!"
        );
      }
    }
  }, [location]);
  return (
    <>
    <Helmet>
        <title id="meta-title">London Mobile Tyre Fitting | 24-Hour Mobile Tyre Service</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/" />
        <meta name="description" id="meta-description" content="Expert mobile tyre fitting in London. Convenient, reliable, and efficient service. Get back on the road ASAP. Call us now!"/>
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="ptf-hero fix-img">
        <div className="container">
          <h1 className="text-white">On-Demand Mobile Tyre Service: Anytime, Anywhere!</h1>
          <h4 className="text-white" style={{textShadow: "1px -2px 10px rgba(0,0,0,0.6)"}}>Best professionals serve you at your location</h4>
          <div className="home-hero-icons">
                <div className="text-white"><i className="fa-solid fa-circle-check"></i> &nbsp; Mobile Tyre Fitting</div>
                <div className="text-white"><i className="fa-solid fa-circle-check"></i> &nbsp; Mobile Tyre Replacement</div>
                <div className="text-white"><i className="fa-solid fa-circle-check"></i> &nbsp; Mobile Tyre Repair</div>
                {/* <div className="text-white"><i className="fa-solid fa-circle-check"></i> &nbsp; Breakdown</div>
                <div className="text-white"><i className="fa-solid fa-circle-check"></i> &nbsp; Flat Tyres</div> */}
            </div>
            <a href="tel: +442033939473" class="btn btn-success btn-md btn-pill mt-2">Give Us A Call</a>
        </div>
      </section>

      <section className="container">
        <Row className="mt-5 mobile-margin">
          <Col md={6} className="order-2">
            <h2 className="text-success">
              Our excellent mobile tyre fitting in London
            </h2>
            <p>
              Welcome to the hub of the best tyres and tyre services that solve
              all your tyre-related problems. Pro Tyre Fitters is a platform
              that provides you with the amazing tyre-related service to ensure
              your journey is smooth and easy. Tyre-related issues can occur
              anywhere at any time that can disrupt your travel schedule. It
              disrupts your daily travel, office work schedule, and even travel
              for a specific reason. This causes you to arrive late at your
              destination or miss an essential part of the event.
            </p>
          </Col>
          <Col md={6} className="order-1 d-flex justify-content-center">
            <img src={imgOne} alt="Mission" className="rounded img-fluid" />
          </Col>
        </Row>
      </section>

      <Container>
        <Row style={{ marginTop: "4rem" }}>
          <Col md={6}>
            <h2 className="text-success">
              Simplify your journey with Mobile tyre fitting
            </h2>
            <p>
              Mobile Tyre Fitting London manages a wide range of tyre-related
              issues, covering emergencies and providing you with services from
              <Link to='services/mobile-tyre-repair'> tyre repairs</Link> to <Link to='services/tyre-replacement'> tyre replacements</Link>. We provide <Link to='services/mobile-tyre-fitting'> mobile tyre fitting </Link>
              services at your designated location for your convenience. Our
              trained professionals know all tyre-related problems, handle
              emergencies easily and know possible solutions. They ensure your
              safety first and then implement the best possible solution to
              prevent the problem from happening again.
            </p>
          </Col>
          <Col md={6} className="order-small-1 d-flex justify-content-center">
            <img src={imgTwo} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      <section className="container">
        <Row className="mt-5">
          <Col md={6} className="order-2">
            <h2 className="text-success">Nimble mobile tyre service near me</h2>
            <p>
              A tyre-related problem can lead to unpleasant incidents that cause
              trouble for you and your vehicle. To save you from the damage, we
              offer you seamless service of a mobile tyre fitting near me that
              serves you at your directed location. Our professionals are
              available 24/7 to serve you on a single call, no matter where you
              are and when you need help. They reach the location as per your
              instruction without time and space restrictions.
            </p>
          </Col>
          <Col md={6} className="order-1 d-flex justify-content-center">
            <img src={imgThree} alt="Mission" className="rounded img-fluid" />
          </Col>
        </Row>
      </section>

      <div className="mt-4">
        <div className="row text-center justify-content-center">
          <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
            <div className="section-title">
              <h2 className="sec-title">Services</h2>
            </div>
            <p className="text-center">
              Ensure your journey with our seemless services
            </p>
          </div>
        </div>
      </div>

      <section className="container">
        <Cards />
      </section>

      <section className="container">
        <Row className="mt-5">
          <Col md={6} className="order-2">
            <h2 className="text-success">Our Mission</h2>
            <p>
              We aim to provide you with the best services at the most resonable
              price that reduces your mental, physical and financial burden. We
              bring the garage to you with all the necessary equipment and
              toolkits to save you from the physical burden of taking the car to
              the garage. Our professionals arrive at your designated location
              for service and fix your tyre problem to get you back on the
              journey faster. We aim to make your journey safe, convenient and
              memorable for you. A sudden tyre problem also burdens your pocket
              but we take care of your finances and offer you the best
              affordable services at an affordable price.
            </p>
          </Col>
          <Col md={6} className="order-1 d-flex justify-content-center">
            <img src={imgFour} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>
      </section>
      
      <Testimonial />

      <HowSection />
      <CTA ctaText="Share your tyre-related issues with our experts. Our professionals reach your location no matter where you are, and when you need help, they help you at your home, workplace and roadside. Call us today to tackle your tyre problem and solve it with the best possible solution." />
      <Banner />
    </>
  );
};

export default Home;