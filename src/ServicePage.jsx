import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ServicePage = ({ pageTitle, ...otherProps }) => {
  const {
    headingTwo,
    headingOne,
    headingThree,
    headingFour,
    headingFive,
    paraOne,
    paraTwo,
    paraThree,
    paraFour,
    paraFive,
    mergedHeaderStyle,
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    scardparaOne,
    scardparaTwo,
    scardparaThree,
    scardOne,
    scardTwo,
    scardThree,
    ctaText,
    bannerSubHeading,
    pageName
  } = otherProps;

  return (
    <>
      {/* Banner Section */}
      <header className={mergedHeaderStyle}>
        <h1>{pageTitle}</h1>
        <div className="text-center">
          <h4><p className="text-white h5" style={{textShadow: "1px -2px 10px rgba(0,0,0,0.6)"}}>{bannerSubHeading}</p></h4>
        </div>
        <h5>
          <Link to="/" className="linkStyle">
            <i class="fa-solid fa-house"></i> Home{" "}
          </Link>{" "}
          | {pageName}
        </h5>
      </header>

      <div className="mt-4">
        <div className="row text-center justify-content-center">
          <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
            <div className="section-title">
              <h2 className="sec-title">{headingOne}</h2>
            </div>
          </div>
        </div>
        <div className="para-width mx-auto">
          <p>{paraOne}</p>
        </div>
      </div>

      {/* Image and Text */}
      <div className="container">
        <Row style={{ marginTop: "4rem" }}>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={imgOne} alt="Mission" className="img-fluid rounded" />
          </Col>
          <Col lg={6}>
            <h2 className="text-success">{headingTwo}</h2>
            <p>{paraTwo}</p>
            <div className="d-flex justify-content-start align-items-start">
              <Link to="/contact">
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3 btn btn-success"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Image overlay */}
      <section className="container mt-4">
        <div className="mt-4">
          <h2 className="text-success text-center">{headingThree}</h2>
          <div className="para-width mx-auto">
            <p>{paraThree}</p>
          </div>
        </div>
        <div className="row">
          {/* 1 */}
          <div className="col-md-4">
            <div className="parent-container my-2">
              <img src={imgTwo} alt="Mission" className="img-fluid rounded" />

              <div className="overlay">
                <h4>{scardOne}</h4>
                <p>{scardparaOne}</p>
                <div className="d-flex justify-content-center">
                  {" "}
                  <Link className="btn btn-success" to="/contact">
                    <small>Contact Us</small>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-md-4">
            <div className="parent-container my-2">
              <img src={imgThree} alt="Mission" className="img-fluid rounded" />

              <div className="overlay">
                <h4>{scardTwo}</h4>
                <p>{scardparaTwo}</p>
                <div className="d-flex justify-content-center">
                  {" "}
                  <Link className="btn btn-success" to="/contact">
                    <small>Contact Us</small>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-md-4">
            <div className="parent-container my-2">
              <img src={imgFour} alt="Mission" className="img-fluid rounded" />

              <div className="overlay">
                <h4>{scardThree}</h4>
                <p>{scardparaThree}</p>
                <div className="d-flex justify-content-center">
                  {" "}
                  <Link className="btn btn-success" to="/contact">
                    <small>Contact Us</small>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </section>

      {/* Text */}
      <div className="mt-4">
        <div className="row text-center justify-content-center">
          <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
            <div className="section-title">
              <h2 className="sec-title">{headingFour}</h2>
            </div>
          </div>
        </div>
        <div className="para-width mx-auto">
          <p>{paraFour}</p>
        </div>
      </div>

      {/* Image and text */}
      <div className="container">
        <Row style={{ marginTop: "4rem" }}>
          <Col md={6} className="order-2 d-flex justify-content-center">
            <img src={imgFive} alt="Mission" className="img-fluid rounded" />
          </Col>
          <Col md={6} className="order-1">
            <h2 className="text-success">{headingFive}</h2>
            <p>{paraFive}</p>
          </Col>
        </Row>
      </div>
      <Container>
        <p>{ctaText}</p>
      </Container>
    </>
  );
};

export default ServicePage;
