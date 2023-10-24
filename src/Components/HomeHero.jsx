import React from 'react';
import Date from '../Assets/date.png';
import gif1 from '../Assets/1.gif';
import gif2 from '../Assets/2.gif';

function HomeHero() {
	return (
		<section className="mt-32 md:mt-0 md:flex">
			<div className="bg-[#FAFCFB] py-8 md:w-[50%] md:m-auto md:h-[600px] flex items-center justify-center">
				<img className="m-auto max-w-[50%] md:object-scale-down" src={gif1} alt="" />
			</div>
			<div className="bg-[#EFF6F4] py-8 md:w-[50%] md:m-auto md:h-[600px] flex items-center justify-center">
				<img className="m-auto max-w-full" src={Date} alt="" />
			</div>
			<div className="bg-[#FAFCFB] py-8 md:w-[50%] md:m-auto md:h-[600px] flex items-center justify-center">
				<img className="m-auto max-w-[50%] md:object-scale-down" src={gif2} alt="" />
			</div>
		</section>
	);
}

export default HomeHero;
