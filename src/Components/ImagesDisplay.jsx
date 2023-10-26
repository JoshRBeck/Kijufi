import React from 'react';

import garland1 from '../Assets/garland1.png';
import garland2 from '../Assets/garland2.png';
import garland3 from '../Assets/garland3.png';
import position3 from '../Assets/position3.png';
import position4 from '../Assets/position4.png';
import position1 from '../Assets/position-1-erdkugel-mit-menschen-und-klappe.png';
import grenzenlos from '../Assets/grenzenlos-1.png';
import grenzenlos2 from '../Assets/wir-sind-grenzenlos-1.png';
import position6 from '../Assets/position6.png';

const imageDisplay = [
	{
		garland: garland1,
		image1: {
			imageSrc: grenzenlos,
			borderColor: '#F7DF3F',
		},
		image2: {
			imageSrc: grenzenlos2,
			borderColor: '#3498db',
		},
	},
	{
		garland: garland2,
		image1: {
			imageSrc: position3,
			borderColor: '#e74c3c',
		},
		image2: {
			imageSrc: position1,
			borderColor: '#27ae60',
		},
	},
	{
		garland: garland3,
		image1: {
			imageSrc: position4,
			borderColor: '#ff9900',
		},
		image2: {
			imageSrc: position6,
			borderColor: '#8e44ad',
		},
	},
];

function Zeichnungen() {
	return (
		<div>
			{imageDisplay.map((item, index) => (
				<div key={index} className="relative flex flex-col items-center">
					<div className="w-2/3 h-auto max-h-48 ">
						<img src={item.garland} alt={`Garland ${index}`} className="w-full" />
					</div>
					<div className="flex relative mt-10">
						<div className="w-1/2 p-4">
							<img src={item.image1.imageSrc} alt={`Alt text 1 ${index}`} className="w-48 max-w-full h-auto border-4 border-solid rounded-2xl" style={{ borderColor: item.image1.borderColor }} />
						</div>
						<div className="w-1/2 p-4">
							<img src={item.image2.imageSrc} alt={`Alt text 2 ${index}`} className="w-48 max-w-full h-auto border-4 border-solid rounded-2xl" style={{ borderColor: item.image2.borderColor }} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Zeichnungen;
