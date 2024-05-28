import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets//images/Pro Tyre Fitter Home Page Banner 1-min.png";
import img2 from "../assets//images/Pro Tyre Fitter Home Page Banner 2-min.png";
import img3 from "../assets//images/Pro Tyre Fitter Home Page Banner 3-min.png";

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
            <a type="button" className="cta-home-btn" style={CTAButton} href="contact">
              Learn More
            </a>
            {/* </Link> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h1>Our staff is available 24/7 for your assistance.</h1>
            <a type="button" className="cta-home-btn" style={CTAButton} href="contact">
              Learn More
            </a>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h1>We offer emergency tyre repair service at your doorstep.</h1>
            <a type="button" className="cta-home-btn" style={CTAButton} href="contact">
              Learn More
            </a>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
const CTAButton = {
  padding: "8px 17px",
  borderRadius: "7px",
  backgroundColor: "#30a18b",
  border: "none",
  color: "white",
  textDecoration: "none",
};

export default CarouselPage;
