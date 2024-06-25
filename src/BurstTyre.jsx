import React, { useEffect } from "react";
import ServicePage from "./ServicePage";
// import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useCanonical } from "./canonical";
// import { MetaTags } from "react-meta-tags";

const BurstTyre = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/burst-tyre");
  }, [setCanonicalUrl]);
  const paraOne = (
    <>
      A burst tyre is one of the most dreaded occurrences that every driver
      faces once in a lifetime. Burst incidents mostly happen on roadsides,
      damaging vehicles and causing accidents.{" "}
      <Link to="/">Pro Tyre Fitters</Link> is a platform that takes care of the
      passenger; we design the service to cover the tyre burst incident quickly,
      manage the situation, ensure your safety and provide the best solution to
      get you to your destination. Our professionals help you resume your travel
      to your destination and make it smooth and safe.
    </>
  );
  const paraThree = (
    <>
      We understand that an unexpected tyre blowout disrupts your day-to-day
      operations, your daily commute, office work, business schedule, and family
      and friends meetings. You may arrive late or miss an event or meeting.
      That can cause you unexpected stress that affects your health and work
      performance. We provide you with service from well-trained professionals
      who specialize in{" "}
      <Link to="../services/mobile-tyre-repair">tyre repair services</Link>.
      They know all tyre-related problems and possible solutions.
    </>
  );

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/burst-tyre") {
      document.title =
        "Fix Burst Tyres Now - Call for Fast & Reliable Service!";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Fix Burst Tyres Now - Call for Fast & Reliable Service!"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Get immediate assistance for burst tyres. Fast, reliable service available 24/7 to get you back on the road quickly and safely. Call us now!"
        );
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title id="meta-title">Fix Burst Tyres Now - Call for Fast & Reliable Service!</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/burst-tyre"/>
        <meta name="description" id="meta-description" content="Get immediate assistance for burst tyres. Fast, reliable service available 24/7 to get you back on the road quickly and safely. Call us now!"/>
        <meta name="robots" content="index, follow" />
      </Helmet>

      <ServicePage
        // Images
        mergedHeaderStyle="bt"
        imgOne="/images/bursttyre/Immediately resolve your tyre burst issue.png"
        imgTwo="/images/bursttyre/Amazing services.png"
        imgThree="/images/bursttyre/24-7available.png"
        imgFour="/images/bursttyre/Serve you Anywhere, anytime.png"
        imgFive="/images/bursttyre/Ensure your travel with  burst tyre service.png"
        // Text
        pageTitle="Exceptional burst tyre service for emergencies"
        pageName="Burst Tyre"
        headingOne="24/7 Emergency burst tyre service "
        headingTwo="Immediately resolve your tyre burst issue"
        headingThree="Highly trained Professionals deal with tyre blowouts "
        headingFour="Tyre blowout service at your directed location "
        headingFive="Ensure your travel with  burst tyre service"
        paraOne={paraOne}
        paraTwo="A tyre burst will bring physical, mental and emotional stress and cause damage to you and your vehicle. This incident can be caused by overloading the vehicle, driving at high speed and driving with bad tyres. It's not easy to handle situations alone; you can't take the car to the garage, that's why we bring the garage to you with all the facilities. Our customer care officer thoroughly guides you on ensuring your safety, and professionals provide burst tyre service beyond your expectations that helps you resume your journey.
        "
        paraThree={paraThree}
        paraFour="Our professionals respond quickly to your one call and reach your location, no matter where you are and what time it is. They are available 24/7 to serve you beyond time and place. They reached your location in the middle of the night, even in bad weather. We aim to provide a service that ensures your safety and facilitates your journey. They arrive at the location you direct, be it your home, workplace or roadside, to resolve your issue and resume your journey.
        "
        paraFive="To resolve the tyre burst situation, our expert reaches your location immediately and solves your problem with the best possible solution. They arrived with a complete tool kit and all necessary equipment. We understand that the sudden appearance of a tyre problem can strain your pocket, and we care about that stress. We offer you the best services at your directed location at the most affordable price with exceptional professionals who will restore your tyre and resume your journey in no time.
        "
        scardparaOne="We provide you with the best service to cover the event of a burst tyre and resume your journey towards your destination. Ensure your safety while travelling with our experts.
        "
        scardparaTwo="Our professionals are available 24/7 to deal with emergencies of burst tyres, solve them with the best possible solutions and reduce physical, mental and financial stress.
        "
        scardparaThree="Regardless of time and space constraints, our experts arrive at your directed location, arriving on the spot with the complete toolkit to fix your tyre problem efficiently.

        "
        scardOne="Amazing services  "
        scardTwo="24/7 available "
        scardThree="Serve you Anywhere, anytime"
        ctaText="Call us today to recover your vehicle from a burst tyre service incident; our professional will serve you beyond your expectations, arrive at your location with the best toolkit, diagnose the cause of the problem, and resolve it with the best possible solution. They ensure that you and your vehicle are safer throughout the journey."
        bannerSubHeading="Amazing professionals are available to serve you"
      />
    </>
  );
};

export default BurstTyre;