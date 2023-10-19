import React from 'react';

function Platzhalter() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-[#323A64] text-2xl text-center px-20 pb-10">
        Terminübersicht
        Alle Projekttage der
        Festival-Crew
      </h3>
      <img className="px-10" src={require("../Assets/platzhalter-flyer-2.png")} alt="-platzhalter flyer" />
      <a
        href="https://wolke.kijufi.org/s/MqCYG2t6CaTAwom" 
        download="platzhalter-flyer-2.pdf"
        className="btn bg-[#E16848] text-white font-bold py-2 px-4 rounded-full mt-10 mb-15"
        rel="noopener noreferrer" 
        target="_blank" 
      >
        PDF Herunterladen
      </a>
    </div>
  );
}

export default Platzhalter;
