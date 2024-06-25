import React, { useEffect } from "react";
import ServicePage from "./ServicePage";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const MobileTyreFitting = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/mobile-tyre-fitting");
  }, [setCanonicalUrl]);

const paraOne = (<>Are you suffering from tyre-related problems that disrupt your life and make it difficult to do your work hassle-free? We understand that a lousy tyre stands between you and your destination. It disrupts your household chores, office work and meetings. To smooth your journey, Pro Tyre Fitters is a platform that designs mobile tyre fitting services that cover most tyre-related issues and make your life easier. It covers the <Link to='../services/flat-tyre'>flat tyre</Link> problem, blowouts, and punctures and balances the wheel. <Link to='../services/tyre-replacement'>Replace old tyres</Link> with new tyres and do tyre maintenance.</>);
const paraFour = (<>Our professionals provide <Link to='/'>mobile tyre service</Link> at your home door to comfort you; they arrive with a complete toolkit and resolve the tyre-related issue. From the maintenance of the tyre to resolving the problems, they cover all the aspects of the tyre and meet all the needs that make your travel easier. If your tyre is stuck at the office site, it can disturb your working schedule, but no worries; our professional will resolve the issue and help you resume your work quickly.</>)
const ctaText = (<> <Link to='/contact'>Call us today</Link> for a fantastic Mobile Tyre Fitting service that will make your commute safer. Our professionals are ready to serve you 24/7, regardless of time and place.</>)  

const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/mobile-tyre-fitting") {
      document.title =
        "London’s On-Demand Mobile Tyre Fitting Service | Book Now";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "London’s On-Demand Mobile Tyre Fitting Service | Book Now"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Don’t waste time searching for a car tyre fitting shop—our professional mobile service comes to you! Get back on the road Fastly."
        );
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title id="meta-title">London’s On-Demand Mobile Tyre Fitting Service | Book Now</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/mobile-tyre-fitting" />
        <meta name="description" id="meta-description" content="Don’t waste time searching for a car tyre fitting shop—our professional mobile service comes to you! Get back on the road Fastly."/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ServicePage
        // Images
        mergedHeaderStyle="mtf"
        imgOne="/images/mtf1.png"
        imgTwo="/images/mtf2 (1).png"
        imgThree="/images/mtf2 (2).png"
        imgFour="/images/mtf2 (3).png"
        imgFive="/images/mtf3.png"
        // Text
        pageTitle="24/7 mobile tyre fitting service available"
        pageName="Mobile Tyre Fitting"
        headingOne="Exceptional Mobile Tyre Fitting service "
        headingTwo="You need a mobile tyre fitting service near me "
        headingThree="24-Hour Mobile Tyre Fittings London covers emergencies"
        headingFour="Mobile tyre service at your location"
        headingFive="Ensure your travel with Mobile Tyre Fitting London"
        paraOne={paraOne}
        paraTwo="If you are suffering from a tyre problem, all you need is a mobile tyre fitting service near me, which effectively covers the problem and helps you resume your journey towards your destination. We trained our professionals so that they know all of the issues related to tyres and their possible solutions. They arrive at your directed location with a complete toolkit that helps to fix the problem permanently. No matter where you are, they reach your location to solve your problem.        "
        paraThree="We understand that an unbalanced wheel becomes a problem for you; it can cause an accident. An unbalanced wheel situation creates panic and is challenging to manage. 24-Hour Mobile Tyre Fittings London fixes your tyre problem fast. Your safety is our priority and concern. Our experts ensure your safety and then solve your tyre problem. A weak tyre becomes a problem anytime, anywhere; our professionals are always ready to help you at your home, workplace or side of the road wherever you are stuck. 
        "
        paraFour={paraFour}
        paraFive="Most of the tyre problems appear on the side of the road, causing unexpected mental, physical and financial stress. A mobile tyre fitting London service deals with sudden tyre problems, covers blow-outs and punctures, and provides quick solutions to overcome the situation. Our experts replace your damaged tyre with a new one and dispose of the old tyre quickly. They respond to your one call and reach your location no matter what time and location. They even arrive in the middle of the night to fix a tyre problem.
        "
        scardparaOne="Our professionals are well-trained to handle any emergencies that may arise at your location. They manage tyre-related problems, find the root cause, and come up with the best possible solution."
        scardparaTwo="We offer you the best mobile tyre fitting service wherever you want, regardless of time, be it your home, workplace or roadside; our professionals arrive at your designated location to serve you.
        "
        scardparaThree="We take care of your finances and offer you the best affordable tyre service that maintains the tyre, reduces financial stress and increases longevity while ensuring the safety of your journey.
        "
        scardOne="Qualified experts manage emergencies"
        scardTwo="Offer you the service anywhere, anytime"
        scardThree="Highly affordable"
        ctaText={ctaText}
        bannerSubHeading="Get instant expert help in 30-40 minutes"
      />
    </>
  );
};

export default MobileTyreFitting;
