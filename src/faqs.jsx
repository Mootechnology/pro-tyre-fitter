import React, { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { useCanonical } from "./canonical";

export default function WithContactForm() {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/faq");
  }, [setCanonicalUrl]);

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/faq") {
      document.title = "Frequently Asked Questions - Tyre Services in London";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Frequently Asked Questions - Tyre Services in London"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Find answers to common queries about our tyre services in London. From fitting to repair, get all the information you need in our FAQs section."
        );
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title id="meta-title">Frequently Asked Questions - Tyre Services in London</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/faqs" />
        <meta name="description" id="meta-description" content="Find answers to common queries about our tyre services in London. From fitting to repair, get all the information you need in our FAQs section."/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Banner Section */}
      <header className="headerStyle">
        <h1>Faq Page</h1>
        <h5>
          <Link to="/" className="linkStyle">
            <i class="fa-solid fa-house"></i> Home{" "}
          </Link>{" "}
          | Faq
        </h5>
      </header>

      

      <MDBContainer style={{ maxWidth: "1000px" }}>
        <h3 className="text-center mt-5" style={{ fontSize: "10rem" }}>
          <strong className="text-success">Frequently Asked Question</strong>
        </h3>
        <section className="mt-5 mb-3">
          <MDBRow>
            {/* Accordian */}
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="mb-1">
                  <strong className="text-success">
                    How often do I need car tyre maintenance?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                    You need to check the health of your tyres once a month.
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                <p className="mb-1">
                  <strong className="text-success">
                    Do you offer mobile tyre fitting at my home?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                    Yes, we provide mobile tyre fitting service at your home.
                    Our professionals arrive at your location with a complete
                    toolkit.
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                <p className="mb-1">
                  <strong className="text-success">
                    Can you recommend the best tyres for my vehicle?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                    Yes, we recommend the best tyres according to your vehicle
                    to make your journey easier.
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                <p className="mb-1">
                  <strong className="text-success">
                    How long does it take you to replace a tyre?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                    Our professionals are good at service; it takes 30 minutes
                    to change your old tyre to a new one.
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                <p className="mb-1">
                  <strong className="text-success">
                  Can a mobile tyre fitter do a wheel alignment?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                  Yes, a mobile tyre fitters make sure wheel alignment issues with manage other tyre related issues
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                <p className="mb-1">
                  <strong className="text-success">
                    How do I protect my tyres from damage?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                    Regular maintenance, maintaining tyre pressure and avoiding
                    bad driving habits can protect your tyres from damage.
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                <p className="mb-1">
                  <strong className="text-success">
                  Is mobile tyre expensive?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                  Mobile tyre fitting service is less expensive than garage based service. It is also protected against physical stress.
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                <p className="mb-1">
                  <strong className="text-success">
                  How many miles does a tyre cover?
                  </strong>
                </p>
                </Accordion.Header>
                <Accordion.Body>
                <p className="mb-1">
                  <p>
                  Front tyres cover 20,000 miles and rear tyres 40,000 miles, further factors such as weather and maintenance also affect performance.
                  </p>
                </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* Accordian */}
            {/* <MDBCol lg="6" md="12" className="text-center mb-3">
              <p>
                <span class="fw-bold" className="text-success">
                  Still have any questions? Contact us to get your answer!
                </span>
              </p>

              <form>
                <MDBInput
                  placeholder="Email address"
                  required
                  className="mb-4"
                />
                <MDBTextArea rows={4} placeholder="Message" className="mb-4" />
                <MDBBtn block className="bg-success w-25">
                  Send
                </MDBBtn>{" "}
              </form>
            </MDBCol> */}
          </MDBRow>
        </section>
      </MDBContainer>
    </>
  );
}
