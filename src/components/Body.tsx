import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import Tabs from "./Tabs";
import OverviewTab from "./OverviewTab";
import SentimentTab from "./SentimentTab";
import AboutTab from "./AboutTab";
import TokenomicsTab from "./TokenomicsTab";
import TeamTab from "./TeamTab";

const Body = () => {
  return (
    <div className="col-lg-8 me-lg-3 bg-body-tertiary">
      <TradingViewWidget />
      <Tabs />
      <OverviewTab />
      <SentimentTab />
      <AboutTab />
      <TokenomicsTab />
      <TeamTab />
    </div>
  );
};

export default Body;
