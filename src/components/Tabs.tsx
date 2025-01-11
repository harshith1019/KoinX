import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const tabs = [
    { name: "Overview", href: "#" },
    { name: "Fundamentals", href: "#fundamentals" },
    { name: "News Insights", href: "#insights" },
    { name: "Sentiments", href: "#sentiments" },
    { name: "Team", href: "#team" },
    { name: "Technicals", href: "#" },
    { name: "Tokenomics", href: "#tokenomics" },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="position-relative">
      {/* Left Arrow */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y d-md-none"
        style={{ zIndex: 1 }}
        onClick={() => handleScroll("left")}
      >
        &#8249;
      </button>

      {/* Tabs */}
      <ul
        ref={scrollContainerRef}
        className="nav nav-underline overflow-auto flex-nowrap d-flex"
        style={{
          scrollbarWidth: "none", // Hide scrollbar in Firefox
          msOverflowStyle: "none", // Hide scrollbar in IE/Edge
          paddingLeft: "2rem", // Add space on the left
          paddingRight: "2rem", // Add space on the right
          fontSize: "1rem", // Relative font size
        }}
      >
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.name}>
            <a
              className={`nav-link ${
                activeTab === tab.name ? "active" : "text-black"
              }`}
              href={tab.href}
              onClick={() => setActiveTab(tab.name)}
              style={{
                whiteSpace: "nowrap",
                fontSize: "clamp(0.9rem, 2vw, 1.2rem)", // Relative scaling
              }}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Arrow */}
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y d-md-none"
        style={{ zIndex: 1 }}
        onClick={() => handleScroll("right")}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Tabs;
