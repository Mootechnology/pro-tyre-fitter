import React, { useEffect } from "react";
import ServicePage from "./ServicePage";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const JumpStart = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/jumpstart");
  }, [setCanonicalUrl]);

  const paraOne = (<>A weak and depleted battery can stall your vehicle anywhere without alarm, and sudden stops during the journey can cause unexpected stress. We know that a depleted battery slows down your vehicle's performance and leads to late arrival at your destination. <Link to='/'>Pro Tyre Fitters</Link> is a platform that takes care of its customers' needs and offers you a jumpstart service to solve your car battery problem. We provide you with the best professionals who provide you with the services to overcome this situation and resume your journey.</>)
  const ctaText = (<><Link to='/contact'>Call us today</Link> to get jumpstart service and save your battery from further damage. Our professionals guide you completely and provide you with a jumpstart car battery charger that will help you in the future. They reach your location and solve your problem immediately.</>)

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/jumpstart") {
      document.title = "Quick Jump Start Car Service - Available 24/7 Near You";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Quick Jump Start Car Service - Available 24/7 Near You"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Need a jump start? Our 24/7 car service provides fast and reliable jump starts to get you back on the road quickly. Call us anytime for immediate help!"
        );
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title id="meta-title">Quick Jump Start Car Service - Available 24/7 Near You</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/jumpstart" />
        <meta name="description" id="meta-description" content="Need a jump start? Our 24/7 car service provides fast and reliable jump starts to get you back on the road quickly. Call us anytime for immediate help!"/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ServicePage
        // Images
        mergedHeaderStyle="js"
        imgOne="/images/jumpstart/Expeditious jumpstart car service.png"
        imgTwo="/images/jumpstart/emergencies.png"
        imgThree="/images/jumpstart/Prioritise your safety.png"
        imgFour="/images/jumpstart/Serve you at your designated location.png"
        imgFive="/images/jumpstart/Jumpstart service at your desired location.png"
        // Text
        pageTitle="Restart your depleted battery with Jumpstart service"
        pageName="Jump Start"
        headingOne="Rescue your vehicle's battery with jumpstart service"
        headingTwo="Expeditious jumpstart car service "
        headingThree="Quick fix with jumpstart service near me "
        headingFour="Superlative jumpstart car battery charger "
        headingFive="Jumpstart service at your desired location"
        paraOne={paraOne}
        paraTwo="A sudden stop in the car causes you mental and financial stress, and it also brings physical stress when you take the car to the garage. We understand your burden, and to reduce your stress, we offer you the best garage services with well-trained professionals at your location. Our professionals arrive at your location with a complete toolkit and the necessary equipment to provide jumpstart car service. They arrive quickly at your one call.
        "
        paraThree="Most of the time, the car battery creates problems at the roadside, which leads to a panic situation for you. All you need is a jumpstart service near me that will provide you with the best service at a very affordable price. One of the causes of battery depletion is extreme weather conditions, such as extreme heat and cold. Other causes are battery ageing and leaving interior lights, headlights or any electrical component on. Our professionals arrive on the spot to save you and your vehicle from stress.
        "
        paraFour="Our professionals are highly trained in their work; they know all vehicle-related problems and possible solutions. They arrive at your location, diagnose the cause of the problem, and resolve it with the best solution. A great way out of the situation is to jumpstart a car battery charger that charges your damaged and depleted battery. They also protect the battery from dying and provide enough power to restart the engine. You can carry it while travelling to protect against the unexpected incident.
        "
        paraFive="Your safety and comfort are our priority; we offer you service at your designated location. Our professionals reach the spot without time and place restrictions; they are ready 24/7 to solve your problem, even in the middle of the night and in extreme weather. They can even serve you at your home doorstep to save you the physical stress of going to the garage and even serve you at the workplace to save you from disrupting your work schedule. That can also serve you on the side of the road.
        "
        scardparaOne="Our professionals are available 24/7 to handle battery-related emergencies, arriving at the spot with a complete toolkit to save you, regardless of time and place.

        "
        scardparaTwo="We aim to ensure your safety and that of your vehicle while travelling, so we always take care of your vehicle and ensure that it is safely prepared for your travel.

        "
        scardparaThree="We serve you at your designated location, be it your home, workplace or roadside. Our professionals will arrive to resolve your issue and help you resume your travels.


        "
        scardOne="24/7 available to handle emergencies"
        scardTwo="Prioritise your safety         "
        scardThree="Serve you at your designated location"
        ctaText={ctaText}
        bannerSubHeading="Cover our professional emergency in 30 to 40 minutes"
      />
    </>
  );
};

export default JumpStart;
