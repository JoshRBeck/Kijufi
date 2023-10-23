import React from 'react';
import Schedule from '../Components/Schedule';
import FestivalRahmen from '../Components/FestivalRahmen';
import TeilFestival from '../Components/TeilFestival';
import Platzhalter from '../Components/Platzhalter';

function Program() {
	return <div><div>
		<div className="p-10 flex justify-center align-middle items-center flex-col">
			<h1 className="font-semibold text-[#323A64] text-center p-10 text-4xl halcyon-thin">
				Unser Programm für Filmemacher
			</h1>
			<p className="flex justify-center items-center text-2xl bg-[#F1F7F6] w-fit text-center rounded-full">
				🕘 : Startzeit 🎬 : Filmvorführungen 🥳 : Festival 📍 : Standort
			</p>
		</div>
		<Schedule />
		<FestivalRahmen />
		<TeilFestival />
		<Platzhalter />
	</div></div>;
}

export default Program;
