import React from "react";
import { Link } from "react-router-dom";
// import { Row, Col, Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";

const AreasPage = ({ pageTitle, ...otherProps }) => {
    const {
        mergedHeaderStyle
      } = otherProps;
    return (
    <>
     {/* Banner Section */}
     <header className={mergedHeaderStyle}>
        <h1>{pageTitle}</h1>
        <h5>
          <Link to="/" className="linkStyle">
            <i class="fa-solid fa-house"></i> Home{" "}
          </Link>{" "}
          | {pageTitle}
        </h5>
      </header> 
    </>
  )
}

export default AreasPage
