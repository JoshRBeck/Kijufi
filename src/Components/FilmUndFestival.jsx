import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import theater from '../Assets/Theater.png';
import jugend from '../Assets/Jugend.png';

function FilmUndFestival() {
	return (
		<div className="pt-[150px] md:pt-1 flex flex-col items-center md:flex-row text-center">
			{/* Box for Filmvorführungen */}
			<div className="w-full block md:flex items-center flex-col p-4">
				<h1 className="text-2xl lg:text-3xl font-bold mb-2">Für die Filmvorführungen!</h1>
				<div className="flex flex-col">
					{' '}
					<div className='flex flex-col md:flex-row'>
						<div className="w-full p-2">
							<div className="w-auto h-full mx-auto">
								{' '}
								<img src={theater} alt="film theater" className="w-full h-full max-h-[450px] max-w-[450px] md:w-[380px] md:h-[300px]" />
							</div>
						</div>
						<div className="w-full text-center p-2 flex justify-center flex-col align-middle">
							<h3 className="font-medium text-[25px]">Filmtheater am Friedrichshain</h3>
							<p className=" text-[16px]">
								Bötzowstraße 1-5, 10407 Berlin
								<FontAwesomeIcon icon={faLocationDot} className="text-blue-600 ml-2" />
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Box for Festival */}
			<div className="w-full block md:flex items-center flex-col  bg-[#d5e7e361] p-4">
				<h1 className="text-2xl lg:text-3xl font-bold mb-2">Für das Festival!</h1>
				<div className="flex flex-col items-center">
					{' '}
					<div className='flex flex-col md:flex-row'>
						<div className="w-full p-2">
							<div className="w-auto h-full mx-auto">
								{' '}
								<img src={jugend} alt="youth culture center" className="w-full h-full max-h-[450px] max-w-[450px] md:w-[380px] md:h-[300px]" />
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-2/3 text-center p-2 flex justify-center flex-col align-middle">
							<h3 className="font-medium text-[25px]">Jugendkulturzentrum Königstadt</h3>
							<p className=" text-[16px]">
								Saarbrücker Str. 24, 10405 Berlin
								<FontAwesomeIcon icon={faLocationDot} className="text-red-600 ml-2" />
							</p>
						</div>
					</div>
					<p className='ml-auto text-[1'>*Both locations are wheelchair accessible</p>
				</div>
			</div>
		</div>
	);
}

export default FilmUndFestival;
