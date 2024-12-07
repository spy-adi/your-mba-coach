import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
// import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <About data={landingPageData.About} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Features data={landingPageData.Features} />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Services data={landingPageData.Services} /> */}
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf0AeYmQtT3xlpKXcaLIqdHmtxlZ-8UYkMd6AY8zriuSvpOrg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-custom btn-lg btn-enroll-now"
      >
        Enroll Now
      </a>{" "}
    </div>
  );
};

export default App;
