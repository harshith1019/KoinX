import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Slider from "./Slider";

const Footer = () => {
  return (
    <div className="footer bg-light py-3">
      <h5 className="text-center mb-4">You May Also Like</h5>
      <Slider />
      <h5 className="text-center my-4">Trending Coins</h5>
      <Slider />
    </div>
  );
};

export default Footer;
