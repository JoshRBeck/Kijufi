import React from 'react';
import position3 from '../Assets/position3.png';
import position4 from '../Assets/position4.png';
import position6 from '../Assets/position6.png';
import garland1 from '../Assets/garland1.png';
import garland2 from '../Assets/garland2.png';
import garland3 from '../Assets/garland3.png';
import Btn from './Btn';

function Schedule() {

	const schedule = [
		{
			day: 'FR, 8.12',
			garland: garland1,
			poster: {
				imageSrc: position3,
				buttonText: 'Programmdetails',
				borderColor: '#F7DF3F',
			},
			events: [
				{
					Startzeit: '🕘10.00',
					Filmvorführungen: '🎬Kurzfilm-Programm für Schulklasse',
					Festival: '',
					Standort: '📍Filmtheater am Friedrichshain, Saal 1',
				},
				{
					Startzeit: '🕘16.00',
					Filmvorführungen: '🎬Festivaleröffnung',
					Festival: '',
					Standort: '📍Filmtheater am Friedrichshain, Saal 1',
				},
				{
					Startzeit: '🕘19.00',
					Filmvorführungen: '',
					Festival: '🥳Festival-Party (Nur mit einladung)',
					Standort: '📍Jugendkulturzentrum Königstadt',
				},
			],
		},
		{
			day: 'SA, 9.12',
			garland: garland2,
			poster: {
				imageSrc: position4,
				buttonText: 'Programmdetails',
				borderColor: '#D5E7E3B2',
			},
			events: [
				{
					Startzeit: '🕘11.00',
					Filmvorführungen: '🎬Kurzfilmprogramm 1',
					Standort: '📍Filmtheater am Friedrichshain, Saal 1',
				},
				{
					Startzeit: '🕘13.00',
					Filmvorführungen: '',
					Festival: '🥳 Filmmakers Lunch / Meet & Greet',
					Standort: '📍Jugendkulturzentrum Königstadt',
				},
				{
					Startzeit: '🕘15.30',
					Filmvorführungen: '🎬Kurzfilmprogramm 1',
					Festival: '',
					Standort: '📍Filmtheater am Friedrichshain, Saal 1',
				},
				{
					Startzeit: '🕘17.30',
					Filmvorführungen: '',
					Festival: '🥳Talk + Filmmakers Dinner',
					Standort: '📍Jugendkulturzentrum Königstadt',
				},
				{
					Startzeit: '🕘19.30',
					Filmvorführungen: ' 🎬Kinderrechte-Überraschungsfilm 1',
					Festival: '',
					Standort: '📍Jugendkulturzentrum Königstadt',
				},
			],
		},
		{
			day: 'SO, 10.12',
			garland: garland3,
			poster: {
				imageSrc: position6,
				buttonText: 'Programmdetails',
				borderColor: '#EEA7828F',
			},
			events: [
				{
					Startzeit: '🕘11.00',
					Filmvorführungen: '🎬Publikumsfavoriten + Kinderrechte-Überraschungsfilm 2',
					Festival: '',
					Standort: '📍Filmtheater am Friedrichshain, Saal 2',
				},
			],
		},
	];

	return (
		<div className="">
			{schedule.map((dayInfo, dayIndex) => (
				<div key={dayIndex}>
					<img
						src={dayInfo.garland}
						alt={`Garland for ${dayInfo.day}`}
						className="w-full md:min-w-full"
					/>
					<div
						className={`md:my-5 md:max-w-[1650px] md:m-auto md:flex p-5 justify-between items-center ${dayIndex === 1 ? 'flex-row-reverse md:text-left gap-[550px]' : ''
							}`}
					>
						<div className="w-full">
							<h2 className="text-shadow md:text-[60px]">{dayInfo.day}</h2>
							<ul>
								{dayInfo.events
									.filter(
										(event) =>
											event.Startzeit || event.Filmvorführungen || event.Festival || event.Standort
									)
									.map((event, eventIndex) => (
										<li key={eventIndex} className="p-5 sm:p-2">
											<div className="font-HalcyonMedium text-[12px] md:text-[25px]">
												{event.Startzeit}
											</div>
											<div className="font-HalcyonMedium text-[12px] md:text-[25px] whitespace-normal break-normal">
												{event.Filmvorführungen}
											</div>
											<div className="font-HalcyonBlack text-[12px] md:text-[25px] whitespace-normal break-normal">
												{event.Festival}
											</div>
											<div className="font-HalcyonMedium text-[12px] md:text-[25px] whitespace-normal break-normal">
												{event.Standort}
											</div>
										</li>
									))}
							</ul>
						</div>
						<div className="hidden md:block">
							<div>
								<img
									className="md:h-[600px]"
									src={dayInfo.poster.imageSrc}
									alt={`Poster for ${dayInfo.day}`}
								/>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className="text-left pt-12 pb-12 my-5">
				<Btn
					text={'Programmdetails'}
					backgroundColor="bg-[#ECEEF5]"
					hoverColor="hover:bg-[#979FBD]"
					padding="py-[5px] px-[20px] md:py-[11px] md:px-[35px]"
					fontSize="md:text-[25px]"
				/>
			</div>
		</div>
	);

}

export default Schedule;
