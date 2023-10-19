import React from 'react';
import Siege from '../Assets/siege.png';
import Date from '../Assets/date.png';

function HomeHero() {
	return (
		<section className="mt-8 md:mt-0 md:flex ">
			<div className="bg-[#FAFCFB] py-8 md:w-[50%] md:m-auto md:h-[600px] flex items-center justify-center ">
				<img className="m-auto" src={Siege} alt="" />
			</div>
			<div className="bg-[#D5E7E3] py-8 md:w-[50%] md:m-auto md:h-[600px] flex items-center justify-center  ">
				<img className="m-auto " src={Date} alt="" />
			</div>
		</section>
	);
}

export default HomeHero;
