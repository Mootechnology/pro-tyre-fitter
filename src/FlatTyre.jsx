import React, { useEffect } from "react";
import ServicePage from "./ServicePage";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const FlatTyre = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/faq");
  }, [setCanonicalUrl]);
  
  const paraThree = (<>A flat tyre problem can appear anywhere without an alarm and always brings mental, physical and financial stress. To save you the physical effort of taking the car to the garage, we bring garages with the best toolkits and professionals to serve you at your comfortable location. We have trained our professionals to provide you with flat <Link to='../services/mobile-tyre-repair'>tyre repair services</Link>. They know all tyre-related problems and provide the best solutions to solve them permanently.</>)

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/flat-tyre") {
      document.title =
        "Solve Your Car Troubles with Our Reliable Flat Tyre Repair Services";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Solve Your Car Troubles with Our Reliable Flat Tyre Repair Services"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Expert flat tyre repair in London. Trust our experienced technicians to fix your car troubles in no time. Contact us today!"
        );
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title id="meta-title">Solve Your Car Troubles with Our Reliable Flat Tyre Repair Services</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/flat-tyre" />
        <meta name="description" id="meta-description" content="Expert flat tyre repair in London. Trust our experienced technicians to fix your car troubles in no time. Contact us today!"/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ServicePage
        // Images
        mergedHeaderStyle="ft"
        imgOne="/images/flattyre/24-7 Flat tyre call out service.png"
        imgTwo="/images/flattyre/247 service.png"
        imgThree="/images/flattyre/Manage the emergencies.png"
        imgFour="/images/flattyre/Rescue your tyre with a Flat tyre service.png"
        imgFive="/images/flattyre/Rescue your travel with Flat tyre repair near me.png"
        // Text
        pageTitle="Save your tyres in an emergency with flat tyre service"
        pageName="Flat Tyre"
        headingOne="Rescue your tyre with a Flat tyre service "
        headingTwo="24/7 Flat tyre call out service"
        headingThree="Immediately recover your tyre with Flat tyre repair "
        headingFour="The unexpected flat tyre event"
        headingFive="your travel with Flat tyre repair near me"
        paraOne="A deflated tyre is a problem for you while travelling, causing you to stop your journey towards the destination. A sudden loss of air from a tyre can cause the wheel to become unbalanced, leading to an unfortunate incident such as an accident. The situation also exposes you and your vehicle to unexpected risk and damage. Pro Tyre Fitters is a platform that covers all tyre problems; we provide you with service for your flat tyre that solves the problem as soon as possible. We aim to make your journey smooth.
        "
        paraTwo="A sudden loss of control of the vehicle creates panic for you. Tyre wear and tear due to air leaks, punctures, tyre damage, lack of maintenance, uneven tyre pressure, valve failure and extreme hot and cold weather. These reasons can cause a flat tyre problem anywhere unexpectedly. You cannot handle the situation without help; you always need an assistant, and you need a flat tyre call out of the situation to solve your problem effectively. Our expert will guide you and assist you in managing and resolving the issue."
        paraThree={paraThree}
        paraFour="The most important thing to know is flat tyre what to do; it disrupts your daily work routine, affects your office schedule, disturbs business meetings and creates unexpected stress of late arrival. Flat tyre problems can appear anywhere, anytime, but most of the time, they appear on the side of the road, causing you unexpected trouble. Our professionals are ready 24/7 to manage your tyre-related emergency and provide seamless services that reduce stress and help you resume your journey without hassle. They give you an instant response to your call.
        "
        paraFive="You need a flat tyre near me to serve you at your direct location and help you deal with your flat tyre problem. Our experts serve you at your place whenever you want; they arrive at your home to provide a service that maintains your comfort and saves time and energy. Our professionals serve you at your workplace without interrupting your work, even they serve you on the side of the road, reducing your nervousness and speeding you towards your destination. 
        "
        scardparaOne="Our professionals are available 24/7 to serve you without time and place restrictions; they always help you even in the middle of the night and in the worst weather.
        "
        scardparaTwo="Our professionals reach where you direct and manage tyre-related emergencies effectively. They come with a complete toolkit for your home, office site or roadside.

        "
        scardparaThree="We offer you the best flat tyre repair service at a very affordable price that eases the burden on your pocket and helps you resume your journey towards your destination.
        "
        scardOne="24/7 availability"
        scardTwo="Manage the emergencies "
        scardThree="Rescue your tyre with a Flat tyre service"
        ctaText="Call us today to solve your flat tyre problem; we offer you the best service at the most affordable price. Our professionals arrive at your desired location with a complete toolkit to serve you beyond the limits of time and space"
        bannerSubHeading="Our experts are experienced in flat tyre recovery service."
      />
    </>
  );
};

export default FlatTyre;
