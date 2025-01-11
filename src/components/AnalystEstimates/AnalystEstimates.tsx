import React from "react";
import "./AnalystEstimates.css"; // Optional for custom styling

interface EstimateProps {
  buy: number;
  hold: number;
  sell: number;
}

const AnalystEstimates: React.FC<EstimateProps> = ({ buy, hold, sell }) => {
  const total = buy + hold + sell;

  return (
    <div className="analyst-estimates-container d-flex align-items-center p-3">
      {/* Circular Percentage Indicator */}
      <div className="circular-indicator me-4">
        <div className="circle">
          <div className="percentage">{buy}%</div>
        </div>
      </div>

      {/* Estimates List */}
      <div className="estimates-list w-100">
        {/* Buy */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span>Buy</span>
          <div className="progress flex-grow-1 mx-3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${(buy / total) * 100}%` }}
              aria-valuenow={buy}
              aria-valuemin={0}
              aria-valuemax={total}
            ></div>
          </div>
          <span>{buy}%</span>
        </div>
        {/* Hold */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span>Hold</span>
          <div className="progress flex-grow-1 mx-3">
            <div
              className="progress-bar bg-secondary"
              role="progressbar"
              style={{ width: `${(hold / total) * 100}%` }}
              aria-valuenow={hold}
              aria-valuemin={0}
              aria-valuemax={total}
            ></div>
          </div>
          <span>{hold}%</span>
        </div>
        {/* Sell */}
        <div className="d-flex justify-content-between align-items-center">
          <span>Sell</span>
          <div className="progress flex-grow-1 mx-3">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: `${(sell / total) * 100}%` }}
              aria-valuenow={sell}
              aria-valuemin={0}
              aria-valuemax={total}
            ></div>
          </div>
          <span>{sell}%</span>
        </div>
      </div>
    </div>
  );
};

export default AnalystEstimates;
