import React from "react";
import "./CardComponent.css";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const CardComponent = ({ icon, title, description }: Props) => {
  return (
    <div className="card-container bg-primary-subtle">
      <div className="icon-section">
        <div className="icon-circle">
          <img
            src={icon} // Dynamically render the passed icon
            alt="Icon"
            className="icon border-0"
          />
        </div>
      </div>
      <div className="content-section">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
