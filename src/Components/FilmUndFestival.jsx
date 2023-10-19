import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import jugendkulturzentrum from "../Assets/jugendkulturzentrum.png";
import filmTheater from "../Assets/filmTheater.png";

function FilmUndFestival() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Box for Filmvorführungen */}
      <div className="w-full md:w-1/2 flex flex-col items-center max-w-full text-center p-4">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Für die Filmvorführungen!</h1>
        <div className="flex justify-center">
          <img
            src={filmTheater}
            alt="film theater"
            className="w-250 h-250 md:w-400 md:h-400 lg:max-h-100 lg:w-auto"
          />
        </div>
        <div className="text-center">
          <h3 className="font-bold">Filmtheater am Friedrichshain</h3>
          <p className="p-2">
            Bötzowstraße 1-5, 10407 Berlin
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-red-600 ml-2"
            />
          </p> 
        </div>
      </div>
      {/* Box for Festival */}
      <div className="w-full md:w-1/2 bg-[#d5e7e361] flex flex-col items-center max-w-full text-center p-4">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Für das Festival!</h1>
        <div className="flex justify-center">
          <img
            src={jugendkulturzentrum}
            alt="youth culture center"
            className="w-250 h-250 md:w-400 md:h-400 lg:max-h-100 lg:w-auto"
          />
        </div>
        <div className="text-center">
          <h3 className="font-bold">Jugendkulturzentrum Königstadt</h3>
          <p className="p-2">
            Saarbrücker Str. 24, 10405 Berlin
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-blue-900 ml-2"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilmUndFestival;
