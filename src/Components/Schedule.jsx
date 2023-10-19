import React from "react";
import position3 from "../Assets/position-3-filmklappe-gg-1.png"
import position4 from "../Assets/position-4-zwei-hande-1.png"
import position6 from "../Assets/position-6-farben-und-menschen-1.png"
import garland1 from "../Assets/garland-1.png"
import garland4 from "../Assets/garland-4.png"

function Schedule() {
  const schedule = [
    {
      day: "FR. 8.12",
      garland: garland4,
      poster: {
        imageSrc: position3,
        buttonText: "Programmdetails",
        borderColor: "#F7DF3F"
      },
      events: [
        {
          Startzeit: "🕘 10.00",
          Filmvorführungen: "🎬 Kurzfilm-Programm für Schulklasse",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 16.00",
          Filmvorführungen: "🎬Festivaleröffnung",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 19.00",
          Filmvorführungen: "",
          Festival: "🥳 Festival-Party (Nur mit einladung)",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
      ],
    },
    {
      day: "SA. 9.12",
      garland: garland1,
      poster: {
        imageSrc: position4,
        buttonText: "Programmdetails",
        borderColor: "#D5E7E3B2"
      },
      events: [
        {
          Startzeit: "🕘 11.00",
          Filmvorführungen: "🎬 Kurzfilmprogramm 1",
          Standort: "📍 Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 13.00",
          Filmvorführungen: "",
          Festival: "🥳 Filmmakers Lunch / Meet & Greet",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
        {
          Startzeit: "🕘 15.30",
          Filmvorführungen: "🎬 Kurzfilmprogramm 1",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 1",
        },
        {
          Startzeit: "🕘 17.30",
          Filmvorführungen: "",
          Festival: "🥳Talk + Filmmakers Dinner",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
        {
          Startzeit: "🕘 19.30",
          Filmvorführungen: " 🎬 Kinderrechte-Überraschungsfilm 1",
          Festival: "",
          Standort: "📍Jugendkulturzentrum Königstadt",
        },
      ],
    },
    {
      day: "SO. 10.12",
      garland: garland4,
      poster: {
        imageSrc: position6,
        buttonText: "Programmdetails",
        borderColor: "#EEA7828F"
      },
      events: [
        {
          Startzeit: "🕘 11.00",
          Filmvorführungen:
            "🎬Publikumsfavoriten + Kinderrechte-Überraschungsfilm 2",
          Festival: "",
          Standort: "📍Filmtheater am Friedrichshain, Saal 2",
        },
      ],
    },
  ];

  return (
    <div className="p-10">
      {schedule.map((dayInfo, dayIndex) => (
        <div
          key={dayIndex}
          className={`p-2 sm:p-10 flex flex-col justify-center w-full`}
        >
          <div className="w-full garland-container">
            <img src={dayInfo.garland} alt={`Garland for ${dayInfo.day}`} className="w-full" />
          </div>
          <div className={`w-full flex flex-col md:flex-row justify-center items-center ${dayIndex === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 p-5 flex-col justify-center items-center">
              <h2 className="text-3xl font-HalcyonBlack text-[#323A64] text-shadow-md drop-shadow-[0_4px_4px_rgba(255,255,255,1)]">{dayInfo.day}</h2>
              <ul className="text-justify">
                {dayInfo.events
                  .filter((event) => (
                    event.Startzeit || event.Filmvorführungen || event.Festival || event.Standort
                  ))
                  .map((event, eventIndex) => (
                    <li key={eventIndex} className="p-5 sm:p-2">
                      {event.Startzeit && <div className="font-HalcyonMedium text-2xl">{event.Startzeit}</div>}
                      {event.Filmvorführungen && <div className="font-HalcyonMedium text-2xl tracking-normal break-all">{event.Filmvorführungen}</div>}
                      {event.Festival && <div className="font-HalcyonBlack text-2xl tracking-normal break-all">{event.Festival}</div>}
                      {event.Standort && <div className="font-HalcyonMedium text-2xl tracking-normal break-all">{event.Standort}</div>}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 hidden md:flex flex-col items-center justify-around">
              <div style={{ maxWidth: '80%', height: 'auto', margin: '0 auto' }}>
                <img
                  src={dayInfo.poster.imageSrc}
                  alt={`Poster for ${dayInfo.day}`}
                  style={{
                    width: '100%',
                    border: `18px solid ${dayInfo.poster.borderColor}`,
                    borderRadius: '10px'
                  }}
                />
              </div>
              <button type="button" className="bg-gray-200 font-HalcyonBlack rounded-full text-2xl py-2 px-4 mt-2 shadow-md mx-auto">
                {dayInfo.poster.buttonText}
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Schedule;