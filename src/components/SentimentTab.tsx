import Carousel from "./Card/CardSlider";
import AnalystEstimates from "./AnalystEstimates/AnalystEstimates";

const SentimentTab = () => {
  return (
    <div className="bg-white my-4 rounded container p-3" id="sentiments">
      <h2>Sentiment</h2>
      <h4 className="pt-4">Key Events</h4>
      <div className="container">
        <Carousel />
      </div>
      <h4 className="py-4" id="insights">
        Analyst Estimates
      </h4>
      <AnalystEstimates buy={76} sell={8} hold={16} />
    </div>
  );
};

export default SentimentTab;
