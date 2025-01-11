import React from "react";
import "./TokenomicsTab.css";

const TokenomicsTab = () => {
  const percentage = 80;
  return (
    <div className="bg-white my-4 p-3 rounded" id="tokenomics">
      <h2>Tokenomics</h2>
      <div className="container my-3">
        <h6 className="mb-2">Initial Distribution</h6>
        {/* Circular Indicator */}
        <div className="d-flex">
          <div className="circular-indicator me-4">
            <div
              className="circle"
              style={{ "--percentage1": percentage } as React.CSSProperties}
            >
              <div className="percentage-text bg-white p-3 rounded-circle">
                adh
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p>  Crowdsale Investors: {percentage}%</p>
            <p>Foundations: {100 - percentage}%</p>
          </div>
        </div>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default TokenomicsTab;
