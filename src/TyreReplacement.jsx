import React, {useEffect} from 'react'
import ServicePage from './ServicePage'
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { useCanonical } from "./canonical";

const TyreReplacement = () => {
  const { setCanonicalUrl } = useCanonical();

  useEffect(() => {
    setCanonicalUrl("https://protyrefitters.co.uk/services/part-worn-tyre");
  }, [setCanonicalUrl]);


  const paraOne = (<>You face the tyre problem, again and again, destroying the work's essence. We know that a damaged or weak tyre can be a problem for you while travelling, causing you to stop driving and strain. A damaged vehicle causes you to be late at your destination or miss your event. It disrupts the daily travel or business schedule. To remove all obstacles between you and your destination, Pro Tyre Fitters offers a mobile tyre replacement service that changes your damaged and <Link to='../services/part-worn-tyre'>Part worn tyres</Link> with new tyres and ensures that the journey is non-problematic.</>)
  const paraTwo = (<>Why do you need a Tyre replacement near me? An unhealthy tyre can lead to unpleasant incidents, such as accidents that damage you and your vehicle. You need to replace the tyre in case of <Link to='../services/burst-tyre'>burst tyres</Link>, punctures, <Link to='../services/flat-tyre'>flat tyres</Link>, deep cuts, or ageing when it has completed more of its life span. The tyre will be replaced in case of a manufacturing problem that causes the tyre to go out of balance and cause frequent air leaks. The recurrence of tyre-related problems puts an unexpected burden on you and disturbs your mood.</>)

  const location = useLocation();

  useEffect(() => {
    // Update meta title and description when route changes
    if (location.pathname === "/services/tyre-replacement") {
      document.title = "London Mobile Tyre Replacement | Fast Service";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "London Mobile Tyre Replacement | Fast Service"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Don’t wait! Our expert mobile tyre replacement service in London ensures quick, reliable, and hassle-free solutions. Get back on the road confidently."
        );
      }
    }
  }, [location]);

  return (
    <>
    <Helmet>
        <title id='meta-title'>London Mobile Tyre Replacement | Fast Service</title>
        <link rel="canonical" href="https://protyrefitters.co.uk/services/tyre-replacement" />
        <meta name="description" id='meta-description' content="Don’t wait! Our expert mobile tyre replacement service in London ensures quick, reliable, and hassle-free solutions. Get back on the road confidently."/>
        <meta name="robots" content="index, follow" />
      </Helmet>

     <ServicePage
        mergedHeaderStyle="tr"
        imgOne="/images/tr1.png"
        imgTwo="/images/tr2(1).png"
        imgThree="/images/tr2(2).png"
        imgFour="/images/tr2(3).png"
        imgFive="/images/tr3.png"
        // Text
        pageTitle="Replace your damage tyre with a tyre replacement service"
        pageName="Tyre Replacement"
        headingOne="24/7 Mobile Tyre Replacement service"
        headingTwo="Quick-fix with tyre replacement near me"
        headingThree="Rescue your vehicle by tyre replacement in London"
        headingFour="Inexpensive tyre replacement service cost"
        headingFive="Recover your vehicle with tyre replacement service"
        paraOne={paraOne}
        paraTwo={paraTwo}
        paraThree="Tyre Replacement London covers all vehicle needs, recommending the best tyres for your vehicle that suit your travel needs. To provide you with fantastic service, we have trained our experts who know all tyre-related problems and their best solutions. They provide service and guide you on how to manage the situation. Our first concern is to ensure your safety, and our professional ensures your safety before dealing with a tyre-related problem. They are fully aware of their duties and serve you beyond your expectations."
        paraFour="To replace your tyre with a new one, our professional will guide you through all the information and advise you on the best tyre suitable for your vehicle. They inform you about the tyre replacement cost and procedure. We prefer to serve you at your location, be it your home, workplace, or roadside. Our professionals arrive at your directed location with complete equipment and toolkit regardless of time. They reach your location at your one call, be it midnight or anywhere in the city, to solve your tyre problem."
        paraFive="Taking a damaged vehicle to the garage is difficult for you; it causes physical and mental strain on you. Our professionals rescue your vehicle at the place you direct, and they serve you at your doorstep, office, and roadside. They always take care of your comfort, time and energy. We also care for your pocket and provide an affordable tyre replacement service that prepares your vehicle for travel and reduces stress. Our professionals are ready to serve you 24/7, regardless of time and place, even in inclement weather."
        scardparaOne="Tyre damage is a significant safety concern as it can cause an unexpected incident that can put you and the vehicle at risk, so our priority is to ensure your safety."
        scardparaTwo="To provide you with tyre replacement service, we offer you the best professionals who are highly trained in their work, and perform their duties honestly."
        scardparaThree="We allow you to choose the area where you want tyre replacement service; our professionals are ready to serve you 24/7, be it your home, office space or roadside."
        scardOne="Ensure your safety"
        scardTwo="Serve by best professionals"
        scardThree="Serve at your desired location"
        ctaText="Call us to get your car tyres replaced with new ones using our exceptional tyre replacement service. We service you at your directed location, recommend the best tyres for your journey and serve you beyond the limit of time and place."
        bannerSubHeading="Experienced experts reach your location within 30 to 40 minutes"
     /> 
    </>
  )
}

export default TyreReplacement
