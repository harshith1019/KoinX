import axios from "axios";
import React, { useEffect, useState } from "react";

const Trending = () => {
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
        const visibleCoins = coins1.slice(0, 3);
        setCoins(visibleCoins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    getCoins();
  }, []);

  return (
    <div className="bg-white p-3 rounded">
      <h6>Trending Coins (24h)</h6>
      <ul className="p-3 m-0 list-unstyled">
        {coins.map((coin) => (
          <li
            key={coin.id}
            className="d-flex align-items-center justify-content-between py-2 border-bottom"
          >
            <div className="d-flex align-items-center">
              <img
                src={coin.thumb}
                alt={coin.name}
                className="me-2 rounded-circle"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="text-truncate" style={{ maxWidth: "150px" }}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </span>
            </div>
            <div className="text-center p-0 rounded">
              {coin.data.price_change_percentage_24h.usd >= 0 ? (
                <span className="text-success bg-success-subtle rounded p-1 d-flex align-items-center">
                  <i className="bi bi-caret-up-fill me-1"></i>
                  {coin.data.price_change_percentage_24h.usd.toFixed(2)}%
                </span>
              ) : (
                <span className="text-danger bg-danger-subtle rounded p-1 d-flex align-items-center">
                  <i className="bi bi-caret-down-fill me-1"></i>
                  {Math.abs(coin.data.price_change_percentage_24h.usd).toFixed(
                    2
                  )}
                  %
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
