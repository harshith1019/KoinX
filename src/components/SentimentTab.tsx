import React from "react";
import Carousel from "./CardSlider";

const SentimentTab = () => {
  return (
    <div className="bg-white my-4 rounded">
      <h2 className="p-2">Sentiment</h2>
      <h4 className="p-2">Key Events</h4>
      <div className="container">
        <Carousel />
      </div>
      <h4 className="p-2">Analyst Estimates</h4>
    </div>
  );
};

export default SentimentTab;
