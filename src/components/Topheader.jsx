import React from "react";

const topheader = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-success px-5 d-none d-lg-block main-top-bar">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61561130873770"
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                target="_blank"
                href="https://www.linkedin.com/in/protyre-fitters-5025a9310/"
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                target="_blank"
                href="https://www.instagram.com/protyrefitters/"
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                target="_blank"
                href="https://x.com/ProtyreFitters"
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center top-header-icons"
              style={{ height: "45px" }}
            >
              {/* <small className="text-light"><i className="fa-solid fa-map me-2"></i>If you see us, we cover your area</small> */}
              <small className="text-light fs-5 fw-bold">
                <a
                  href="tel:442035041723"
                  className="text-white text-decoration-none"
                >
                  <i className="fa-solid fa-phone me-2"></i>+44 2035041723
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
};

export default topheader;
