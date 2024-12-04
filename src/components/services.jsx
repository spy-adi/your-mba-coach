import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            {/* <img src={props.data.image.image1} alt="image1"></img> */}
          </div>
          <div className="col-md-4">
            <div className="row">
              {props.data
                ? props.data.content.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                      {" "}
                      <i className={d.icon}></i>
                      <div className="service-desc">
                        <h3>{d.name}</h3>
                        <p>{d.text}</p>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
          <div className="col-md-4">Hello</div>
        </div>
      </div>
    </div>
  );
};
