import React from 'react';

function TeilFestival() {
	return (
		<section id='scrollToMe'>
			<div className="p-12 m-[15px] md:w-auto md:mx-auto md:my-[80px]">
				<h3 className="text-[18px] font-semibold pb-[35px]  md:text-[50px] ">Werde Teil der Festival-Crew</h3>
				<p className="text-[16px] text-[#333C3A] md:text-[25px] md:leading-[32px] ">
					Das Filmfestival wird maßgeblich von Kindern und Jugendlichen veranstaltet. Die junge Festival-Crew trifft alle wichtigen Entscheidungen – vom Titel und Thema des Festivals über die Filmauswahl bis hin zum Rahmenprogramm. Sie sind es auch, die das Festival hosten: als Filmvorführer:innen, Moderator:innen, Presse-Sprecher:innen und Gäste-Betreuer:innen.
					<br />
					<br />
					Die Festivalplanung findet im Rahmen offener Projekttage statt. Wir freuen uns über alle, die Lust haben, Teil des Teams zu werden. Ein Einstieg ist bis zum Termin am 11.11.2023 problemlos möglich.
					<br />
					<br />
					Du willst mitmachen? Melde Dich bei uns und komm‘ vorbei!
				</p>
				<p className="text-[16px] font-semibold pt-3 md:text-[20px] ">
					📩 Kontaktiere uns über folgende E-Mail-Adresse:
					<a href="mailto:armin.beber@kijufi.de" style={{ textDecoration: 'underline' }}>
						{' armin.beber@kijufi.de'}
					</a>
				</p>
				<p className="text-[14px] md:text-[20px] font-bold">📞 Telefon: +49 (0)157 35 70 58 73</p>
			</div>
		</section>
	);
}

export default TeilFestival;
