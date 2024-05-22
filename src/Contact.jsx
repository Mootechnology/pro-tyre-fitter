import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ContactUsBar from "./components/ContactUsBar";
import BG from "./assets/images/contact-bg.png";
import Contact1 from "./assets/images/contact1.png";
import { Helmet } from "react-helmet";

function ContactPage() {
  const [data, setData] = useState({});

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/contact") {
      document.title = "Contact Us - Expert Tyre Services in London";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Contact Us - Expert Tyre Services in London"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Get in touch with us for professional tyre services in London. Whether it's fitting, repair, replacement, or more, we've got you covered. Reach out today!"
        );
      }
    }
  }, [location]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://roundtyres.co.uk/api/mail/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if required, such as authorization tokens
        },
        body: JSON.stringify({ data: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`Failed to store data. Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const responseData = await response.json();
        setData(responseData);
      } else {
        throw new Error("Response is not in JSON format.");
      }
    } catch (error) {
      console.error("Error storing data:", error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title id="meta-title">Contact Us - Expert Tyre Services in London</title>
        <meta
          name="description"
          id="meta-description"
          content="Get in touch with us for professional tyre services in London. Whether it's fitting, repair, replacement, or more, we've got you covered. Reach out today!"
        />
      </Helmet>
      {/* Banner Section */}
      <header className="headerStyle" style={{ backgroundImage: `url(${BG})` }}>
        <h1>Contact Us</h1>
        <h5>
          <Link to="/" className="linkStyle">
            <i className="fa-solid fa-house"></i> Home{" "}
          </Link>{" "}
          | Contact
        </h5>
      </header>

      <div className="mt-4">
        <Row className="text-center justify-content-center">
          <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
            <div className="section-title">
              <h2 className="sec-title">
                We serve you regardless of time and place.
              </h2>
            </div>
          </div>
        </Row>
        <div className="para-width mx-auto mt-3">
          <ul>
            <li>Your safety comes first to us.</li>
            <li>Our expert are always available to assist you.</li>
            <li>
              Our professionals are ready 24/7 to solve your tyre problem and
              help you get back on your journey.
            </li>
          </ul>
        </div>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={6}>
            <h2 className="text-success">Contact Us</h2>
            <p>
              Call us today to solve your tyre problems. Fill out the form
              below:
            </p>
            <Form onSubmit={fetchData}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3 btn btn-success"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center mt-2"
          >
            <img
              src={Contact1}
              alt="Contact"
              className="rounded"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-5">
            <div className="row text-center justify-content-center">
              <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                  <h2 className="sec-title">Our Location</h2>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "300px",
                border: "1px solid #ddd",
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-71.059773!3d42.360940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzU1LjEiTiA3McKwMjAnMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      {/* ContactUS Bar */}
      <ContactUsBar />
      {/* ContactUS Bar */}
    </div>
  );
}

export default ContactPage;
