import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Aside from "./components/Aside";
import BreadCrumb from "./BreadCrumb";

function App() {
  return (
    <>
      <div className="bg-body-tertiary">
        <Navbar />
        <div className="container mt-2">
          <BreadCrumb />
        </div>
        <div className="container d-lg-flex">
          <Body />
          <Aside />
        </div>
      </div>
    </>
  );
}

export default App;
