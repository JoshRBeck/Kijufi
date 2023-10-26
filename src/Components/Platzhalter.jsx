import React from 'react';
// import vector13 from "../Assets/vector13.png";

function Platzhalter() {
	return (
		<div className="relative flex flex-col md:flex-row items-center justify-center h-60vh">
			{/* <img src={vector13} alt="" className='z-0 absolute left-0' /> */}
			<h3 className="text-[#323A64] font-bold text-[16px] md:text-[50px] w-3/5 text-center px-20 pb-10 z-10 relative">Terminübersicht Alle Projekttage der Festival-Crew</h3>
			<img className="px-10 z-10 relative" src={require('../Assets/platzhalter-flyer-2.png')} alt="-platzhalter flyer" />
			<a href="https://wolke.kijufi.org/s/MqCYG2t6CaTAwom" download="platzhalter-flyer-2.pdf" className="btn bg-[#E16848] text-white text-[16px] md:text-[25px] font-bold py-2 px-4 rounded-full mt-10 mb-32 md:hidden z-10 relative" rel="noopener noreferrer" target="_blank">
				PDF Herunterladen
			</a>
		</div>
	);
}

export default Platzhalter;
