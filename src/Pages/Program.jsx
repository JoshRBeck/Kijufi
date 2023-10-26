import React from 'react';
import Schedule from '../Components/Schedule';
import FestivalRahmen from '../Components/FestivalRahmen';
import TeilFestival from '../Components/TeilFestival';
import Platzhalter from '../Components/Platzhalter';

function Program() {
	return (
		<div>
			<div className="pt-32 pl-5">
				<h1 className=" font-semibold text-[#323A64]  text-[20px]  halcyon-thin md:text-[50px]">Unser Programm für</h1>
				<p className=" w-fit p-2 mt-2 text-[11px] text-[#333C3A] md:text-[25px] bg-[#F1F7F6] rounded-[9px]">
					🕘 : Startzeit 🎬 : Filmvorführungen 🥳
					<br /> : Festival 📍 : Standort
				</p>
			</div>
			<Schedule />
			<FestivalRahmen />
			<TeilFestival />
			{/* <Platzhalter /> */}
		</div>
	);
}

export default Program;
