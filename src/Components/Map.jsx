import React from "react";
import Berlin from "../Assets/smallermap.png";

function Map() {
  return (
    <div className="flex justify-center">
      <img src={Berlin} alt="Cartography" className="w-90% md:w-auto" />
    </div>
  );
}

export default Map;
