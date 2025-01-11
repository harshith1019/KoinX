import React from "react";
import TeamGrid from "./TeamGrid";
import "./TeamTab.css";

const TeamTab = () => {
  return (
    <div className="container my-4 bg-white rounded p-3" id="team">
      <h2 className="mb-3">Team</h2>
      <p className="text-muted mb-4">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <TeamGrid />
    </div>
  );
};

export default TeamTab;
