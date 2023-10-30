import React from 'react';
import Schedule from '../Components/Schedule';
import FestivalRahmen from '../Components/FestivalRahmen';
import TeilFestival from '../Components/TeilFestival';
import Platzhalter from '../Components/Platzhalter';
import Btn from '../Components/Btn';

function Program() {
	return (
		<div>
			<div className="pt-32 pl-5 md:text-center">
				<h1 className=" font-semibold text-[#323A64]  text-[20px]  halcyon-thin md:text-[50px]">Unser Programm für Filmemacher</h1>
				<p className=" w-[200px] p-2 mt-2 text-[11px] text-[#333C3A] bg-[#F1F7F6] rounded-[9px] md:text-[25px] md:m-auto md:w-fit ">🕘 : Startzeit 🎬 : Filmvorführungen 🥳 : Festival 📍 : Standort</p>
			</div>
			<Schedule />
			<div className="text-center my-5">
				<Btn text={'Programmdetails'} backgroundColor="bg-[#ECEEF5]" hoverColor="hover:bg-[#979FBD]" padding="py-[5px] px-[20px] md:py-[11px] md:px-[35px]" fontSize="md:text-[25px]" />
			</div>

			<FestivalRahmen />
			<TeilFestival />
			<Platzhalter />
		</div>
	);
}

export default Program;
