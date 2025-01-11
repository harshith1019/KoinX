// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import "./TradingViewWideget.css";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
              {
                "symbols": [
                  [
                    "BITSTAMP:BTCUSD|1D"
                  ]
                ],
                "chartOnly": false,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "light",
                "autosize": true,
                "showVolume": false,
                "showMA": false,
                "hideDateRanges": false,
                "hideMarketStatus": false,
                "hideSymbolLogo": false,
                "scalePosition": "right",
                "scaleMode": "Normal",
                "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                "fontSize": "10",
                "noTimeScale": false,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "maLineColor": "#2962FF",
                "maLineWidth": 1,
                "maLength": 9,
                "headerFontSize": "medium",
                "lineWidth": 2,
                "lineType": 0,
                "dateRanges": [
                  "1d|1",
                  "1m|30",
                  "3m|60",
                  "12m|1D",
                  "60m|1W",
                  "all|1M"
                ]
              }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="container w-100 h-25">
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
