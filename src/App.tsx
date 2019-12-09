import React from "react";
import "./App.scss";

import EarthImage from "./assets/earth.png";

const App: React.FC = () => {
  return (
    <div
      className="reflection"
      style={{ backgroundImage: `url(${EarthImage})`, color: "red" }}
    ></div>
  );
};

export default App;
