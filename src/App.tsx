import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="bg-body-tertiary">
      <Navbar />
      <div className="container my-2 d-lg-flex">
        <Body />
        <Aside />
      </div>
    </div>
  );
}

export default App;
