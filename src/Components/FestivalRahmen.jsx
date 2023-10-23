import React from 'react';

function FestivalRahmen() {
  return (
    <div className="flex flex-col m-10 container mx-auto px-10 text-center tracking-normal break-all rounded-3xl bg-[#EFF6F4]">
      <h2 className="pt-10 pb-10 font-bold tracking-normal break-all text-[22.24px] md:text-[40px] relative pl-2">
        <span className="text-[#323A64] relative">
          RAHMENPROGRAMM & MEHR
        </span>
        <span className="absolute -inset-4 -z-10 text-white">
          RAHMENPROGRAMM & MEHR
        </span>
        <span className="absolute left-1 top-0.5 text-outline text-white pl-2">
          RAHMENPROGRAMM & MEHR
        </span>
      </h2>
      <p className="pb-20 pl-10 pr-10 text-justify whitespace-normal break-normal text-[13.9] md:text-[25px]" >
        Die Festival-Vorbereitungen laufen auf Hochtouren. Mehr Infos zur Festivalparty, zum Catering und weiteren Events im Begleitprogramm könnt ihr spätestens Ende November hier nachlesen.
        <br /><br />
        Ihr kommt aus Berlin und habt Lust, als Mitglied der Crew das Festival mitzugestalten. Dann lest weiter unten, wie ihr das tun könnt.
      </p>
    </div>
  );
}

export default FestivalRahmen;
