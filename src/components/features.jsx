import React from "react";
import "./features.css";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          <div className="col-md-5 feature-image-container">
            <div className="">
              {/* <img
                src={"img/features.jpg"}
                alt="Slide"
                className="feature-image"
              /> */}
            </div>
          </div>
          <div className="col-md-7">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="row features-content">
                    {" "}
                    <div className="col-md-3">
                      <i className={d.icon}></i>
                    </div>
                    <div className="col-md-9">
                      <h1 className="features-heading">{d.title}</h1>
                      <p className="features-description">{d.text}</p>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
