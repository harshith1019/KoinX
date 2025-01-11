import React from "react";

const Tabs = () => {
  return (
    <div>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Overview
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#fundumentals">
            Fundumemtals
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            News Insights
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Senitments
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Team
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Technicals
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Tokenomics
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
