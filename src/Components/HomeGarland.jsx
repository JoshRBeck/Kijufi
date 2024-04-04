import React from 'react';
import garland1 from '../Assets/garland1.png';
// import Crew1 from '../Assets/CrewPics/Crew1.jpg'
// import Crew2 from '../Assets/CrewPics/Crew2.jpg'
// import Crew3 from '../Assets/CrewPics/Crew3.jpg'

function HomeGarland() {
	return (
		<div className="hidden xl:block border-red-500 border-2 relative">
			<div className="">
				<img className="m-auto border-yellow-300 border-4 h-[630px] max-w-full overflow-hidden" src={garland1} alt="garland" />
			</div>
			<div className="border-green-500 border-2 flex flex-row justify-center top-0 absolute left-0 right-0">
				<div className="border-blue-500 border-4 h-[500px] w-1/3" ></div>
				<div className="border-blue-500 border-4 h-[500px] w-1/3"></div>
				<div className="border-blue-500 border-4 h-[500px] w-1/3"></div>
			</div>
		</div>
	);
}

export default HomeGarland;
