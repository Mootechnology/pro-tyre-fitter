import React, {useEffect} from 'react'
import ServicePage from './ServicePage'
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const PartWornTyre = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/part-worn-tyre");
  }, [setCanonicalUrl]);

  const paraOne = (<>If your tyres get weak and damaged, it will trouble you. A weak and damaged tyre causes problems for you that disrupt your daily work routine, make you arrive late at the office, and disrupt your work schedule. <Link to='/'>Pro Tyre Fitters</Link> is a platform that handles all your tyre-related issues and offers the best solutions to help you move freely. We design a part-worn tyres service that replaces your old and damaged tyre with a new one to make your journey safer.</>)
  const paraThree = (<>You need a part worn tyres near me in case of an emergency replacement, puncture or tyre failure. We understand that weak tyres are a hassle for you, which leads to unexpected stress and a burden on your pocket. Part worn tyres are the best option for you in case of emergency <Link to='../services/tyre-replacement'>tyre replacement</Link> when you don't have enough budget for new tyres. These tyres meet your needs and help you resume your journey faster. That reduces your safety concerns and makes your tea easier.</>)
  const ctaText = (<>Call us today for a part-worn service offering the best alternative to new tyres. It quickly solves your weak and damaged tyre problem and gives you a clean and smooth ride. Our professionals test the tyre before recommending it to you. <Link to='/contact'>Contact us today</Link> for part-worn tyre service at your directed location.</>)

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/part-worn-tyre") {
      document.title = "Quality Part Worn Tyres - Affordable & Reliable Options";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Quality Part Worn Tyres - Affordable & Reliable Options"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Find top-quality part worn tyres at affordable prices. Reliable, inspected tyres for safe driving. Check our range and save on your next tyre purchase today!"
        );
      }
    }
  }, [location]);
  return (
    <>
          <Helmet>
        <title id="meta-title">Quality Part Worn Tyres - Affordable & Reliable Options</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/part-worn-tyre" />
        <meta name="description" id="meta-description" content="Find top-quality part worn tyres at affordable prices. Reliable, inspected tyres for safe driving. Check our range and save on your next tyre purchase today!"/>
        <meta name="robots" content="index, follow" />
      </Helmet>

     <ServicePage
        // Images
        mergedHeaderStyle="pwt"
        imgOne="/images/pwt1.png"
        imgTwo="/images/pwt2(1).png"
        imgThree="/images/pwt2(2).png"
        imgFour="/images/pwt2(3).png"
        imgFive="/images/pwt3.png"
        // Text
        pageTitle="Replace your damaged tyre with a part worn tyre"
        pageName="Part Worn Tyre"
        headingOne="Experience our part-worn tyres service"
        headingThree="Manage emergencies with part worn tyres near me"
        headingTwo="Inexpensive used tyres near me"
        headingFour="Quick fix your tyre with part-worn tyres service"
        headingFive="Immediate recovery with second-hand tyre near me"
        paraOne={paraOne}
        paraThree={paraThree}
        paraTwo="A sudden tyre problem that can't be fixed right now. You're looking at used tyres near me that temporarily fill your tyre needs. We provide you with the best-worn tyres, which our experts have already tested. Our professionals check the safety standards of the tyre and then recommend the usage. They recommend the best tyres for your travel based on your vehicle and travel requirements. These tyres ensure your safety and protect you from accidents and unexpected incidents of the car getting stuck."
        paraFour="We know that getting the car to the garage is not easy, so we bring you garage services to ease your worries. We provide you with the best services with trained professionals. Our professionals are available 24/7 to serve you regardless of time and place. They serve you at the place you are directed, no matter where you are stuck or what the time is. Our experts respond quickly and provide the best services to solve your tyre problem and resume your journey."
        paraFive="Second-hand tyres near me give you the service you need at the place you want. Our professionals are always ready to serve you regardless of location; your comfort is important to us. Frequently, tyre-related issues arise on the side of the road. They also serve you at your office to save your work schedule from disruption. They also serve you at home to maintain comfort and save you time, energy, and money. We offer you the best services at your location at an affordable price."
        scardparaOne="Our well-trained professionals manage tyre emergencies wherever you need them and offer you the best possible solution as a permanent solution that resumes the journey."
        scardparaTwo="We offer the best quality tyres based on your travel and vehicle needs. Our professionals test them to meet travel safety standards before making a recommendation."
        scardparaThree="We provide you with experts who are available 24/7 to serve you regardless of time and place. They arrive at your location quickly with a complete toolkit to fix the problem."
        scardOne="Handle emergency"
        scardTwo="Finest part worn tyres"
        scardThree="24/7 available anywhere, anytime"
        ctaText={ctaText}
        bannerSubHeading="Best service at your desired location without time and place restrictions"
     /> 
    </>
  )
}

export default PartWornTyre
