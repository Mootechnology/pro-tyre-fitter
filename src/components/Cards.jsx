import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

const Cards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselInnerRef = useRef(null);

  const cardData = [
    {
      title: "Mobile tyre fitting",
      text: "Ensure the safety of your journey with mobile tyre fitting.",
      image: "/images/Mobile tyre fitting.png",
      path: "/services/mobile-tyre-fitting",
    },
    {
      title: "Mobile Tyre Repair",
      text: "Get your tyres repaired with a mobile tyre repair service.",
      image: "/images/Mobile Tyre Repair.png",
      path: "/services/mobile-tyre-repair",
    },
    {
      title: "Tyre replacement",
      text: "Replace the weak and damaged tyre with a new one.",
      image: "/images/Tyre replacement.png",
      path: "/services/tyre-replacement",
    },
    {
      title: "Flat tyres",
      text: "Protect your tyres from the problem of tyre getting flat.",
      image: "/images/Flat tyres.png",
      path: "/services/flat-tyre",
    },
  ];

  const handleNextClick = () => {
    const carouselInner = carouselInnerRef.current;
    const cardWidth = carouselInner.children[0].offsetWidth;

    if (scrollPosition < carouselInner.scrollWidth - cardWidth * 3) {
      setScrollPosition(scrollPosition + cardWidth);
      carouselInner.scrollTo({
        left: scrollPosition + cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const carouselInner = carouselInnerRef.current;
    const cardWidth = carouselInner.children[0].offsetWidth;

    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - cardWidth);
      carouselInner.scrollTo({
        left: scrollPosition - cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="carouselExampleControls" className={`carousel ${styles.carousel}`}>
      <div
        className={`carousel-inner ${styles["carousel-inner"]}`}
        ref={carouselInnerRef}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""} ${
              styles["carousel-item"]
            }`}
          >
            <div className={`card ${styles.card}`}>
              <div
                className={`img-wrapper cards-image ${styles["img-wrapper"]}`}
              >
                <img src={card.image} alt="card" />
              </div>
              <div className={`card-body ${styles["card-body"]}`}>
                <h4 className={`card-title ${styles["card-title"]}`}>
                  {card.title}
                </h4>
                <p className={`card-text ${styles["card-text"]}`}>
                  {card.text}
                </p>
                <Link to={card.path}>
                  <Button
                    variant="success mt-3 px-4"
                    className=" btn btn-success btn btn-primary"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`carousel-control-prev bg-success ${styles["carousel-control-prev"]}`}
        type="button"
        onClick={handlePrevClick}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`carousel-control-next bg-success ${styles["carousel-control-next"]}`}
        type="button"
        onClick={handleNextClick}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Cards;
