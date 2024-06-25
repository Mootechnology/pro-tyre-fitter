import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import About1 from "./assets/images/about1.png";
import About2 from "./assets/images/about2.png";
import About3 from "./assets/images/about3.png";
import BG from "./assets/images/banners/bg.png";
import { Helmet } from "react-helmet";
import { useCanonical } from "./canonical";

function About() {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/about");
  }, [setCanonicalUrl]);

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/about") {
      document.title = "Expert Tyre Services in London - Tyre Fitting, Repair & More";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Expert Tyre Services in London - Tyre Fitting, Repair & More"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Discover our comprehensive tyre services in London, including fitting, repair, replacement, and more. Trust our expertise for all your tyre needs."
        );
      }
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title id="meta-title">Expert Tyre Services in London - Tyre Fitting, Repair & More</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/about" />
        <meta name="description" id="meta-description" content="Discover our comprehensive tyre services in London, including fitting, repair, replacement, and more. Trust our expertise for all your tyre needs."/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Banner Section */}
      <header className="headerStyle about-header" style={{ backgroundImage: `url(${BG})` }}>
        <h1>About Us</h1>
        <h5>
          <Link to="/" className="linkStyle">
            <i class="fa-solid fa-house"></i> Home{" "}
          </Link>{" "}
          | About
        </h5>
      </header>
      {/* Main Content */}
      <div className="mt-4">
        <Row className="text-center justify-content-center">
          <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
            <div className="section-title">
              <h2 className="sec-title">Choose us as your travel companion</h2>
            </div>
          </div>
        </Row>
        <div className="para-width mx-auto">
          <p>
            Pro Tyre Fitters is a platform that provides you with the best
            services for your tyres that make your journey easier or more
            convenient. We understand that a weak and damaged vehicle becomes a
            safety issue for you throughout the journey. To ensure your safety,
            we provide you with the best professionals who maintain your vehicle
            for the daily commute and resolve tyre-related issues. Our
            professionals are highly trained to handle emergencies, tackle the
            cause of the problem and resolve it permanently. They are
            well-trained in their service and fully aware of all tyre-related
            issues and their solutions.
          </p>
        </div>
      </div>

      <Container className="py-5">
        <Row style={{ marginTop: "2.5rem" }}>
          <Col md={6}>
            <h2 className="text-success">We are your vehicle caretaker</h2>
            <p>
              We are available 24/7 to serve you beyond your expectations. Our
              experts serve you at your designated location to save you from the
              physical stress of taking the car to the garage. They immediately
              reach the spot, control the situation, reduce your stress and
              solve the problem quickly. They serve you at home to keep you
              stress-free, fix tyre problems at the office to save your work
              schedule from disruption, and save you on the roadside. Our
              experts save you time, energy and money by providing excellent
              services at your desired location.
            </p>
          </Col>
          <Col md={6} className="order-small-1 d-flex justify-content-center">
            <img src={About1} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>

        {/* <Cards/> */}

        <Row style={{ marginTop: "2.5rem" }}>
          <Col md={6} className="order-2">
            <h2 className="text-success">
              Our commitment to serve you regardless of time and space{" "}
            </h2>
            <p>
              We aim to be a part of your journey and provide impeccable service
              that ensures your journey is smooth and easy. Our professionals
              are ready to handle any tyre-related problem, from flat to burst
              tyres; they tackle all issues efficiently. They are always
              prepared to help you no matter the time. They reach the spot even
              in the middle of the night and in bad weather. They always come
              with a complete tool kit and essential tyre accessories. They
              provide a service that helps you resume your journey to your
              destination and make it more convenient.
            </p>
          </Col>
          <Col md={6} className="order-1 d-flex justify-content-center">
            <img src={About2} alt="Mission" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <h2 className="text-success">Why Choose Us?</h2>
            <ul>
              <li>Available 24/7 to serve you.</li>
              <li>A well-trained staff serves you.</li>
              <li>We offer you affordable services.</li>
              <li>Respond to your issue promptly.</li>
              <li>Serve at your designated location.</li>
              <li>Save you on the side of the road.</li>
              <li>Serve at your doorstep or workplace.</li>
              <li>Save your time, energy and money.</li>
              <li>Ensure the safety of you and your vehicle.</li>
              <li>Service specialists manage emergencies.</li>
            </ul>
          </Col>
          <Col md={6}>
            <img
              src={About3}
              alt="Placeholder Image"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;