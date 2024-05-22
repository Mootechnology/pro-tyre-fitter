
import React, {useEffect} from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import logo from './assets/images/logo2.png';
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function WithContactForm() {
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
        <meta
          name="description"
          id="meta-description"
          content="Find answers to common queries about our tyre services in London. From fitting to repair, get all the information you need in our FAQs section."
        />
      </Helmet>
      {/* Banner Section */}
      <header className='headerStyle'>
        <h1>Faq Page</h1>
        <h5><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | Faq</h5>
      </header>
      
      <MDBContainer style={{ maxWidth: '1000px' }}>
        <h3 className='text-center mt-5' style={{ fontSize: '10rem' }}><strong className='text-success'>Frequently Asked Question</strong></h3>
        <section className="mt-5">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4">
              <div>
                <p className="mb-1">
                  <strong className='text-success'>How often do I need car tyre maintenance?</strong>
                </p>
                <p className="mb-1">
                  <p>You need to check the health of your tyres once a month.</p>
                </p>
                {/* <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
              </ul> */}
              </div>

              <div>
                <p className="mb-1">
                  <strong className='text-success'>Do you offer mobile tyre fitting at my home?</strong>
                </p>
                <p className="mb-1">
                  <p>Yes, we provide mobile tyre fitting service at your home. Our professionals arrive at your location with a complete toolkit.
                  </p>
                </p>
              </div>

              <div>
                <p className="mb-1">
                  <strong className='text-success'>
                    Can you recommend the best tyres for my vehicle?
                  </strong>
                </p>
                <p className="mb-1">
                  <p>Yes, we recommend the best tyres according to your vehicle to make your journey easier.</p>
                </p>

              </div>

              <div>
                <p className="mb-1">
                  <strong className='text-success'>How long does it take you to replace a tyre?</strong>
                </p>
                <p className="mb-1">
                  <p>Our professionals are good at service; it takes 30 minutes to change your old tyre to a new one.</p>
                </p>
              </div>

              <div>
                <p className="mb-1">
                  <strong className='text-success'>How do I protect my tyres from damage?</strong>
                </p>
                <p className="mb-1">
                  <p>Regular maintenance, maintaining tyre pressure and avoiding bad driving habits can protect your tyres from damage.

                  </p>
                </p>
              </div>
            </MDBCol>
            <MDBCol lg="6" md="12" className="text-center mb-3">
              <p>
                <span class="fw-bold" className='text-success'>
                  Still have any questions? Contact us to get your answer!
                </span>
              </p>

              <form>
                <MDBInput placeholder="Email address" required className="mb-4" />
                <MDBTextArea rows={4} placeholder="Message" className="mb-4" />
                <MDBBtn block className="bg-success w-25">Send</MDBBtn>            </form>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </>
  );
}
