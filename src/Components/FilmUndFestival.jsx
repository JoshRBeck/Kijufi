import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import filmTheater from '../Assets/filmTheater.png';
import jugendkulturzentrum from '../Assets/jugendkulturzentrum.png';

function FilmUndFestival() {
	return (
		<div className="flex flex-col items-center md:flex-row text-center">
			{/* Box for Filmvorführungen */}
			<div className="w-full block md:flex items-center flex-col p-4">
				<h1 className="text-2xl lg:text-3xl font-bold mb-2">Für die Filmvorführungen!</h1>
				<div className="flex flex-col">
					{' '}
					{/* Center the content vertically */}
					<div className="w-full  p-2">
						<div className="w-auto h-full mx-auto">
							{' '}
							{/* Center the image horizontally */}
							<img src={filmTheater} alt="film theater" className="w-full h-full" />
						</div>
					</div>
					<div className="w-full text-center p-2">
						<h3 className="font-medium text-[25px]">Filmtheater am Friedrichshain</h3>
						<p className="p-2 text-[16px]">
							Bötzowstraße 1-5, 10407 Berlin
							<FontAwesomeIcon icon={faLocationDot} className="text-blue-600 ml-2" />
						</p>
					</div>
				</div>
			</div>

			{/* Box for Festival */}
			<div className="w-full block md:flex items-center flex-col  bg-[#d5e7e361] p-4">
				<h1 className="text-2xl lg:text-3xl font-bold mb-4">Für das Festival!</h1>
				<div className="flex flex-col items-center">
					{' '}
					{/* Center the content vertically */}
					<div className="w-full p-2">
						<div className="w-auto h-full mx-auto">
							{' '}
							{/* Center the image horizontally */}
							<img src={jugendkulturzentrum} alt="youth culture center" className="w-full h-full" />
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-2/3 text-center p-2">
						<h3 className="font-medium text-[25px]">Jugendkulturzentrum Königstadt</h3>
						<p className="p-2 text-[16px]">
							Saarbrücker Str. 24, 10405 Berlin
							<FontAwesomeIcon icon={faLocationDot} className="text-red-600 ml-2" />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FilmUndFestival;
