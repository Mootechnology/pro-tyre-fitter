import React, {useEffect} from "react";
import ServicePage from "./ServicePage";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const MobileTyreRepair = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/mobile-tyre-repair");
  }, [setCanonicalUrl]);

  const paraTwo = (<>The tyre repair service near me offers you the best professionals to serve you at the place you are directed, no matter where you are or what time it is. They arrive at your location to address the issue and provide the best possible solution to resolve it permanently. We aim to provide you with services that make your journey more easier, and we have trained professionals to deal with all types of emergencies anytime and anywhere. They know all the knowledge and good practice to solve <Link to='../services/mobile-tyre/fitting'>tyre problems</Link>.</>)
  const paraThree = (<>Mobile car tyre repair solves the problem of punctures, improper functioning of valves, bursts, minor damage and emergencies. Even maintain and <Link to='../services/tyre-replacement'>replace tyres</Link> to make your journey easier. Most <Link to='../services/part-worn-tyre'>tyre problems</Link> are also caused by uneven air pressure and manufacturing defects in the tyre. As a tyre completes its life span, tyre-related issues also arise. All the problems lead to unexpected events that put you and your vehicle at risk.</>)

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/mobile-tyre-repair") {
      document.title = "Tyre Repair Near Me | Find the Best Tyre Repair Service";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Tyre Repair Near Me | Find the Best Tyre Repair Service"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Need professional tyre repair services near you? Look no further! Expert tyre repair near you in London! Quick and Reliable Service"
        );
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Tyre Repair Near Me | Find the Best Tyre Repair Service</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/mobile-tyre-repair" />
        <meta name="description" content="Need professional tyre repair services near you? Look no further! Expert tyre repair near you in London! Quick and Reliable Service"/>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ServicePage
        // Images
        mergedHeaderStyle="mtr"
        imgOne="/images/mtr1.png"
        imgTwo="/images/mtr2(1).png"
        imgThree="/images/mtr2(2).png"
        imgFour="/images/mtr2(3).png"
        imgFive="/images/mtr3.png"
        // Text
        pageTitle="Restore tyre's health with Mobile Tyre Repair"
        pageName="Mobile Tyre Repair"
        headingOne="Quick fix the tyre with Mobile Tyre Repair "
        headingTwo="Rescue your vehicle with tyre repair near me"
        headingThree="Ensure your journey with mobile car tyre repair"
        headingFour="Experience the service of Mobile tyre repair in London "
        headingFive="Emergency 24-hour tyre repair near me "
        paraOne="Your damaged tyre is a problem for you and getting the car to the garage is also difficult. We understand that a damaged vehicle can disrupt you and your work schedule. This unknown stress comes to you, which affects your work progress, leading to late arrivals, reduced working performance and irritating mood. To solve all your vehicle tyre-related problems, Pro Tyre Fitters has introduced a mobile tyre repair service that quickly fixes your tyre and gets you on your way again.
        "
        paraTwo={paraTwo}
        paraThree={paraThree}
        paraFour="Mobile Tyre Repair London takes you beyond your imagination and ensures your journey is safe. Our top priority is to ensure your safety; our experts ensure your safety first, then find the root cause of the problem and provide you with a quick solution. They arrive at your location with a complete tool kit and necessary equipment. Problems related to tyres mainly occur on the side of the road, causing panic and fear for you. Our experts answer your one call, guide you immediately, and send help as soon as possible.

        "
        paraFive="We care about your comfort and busy schedule; we know that a stranded vehicle disrupts your daily routine. 24-hour tyre repair near me service provides you with the best professional at your home who can solve your tyre-related problem quickly and save your time and energy. Our experts also serve you at your workplace, making it easy to recover the car without going to the garage. We serve you regardless of time and weather. We are at your service 24/7 to make your journey safe.
        "
        scardparaOne="We offer you the best mobile tyre repair service that restores your damaged tyre quickly and saves you from the hassle of taking the vehicle to the garage."
        scardparaTwo="We provide you with professionals who are experts in the service and know all the problems, their solutions, required toolkits and necessary items for the service.

        "
        scardparaThree="Our professionals reach your directed location to solve your tyre-related problem and resume your journey whether you are at home, office or roadside.

        "
        scardOne="Immediate recovery"
        scardTwo="Well-trained professionals "
        scardThree="Serve at your location"
        ctaText="Contact our customer care officer for mobile tyre repair service; they will guide you immediately and send the best professionals to your location with a complete toolkit to solve your tyre-related problem. We provide you with the best affordable service that reduces your financial burden."
        bannerSubHeading="Our experts are available 24/7 to serve you"
      />
    </>
  );
};

export default MobileTyreRepair;
