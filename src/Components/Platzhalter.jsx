import React from 'react';
import platzhalterImg from '../Assets/platzhalter-flyer-2.png';
import Btn from './Btn';

function Platzhalter() {
	return (
		<div className="text-center md:mb-[55px]">
			<div className=" md:text-left md:flex items-center md:max-w-[1650px] md:m-auto">
				<h3 className="text-[#323A64] font-semibold text-[16px] md:text-[50px]  mx-24 my-10">Terminübersicht Alle Projekttage der Festival-Crew</h3>
				<img className="w-full p-5" src={platzhalterImg} alt="-platzhalter flyer" />
			</div>
			<div className="m-10 md:hidden">
				<a href="https://wolke.kijufi.org/s/MqCYG2t6CaTAwom" download="platzhalter-flyer-2.pdf" rel="noopener noreferrer" target="_blank">
					<Btn text={'In anderem Fenster öffnen'} backgroundColor="bg-[#E16848] " hoverColor="hover:bg-[#B64021]" padding="py-[10px] px-[20px] md:py-[11px] md:px-[35px]" fontSize="md:text-[25px] text-white" />
				</a>
			</div>
		</div>
	);
}

export default Platzhalter;
