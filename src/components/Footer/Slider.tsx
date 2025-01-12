import { useEffect, useState } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coins.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + coins.length) % coins.length
    );
  };

  return (
    <div className="slider-container" style={{ position: "relative" }}>
      <div className="slider">
        <div
          className="slider-items"
          style={{ display: "flex", overflow: "hidden" }}
        >
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="slider-item"
              style={{
                flex: "0 0 33.3333%", // Adjust the width for 3 items visible
                padding: "0 1rem",
                transition: "transform 0.3s ease-in-out",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div
                className="card d-flex flex-column align-items-center p-2"
                style={{
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={coin.thumb}
                  alt={coin.name}
                  className="img-fluid rounded-circle mb-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <h6 className="text-uppercase">{coin.symbol}</h6>
                <p
                  className={`${
                    coin.data.price_change_percentage_24h.usd >= 0
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
                </p>
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
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="rounded-circle p-2 bg-body-tertiary fw-bold"
        style={{
          position: "absolute",
          top: "50%",
          left: "1px",
          transform: "translateY(-50%)",
          color: "black",
          border: "none",
          padding: "0.5rem",
        }}
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="rounded-circle p-2 bg-body-tertiary fw-bold"
        style={{
          position: "absolute",
          top: "50%",
          right: "1px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "black",
          border: "none",
          padding: "0.5rem",
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
