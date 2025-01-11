import React from "react";
import Cardsvg from "./Card/Cardsvg";

const Card = () => {
  return (
    <div className="container rounded bg-primary p-4">
      <div className="text-center text-white">
        {/* Cardsvg for smaller screens at the top */}
        <div className="d-block d-lg-none mb-3">
          <Cardsvg />
        </div>

        {/* Heading */}
        <h3 className="fs-5 fs-lg-3 text-truncate">
          Get Started with KoinX for FREE!
        </h3>

        {/* Description */}
        <p style={{ fontSize: "0.9rem" }} className="py-1">
          With our wide range of features that you can equip for free, KoinX
          allows you to be more educated and aware of your tax reports.
        </p>

        {/* Cardsvg for larger screens below the description */}
        <div className="d-none d-lg-block my-3">
          <Cardsvg />
        </div>

        {/* Button */}
        <button className="btn btn-light mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <p
              className="m-0 me-2 text-wrap text-nowrap fw-bold"
              style={{ fontSize: "0.8rem" }}
            >
              Get Started for FREE
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
