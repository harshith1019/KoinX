import Card from "./Card";
import Trending from "./Trending";
const Aside = () => {
  return (
    <div className="col-lg-4">
      <Card />
      <div className="my-3">
        <Trending />
      </div>
    </div>
  );
};

export default Aside;
