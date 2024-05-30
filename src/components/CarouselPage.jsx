import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets//images/Pro Tyre Fitter Home Page Banner 1-min.png";
import img2 from "../assets//images/Pro Tyre Fitter Home Page Banner 2-min.png";
import img3 from "../assets//images/Pro Tyre Fitter Home Page Banner 3-min.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CarouselPage() {
  return (
    <div className="hero__section">
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h1>
              We provide punctured tyre repair service everywhere you want.
            </h1>
            {/* <Link> */}

            <Link to="tel:442035041721">
              <Button
                variant="primary"
                type="button"
                className="mt-3 btn btn-success btn btn-primary CTAButton"
              >
                Call Us
              </Button>
            </Link>
            {/* </Link> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h1>Our staff is available 24/7 for your assistance.</h1>

            <Link to="tel:442035041721">
              <Button
                variant="primary"
                type="button"
                className="mt-3 btn btn-success btn btn-primary CTAButton"
              >
                Call Us
              </Button>
            </Link>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h1>We offer emergency tyre repair service at your doorstep.</h1>
            <Link to="tel:442035041721">
              <Button
                variant="primary"
                type="button"
                className="mt-3 btn btn-success btn btn-primary CTAButton"
              >
                Call Us
              </Button>
            </Link>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
// const CTAButton = {
//   padding: "8px 17px",
//   borderRadius: "7px",
//   backgroundColor: "#30a18b",
//   border: "none",
//   color: "white",
//   textDecoration: "none",
// };

export default CarouselPage;
