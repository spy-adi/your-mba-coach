import React, { useState, useEffect } from "react";
import "./testimonials.css";

export const Testimonials = (props) => {
  const images = [
    "img/testimonials/testimonial_1.jpg",
    "img/testimonials/testimonial_2.jpg",
    "img/testimonials/testimonial_3.jpg",
    "img/testimonials/testimonial_4.jpg",
    "img/testimonials/testimonial_5.jpg",
    "img/testimonials/testimonial_6.jpg",
    "img/testimonials/testimonial_7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Handlers for navigation buttons
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our Mentees say</h2>
        </div>

        {/* Image Slider */}
        <div className="testimonials-slider-container">
          <div>
            <img
              src={images[currentIndex]}
              alt="Slide"
              className="testimonials-slider-image"
            />
          </div>
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};
