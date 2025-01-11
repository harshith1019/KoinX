import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import Tabs from "./Tabs";

const Body = () => {
  return (
    <div className="col-lg-8 me-lg-3">
      <TradingViewWidget />
      <Tabs />
    </div>
  );
};

export default Body;
