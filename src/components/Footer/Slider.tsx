import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

const Slider = () => {
  const [coins, setCoins] = useState<
    {
      id: string;
      name: string;
      symbol: string;
      thumb: string;
      data: {
        price_change_percentage_24h: {
          usd: number;
        };
        sparkline: string;
      };
    }[]
  >([]);

  useEffect(() => {
    const getCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-DkK9hgNAa1spfSt1osjXKuWY"
        );
        const data = response.data;
        const coins1 = data.coins.map((coin: any) => coin.item);
        console.log(coins1);
        setCoins(coins1);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    getCoins();
  }, []);
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={3} // Adjust the number of slides shown
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      style={{ padding: "0 1rem" }}
    >
      {coins.map((coin) => (
        <SwiperSlide key={coin.id}>
          <div
            className="card d-flex flex-column align-items-center p-2"
            style={{
              width: "100%",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            {/* Thumbnail */}
            <img
              src={coin.thumb}
              alt={coin.name}
              className="img-fluid rounded-circle mb-2"
              style={{ width: "40px", height: "40px" }}
            />
            {/* Symbol */}
            <h6 className="text-uppercase">{coin.symbol}</h6>
            {/* Price Change Percentage */}
            <p
              className={`${
                coin.data.price_change_percentage_24h.usd >= 0
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
            </p>
            {/* Sparkline */}
            {coin.data.sparkline && (
              <img
                src={coin.data.sparkline}
                alt={`${coin.name} sparkline`}
                className="img-fluid mt-2"
                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                }}
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
