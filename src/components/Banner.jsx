import React from "react";
import logo from "../assets/images/logo2.png";

const Banner = () => {
  return (
    <>
      {/* Banner */}
      <section className="pc-home-banner p-3 mt-3">
        <div className="container mx-auto py-3">
          <div className="row">
            {/* 1 */}
            <div className="col-lg-6">
              <h2 className="text-white">
                <b>24-hour mobile tyre fitting for emergency</b>
              </h2>
              <div>
                <p className="text-white">
                  Our 24-hour mobile tyre fitting service serves you beyond your
                  expectations. They reach your location in the middle of the
                  night or bad weather. Our experts come with a complete toolkit
                  to save you from physical and mental stress. We provide
                  services to you at your desired location. Most tyre-related
                  problems occur on the side of the road, exposing you to
                  unexpected stress and incidents. They serve you at the
                  roadside, at home, and even at your workplace to save time.
                </p>
              </div>
              {/* Banner Icons Box */}
              <div className="pc-bi-box">
                {/* Icons */}
                <div className="pc-home-banner-icon d-flex gap-2 align-items-center">
                  <div>
                    <i class="fa-solid fa-envelope fa-2xl"></i>
                  </div>
                  <div>
                    <span className="d-block text-white">
                      For Email Enquiry
                    </span>
                    <h5><a href="mailto:info@protyrefitters.com" className="tc-text-color" style={{textDecoration:'none'}}>info@protyrefitters.com</a></h5>
                    <span className="d-block text-white">
                      We are present 24/7
                    </span>
                  </div>
                </div>
                {/* Icons */}
                {/* Icons */}
                <div className="pc-home-banner-icon d-flex gap-2 align-items-center">
                  <div>
                    <i className="fa-solid fa-phone fa-2xl"></i>
                  </div>
                  <div>
                    <span className="d-block text-white">
                      For Booking Rides
                    </span>
                    <h5><a href="tel: +442033939473" className="tc-text-color" style={{textDecoration:'none'}}>+44 2035041723</a></h5>
                    <span className="d-block text-white">
                      We are present 24/7
                    </span>
                  </div>
                </div>
                {/* Icons */}
              </div>
              {/* Banner Icons Box */}
            </div>
            {/* 2 */}
            <div className="col-lg-6 mt-3">
              <div>
                <img
                  src={"images/map.png"}
                  alt="map"
                  className="img-fluid map-image"
                />
                {/* Numbers */}
                <div className="pc-bannerNumbers">
                  {/* 1 */}
                  <div>
                    <h2 className="tc-text-color">1,000</h2>
                    <span className="d-block text-white">Customer</span>
                  </div>
                  {/* 2 */}
                  <div>
                    <h2 className="tc-text-color">1,000</h2>
                    <span className="d-block text-white">Customer</span>
                  </div>
                  {/* 3 */}
                  <div>
                    <h2 className="tc-text-color">1,000</h2>
                    <span className="d-block text-white">Customer</span>
                  </div>
                  {/* END */}
                </div>
                {/* Numbers */}
              </div>
            </div>
            {/* End */}
          </div>
        </div>
        <div className="hover-logo">
          <img src={logo} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default Banner;
