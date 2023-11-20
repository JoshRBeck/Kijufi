import React from 'react';
import { Helmet } from 'react-helmet'
import Schedule from '../Components/Schedule';
import FestivalRahmen from '../Components/FestivalRahmen';
import TeilFestival from '../Components/TeilFestival';
import Platzhalter from '../Components/Platzhalter';


function Program() {
	return (
		<div>
			<Helmet>
				<title>Programm - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023</title>
				<meta name="description" content="Erfahren Sie mehr über das Festival-Programm, den Zeitplan und wie Sie als Freiwillige mitwirken können." />
				<meta name="keywords" content="Programm, Festivalablauf, Zeitplan, Freiwillige, Volunteers, Gemainsam Grenzenlos, Kinderrechte Filmfestival, Kinderrechte-Filmfestival" />

				<meta property="og:title" content="Programm - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023" />
				<meta property="og:description" content="Erfahren Sie mehr über das Festival-Programm, den Zeitplan und wie Sie als Freiwillige mitwirken können." />
				<meta property="og:url" content="http://kinderrechte-filmfestival.de/programm" />

				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="canonical" href="http://kinderrechte-filmfestival.de/programm" />
			</Helmet>
			<div className="pt-32 pl-5 md:text-center">
				<h1 className=" font-semibold text-[#323A64]  text-[20px]  halcyon-thin md:text-[50px]">Unser Festivalprogramm</h1>
				<p className=" w-[200px] p-4 mt-2 text-[16px] text-[#333C3A] bg-[#F1F7F6] rounded-[15px] md:text-[25px] md:m-auto md:w-fit ">🕘 : Startzeit 🎬 : Filmvorführungen 🥳 : Festival 📍 : Standort</p>
			</div>
			<Schedule />
			{/* <section id="#scrollToMe">
				<TeilFestival />
			</section> */}
			<FestivalRahmen />
			<Platzhalter />
		</div>
	);
}

export default Program;
