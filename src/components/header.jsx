import React, { useState, useEffect } from "react";
import "./header.css";

export const Header = (props) => {
  const images = [
    // "img/header/header_1.jpg",
    "img/header/header_2.jpg",
    "img/header/header_3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header id="header">
      <div className="intro">
        <div className="">
          <div className="row">
            <div className="col-md-6 intro-photo">
              {/* Image Slider */}
              <div className="slider-container">
                <img
                  src={images[currentIndex]}
                  alt="Slide"
                  className="slider-image"
                />
                {/* <button className="slider-btn prev-btn" onClick={prevSlide}>
                  &#10094;
                </button>
                <button className="slider-btn next-btn" onClick={nextSlide}>
                  &#10095;
                </button> */}
              </div>
            </div>
            <div className="col-md-6 intro-text">
              <div className="header-content">
                <h2 className="heading-1">Master MBA InterviewS</h2>
                <h3 className="heading-2">with</h3>
                <h1 className="heading-3">Hemant Tulsan</h1>
                <h3>
                  MBA, IIM Kozhikode’24
                  <br />
                  Converted IIM K, S, CAP, GLIM. Waitlisted FMS, IIM L, MDI.
                  <br />
                  (Did not fill any other forms)
                  <br />
                  81%,84.33%,72.6% [ B.Com (H)], St. Xavier's College,
                  Kolkata. EWS category
                </h3>
                <h3>
                  Land your dream B-school with a complete guide to crack
                  GD-PI-WAT for MBA Admissions
                </h3>
                {/* <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
