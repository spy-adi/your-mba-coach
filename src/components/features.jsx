import React from "react";
import "./features.css";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="col-md-10 col-md-offset-1 section-title">
        <h2>Features</h2>
      </div>
      <div className="row">
        {/* <div className="col-md-12">
            <div className="feature-image-container">
              <img
                src={"img/features.jpg"}
                alt="Slide"
                className="feature-image"
              />
            </div>
          </div> */}
        <div className="col-md-12">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
