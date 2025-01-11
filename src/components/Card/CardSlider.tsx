import React, { useState } from "react";
import CardComponent from "./CardComponent";
import newspaper from "../../assets/newspaper.svg";

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for the cards
  const cards = [
    {
      id: 1,
      icon: newspaper,
      title:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      id: 2,
      icon: newspaper,
      title:
        "Ac consectetur pretium in a bibendum. Sed vitae sit nisi viverra lacinia libero.",
      description:
        "Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi natoque libero enim.",
    },
    {
      id: 3,
      icon: newspaper,
      title: "Natoque libero enim ac phasellus risus est faucibus metus quis.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet sapien quam viverra adipiscing condimentum. Sed vitae sit nisi natoque lacinia libero enim.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-between position-relative">
        {/* Left Arrow */}
        <button
          className="btn btn-link text-primary d-flex align-items-center"
          onClick={handlePrevious}
          style={{ position: "absolute", left: "-10px", zIndex: 10 }}
        >
          <i
            className="bi bi-arrow-left"
            style={{ fontSize: "20px", marginRight: "5px" }}
          ></i>
        </button>

        {/* Slider Container */}
        <div
          className="card-slider-container d-flex"
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            className="d-flex"
            style={{
              gap: "1rem",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.3s ease",
              width: "100%",
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  flex: "0 0 100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Pass card data to CardComponent */}
                <CardComponent
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="btn btn-link text-primary d-flex align-items-center"
          onClick={handleNext}
          style={{ position: "absolute", right: "-10px", zIndex: 10 }}
        >
          <i
            className="bi bi-arrow-right"
            style={{ fontSize: "20px", marginLeft: "5px" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
