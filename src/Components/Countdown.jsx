import React, { useEffect, useState } from 'react';

const Countdown = () => {
	const [countdownValue, setCountdownValue] = useState('');
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

	useEffect(() => {
		const targetDate = new Date('2023-12-08T10:00:00').getTime();
		const countdown = setInterval(function () {
			const currentDate = new Date().getTime();
			const timeRemaining = targetDate - currentDate;
			const calculatedDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
			const calculatedHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const calculatedMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
			const calculatedSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
			const formattedDays = calculatedDays.toString().padStart(2, '0');
			const formattedHours = calculatedHours.toString().padStart(2, '0');
			const formattedMinutes = calculatedMinutes.toString().padStart(2, '0');
			const formattedSeconds = calculatedSeconds.toString().padStart(2, '0');

			const formattedCountdown = `${formattedDays} Tage ${formattedHours} Stunden ${formattedMinutes} Minuten ${formattedSeconds} Sekunden`;

			setDays(formattedDays);
			setHours(formattedHours);
			setMinutes(formattedMinutes);
			setSeconds(formattedSeconds);
			setCountdownValue(formattedCountdown);

			if (timeRemaining <= 0) {
				clearInterval(countdown);
				setCountdownValue('Das Festival hat begonnen');
			}
		}, 1000);

		return () => {
			clearInterval(countdown);
		};
	}, []);

	return (
		<div className="p-4 md:px-60 m-10">
			<div id="countdownContainer" className="flex flex-row items-center justify-evenly text-center">
				<div className="flex flex-col items-center">
					<p className="text-4xl lg:text-6xl text-[#e16848] font-bold">{days}</p>
					<p className="text-sm font-semibold text-[#e16848]">Tage</p>
				</div>
				<p className="text-4xl lg:text-6xl text-[#e16848] font-bold pb-5">:</p>
				<div className="flex flex-col items-center">
					<p className="text-4xl lg:text-6xl font-bold text-[#e16848]">{hours}</p>
					<p className="text-sm font-semibold text-[#e16848]">Stu</p>
				</div>
				<p className="text-4xl lg:text-6xl text-[#e16848] font-bold pb-5">:</p>
				<div className="flex flex-col items-center">
					<p className="text-4xl lg:text-6xl font-bold text-[#e16848]">{minutes}</p>
					<p className="text-sm font-semibold text-[#e16848]">Min</p>
				</div>
				<p className="text-4xl lg:text-6xl text-[#e16848] font-bold pb-5">:</p>
				<div className="flex flex-col items-center">
					<p className="text-4xl lg:text-6xl font-bold text-[#e16848]">{seconds}</p>
					<p className="text-sm font-semibold text-[#e16848]">Sek</p>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
