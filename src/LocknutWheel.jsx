import React, { useEffect } from "react";
import ServicePage from "./ServicePage";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const LocknutWheel = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/locknut-wheel-removal");
  }, [setCanonicalUrl]);

  const paraOne = (<>A loose tyre nut can become a nuisance, cause an unpleasant accident, and lead to theft. It's important to ensure your tyre is fully secured and prepared for travel. <Link to='/'>Pro Tyre Fitters</Link> is a platform that cares for its customers' needs and ensures tyre safety by providing locking wheel nut removal services to solve minor to major tyre-related problems. They are always available to provide smooth service and protect your vehicle from unexpected damages.</>) 

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/locknut-wheel-removal") {
      document.title = "Locking Wheel Nut Removal - 100% Guaranteed Removal";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Locking Wheel Nut Removal - 100% Guaranteed Removal"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Get 100% guaranteed locking wheel nut removal with our expert technicians. Rely on our fast and professional service to get your wheels off and back on the road quickly."
        );
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title id="meta-title">Locking Wheel Nut Removal - Fast, Professional Service</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/locknut-wheel-removal" />
        <meta name="description" id="meta-description" content="Get 100% guaranteed locking wheel nut removal with our expert technicians. Rely on our fast and professional service to get your wheels off and back on the road quickly."/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ServicePage
        // Images
        mergedHeaderStyle="lwr"
        imgOne="/images/lwr1.png"
        imgTwo="/images/lwr2(1).png"
        imgThree="/images/lwr2(2).png"
        imgFour="/images/lwr2(3).png"
        imgFive="/images/lwr3.png"
        // Text
        pageTitle="Protect your wheels with a locking wheel nut removal service"
        pageName="Locknut Wheel Removal"
        headingOne="Secure your tyre Locking wheel nut removal"
        headingTwo="Experience our trained locking wheel nut remover"
        headingThree="Excellent locking wheel nut removal tool"
        headingFour="Rapid locking wheel nut removal service near me"
        headingFive="Inexpensive locking wheel nut removal service"
        paraOne={paraOne}
        paraTwo="Our locking wheel nut remover expert provides you the service that helps you to protect your tyres from theft; they tighten the nut, which prevents the tyre from being stolen. In the event of a tyre change or repair, the first step is to loosen the wheel nut to allow it to move forward. Non-professionals often remove them so severely that they damage the tyre and cause new stress for you. Our professionals serve with great care and efficiency that prevent tyres from damage.
        "
        paraThree="Our highly trained professionals provide the services; they know all the techniques and are knowledgeable about the tools. They arrive at your location with a locking wheel nut removal tool to provide you with a smooth and convenient service. They tighten the loose nut that secured the tyre and loosen it to remove the damaged tyre. Our professionals reach your desired location no matter where you need help, and they are always ready to solve the problem when you need it."
        paraFour="Tyre problems can appear anywhere without any alarm; you only need a locking wheel nut removal near me to save your vehicle quickly. They are available 24/7 to serve you without time and place restrictions. They serve you at home to maintain comfort and save you from physical burden. They also serve you at your place of work so that your work schedule is not interrupted, and they even rescue you and resolve your tyre-related problem on the side of the road.
        "
        paraFive="We know that locking wheel nut removal service is vital to your tyres, but we also care about your finances and never burden you with expensive services. We provide you with the best service at the most affordable price at your directed location. We aim to reduce your travel stress and ensure your safety. We also care about the health and safety of your vehicle. Our professionals provide services that ensure your vehicle's safety and solve your tyre-related problems. They are ready to serve you round the clock, even in inclement weather."
        scardparaOne="To protect your tyres from theft, we provide a locking wheel nut service that secures your tyres with strong nuts and ensures that they cannot be easily opened.

        "
        scardparaTwo="Our experts quickly respond to you and provide reliable locking wheel nut removal service; they serve you anywhere and anytime without the boundary of time and place. 


        "
        scardparaThree="We trained our professionals to deal with emergency situations and reduce your stress by resolving the issue. They solve tyre-related problems with the best possible solution.

        "
        scardOne="Secure your vehicle's tyre"
        scardTwo="Quickly respond to your call"
        scardThree="Highly trained professionals"
        ctaText="Contact our expert for locking wheel nut removal service, whether at your home, office, or side of the road. They are highly trained, perform all procedures carefully, and meet your expectations. Call us today to secure your tyres and reduce the stress of tyre theft.
        "
        bannerSubHeading="Our experienced experts serve you seamlessly"
      />
    </>
  );
};

export default LocknutWheel;
