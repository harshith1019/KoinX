import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutTab = () => {
  const [info, setInfo] = useState<{
    id: string;
    name: string;
    description: {
      en: string;
    };
  }>({
    id: "",
    name: "",
    description: {
      en: "",
    },
  });

  const getInfo = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin?x_cg_demo_api_key=CG-DkK9hgNAa1spfSt1osjXKuWY"
      );
      const data = response.data;
      setInfo(data); // Update the state with the fetched data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="bg-white my-4 p-3 rounded">
      <h4>About {info.name || "Bitcoin"}</h4>
      <h6 className="mt-4">What is {info.name}?</h6>
      <div
        dangerouslySetInnerHTML={{
          __html: info.description.en || "No description available.",
        }}
      ></div>
    </div>
  );
};

export default AboutTab;
