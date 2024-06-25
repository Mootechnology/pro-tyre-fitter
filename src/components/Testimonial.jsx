import React from "react";

// import emma from "../../public/images/testimonials/emma.jpg";
// import john from "../../public/images/testimonials/john.jpg";
// import maria from "../../public/images/testimonials/maria.jpg";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import { Container, Row, Col } from "react-bootstrap";

const Testimonial = () => {
  return (
    <>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <div className="mt-4">
            <div className="row text-center justify-content-center">
              <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                  <h2 className="sec-title">Customer Reviews</h2>
                </div>
              </div>
            </div>
            <div className="para-width mx-auto d-flex justify-content-center align-items-center">
              <p>
                These are our Monthly Top Clients and their reviews about our
                service
              </p>
            </div>
          </div>
          
          <Container>
        <Row>
          <Col md={12}>
            <h5>Rating</h5>
            <div style={{color: 'white'}}>
              <span style={{color: 'black'}}>4.5</span>
              <i class="fa-solid fa-star bg-success p-1"></i>
              <i class="fa-solid fa-star bg-success p-1"></i>
              <i class="fa-solid fa-star bg-success p-1"></i>
              <i class="fa-solid fa-star bg-success p-1"></i>
              <i class="fa-regular fa-star-half-stroke bg-success p-1"></i>
            </div>
          </Col>
        </Row>
      </Container>
        
        </MDBCol>
      </MDBRow>
      <MDBContainer className="py-5">
        <MDBRow className="text-center">
          <MDBCol md="4" className="mb-5 mb-md-0 card">
            {/* <div className="d-flex justify-content-center mb-4">
              <img
                src={emma}
                className="rounded-circle shadow-1-strong object-fit-cover"
                width="150"
                height="150"
              />
            </div> */}
            <h5 className="mb-3">Emma Davis</h5>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              The serviceman is well trained in his job, came on my one call and
              solved the problem immediately. Highly trusted.
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon
                  fas
                  icon="star-half-alt"
                  size="sm"
                  className="text-warning"
                />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0 card">
            {/* <div className="d-flex justify-content-center mb-4">
              <img
                src={maria}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div> */}
            <h5 className="mb-3">Maria Evans</h5>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Best tyre services ever; they guided me properly, listened, and
              followed every instruction. Excellent service.{" "}
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0 card">
            {/* <div className="d-flex justify-content-center mb-4">
              <img
                src={john}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div> */}
            <h5 className="mb-3">John Smith</h5>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              My car was stuck on the road, and the experts helped me out of the
              problem and fixed the problem quickly. Good job.
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>

          <Container className="mt-4">
          <Row>
            <Col md={12}>
              <h5>Google Rating</h5>
              <div style={{color: 'gold'}}>
                <span style={{color: 'black'}}>5</span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </Col>
          </Row>
        </Container>

        </MDBRow>
        
      </MDBContainer>
    </>
  );
};

export default Testimonial;
