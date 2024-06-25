import React, {useEffect} from "react";
import ServicePage from "./ServicePage";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const MobileBreakdown = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/mobile-breakdown");
  }, [setCanonicalUrl]);

  const paraOne = (<>When your car gets stuck on the road, it can be stressful. We understand that the sudden stop of the vehicle can be physically, mentally, and financially burdensome. <Link to='/'>Pro Tyre Fitters</Link> is a platform that takes care of the needs of every traveller and provides the best vehicle services. We offer a breakdown recovery service that resolves your vehicle-related issues and helps you resume your journey towards your destination. Our goal is to make your travel easy and memorable.</>)
  const paraTwo = (<>Breakdown recovery service is required in the event of a <Link to='../services/flat-tyre'>flat tyre</Link>, mechanical failure, <Link to='../services/jumpstart'>battery problems</Link>, overheating, brake failure and running out of fuel. Most of the issues appear on the side of the road, causing unexpected stress and causing an unpleasant incident. It creates safety concerns for you and your vehicle. All you need is a breakdown recovery near me that provides you with prompt service on the spot and helps you get out of the situation safely.</>)

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/mobile-breakdown") {
      document.title =
        "Find Affordable Breakdown Recovery Services Near You - Call now";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Find Affordable Breakdown Recovery Services Near You - Call now"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Looking for reliable and affordable breakdown recovery services? Look no further! Pro Tyre Fitters provides top-notch assistance. Call Us Now"
        );
      }
    }
  }, [location]);

  
  return (
    <>
      <Helmet>
        <title id="meta-title">Find Affordable Breakdown Recovery Services Near You - Call now</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/mobile-breakdown" />
        <meta name="description" id="meta-description" content="Looking for reliable and affordable breakdown recovery services? Look no further! Pro Tyre Fitters provides top-notch assistance. Call Us Now"/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ServicePage
        // Images
        mergedHeaderStyle="mb"
        imgOne="/images/mb1.png"
        imgTwo="/images/mb2(1).png"
        imgThree="/images/mb2(2).png"
        imgFour="/images/mb2(3).png"
        imgFive="/images/mb3.png"
        // Text
        pageTitle="Save your vehicle battery with breakdown recovery service"
        pageName="Mobile Breakdown"
        headingOne="Breakdown recovery service anywhere, anytime"
        headingTwo="Immediate breakdown recovery near me"
        headingThree="Resume your journey with a recovery breakdown."
        headingFour="Expeditious local breakdown recovery service"
        headingFive="24/7 breakdown recovery service for emergencies"
        paraOne={paraOne}
        paraTwo={paraTwo}
        paraThree="We understand that a stranded vehicle can cause you to arrive late at your destination, and sometimes, you miss an essential part of the event. We offer you a recovery breakdown service that fixes your vehicle problem efficiently and ensures that your journey is smooth. We provide you with the best professionals who are well-trained in their work and know all vehicle-related problems and their solutions. They arrive at your location with a complete toolkit and the necessary equipment to solve the problem that stands between you and your destination."
        paraFour="Towing the stuck car to the garage is a challenging task for you, and you cannot handle the emergency alone. To reduce your physical and mental stress, we bring you a local breakdown recovery service at your place. Our professionals arrive at your location to deal with the problem, resolve it quickly, and guide you to ensure that the incident never happens again. They arrive without time and place restrictions, no matter where you are stuck and when you need help. They come in the middle of the night and bad weather."
        paraFive="A 24-hour breakdown recovery service manages emergencies and ensures you are safe. Our professionals are always ready to help you; they are well-trained in dealing with emergencies and finding solutions. We provide you services on a pocket-friendly budget, which reduces your financial stress. Our experts are always ready to help you at the roadside and your workplace. We aim to provide you with the best service at an affordable price that saves you time, energy and money."
        scardparaOne="Our professionals are available 24/7 to handle vehicle-related emergencies, ensure your safety, and resolve the issue to resume your journey to your destination."
        scardparaTwo="We provide you with professionals who serve at your desired location, be it a side of the road or an office location. They reach your location irrespective of time and place."
        scardparaThree="A sudden car-related problem can be expensive, but we provide you with the best services to solve the problem at your location and reduce your stress at very affordable rates."
        scardOne="24/7 available to serve you"
        scardTwo="Serve at your directed location"
        scardThree="Highly affordable"
        ctaText="Call us today to get breakdown recovery service at your location. Our highly skilled professionals reach your location quickly and solve the problem in no time. They serve you regardless of time and place, no matter wherever you are, and when you need help, they are always ready to serve you."
        bannerSubHeading="Our professionals serve you at your location irrespective of your home, office or road"
      />
    </>
  );
};

export default MobileBreakdown;
