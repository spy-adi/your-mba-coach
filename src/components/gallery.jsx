import React from "react";
import "./gallery.css";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="row">
              <div className="col-md-6 gallery_video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/DkFsq8pjqfg"
                  title="GDPI 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-md-6 gallery_video">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/XrWur9AUXJo"
                  title="GDPI 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};