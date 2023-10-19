import das from '../Assets/das-logo.png';
import Kijufi from '../Assets/Kijufi_Logo.png';
import { Link } from 'react-router-dom';
import { FooterSocial, FooterNavLinks } from '../Data/FooterLinks';
function Footer() {
	return (
		<footer>
			<div className=" p-10 bg-[#E16848] bg-opacity-70 md:py-14">
				<div className="block md:flex items-center justify-between">
					<img src={das} alt="das zukunfts-paket" />
					<p className="mt-5 md:text-[20px] md:px-24 m-auto">
						Gemeinsam Grenzenlos – das Kinderrechte-Filmfestival 2023 ist ein Projekt des Landesverbands Kinder- und Jugendfilm Berlin e.V. (kijufi). Die Durchführung wird gefördert im Rahmen des Programms Das Zukunftspaket. Das Zukunftspaket für Bewegung, Kultur und Gesundheit ist ein Programm des Bundesministeriums für Familie, Senioren, Frauen und Jugend (BMFSFJ). Es wird umgesetzt von der Gesellschaft für soziale Unternehmensberatung (gsub) und der Stiftung SPI. Der Programmteil „Kinder- und
						Jugendbeteiligung im Zukunftspaket“ wird verantwortet von der Deutschen Kinder- und Jugendstiftung (DKJS).
					</p>
				</div>
				<div className="flex items-center gap-5">
					<p className="hidden md:block md:text-[28px]"> by</p>
					<img className="hidden md:block md:mt-5" src={Kijufi} alt="Logo" />
				</div>
			</div>
			<div className="flex flex-col items-center gap-5 py-5 md:flex-row justify-between md:py-[50px] max-w-[1750px] md:m-auto">
				<p className="md:hidden">Created by</p>
				<img className="md:hidden" src={Kijufi} alt="Logo" />

				<ul className="flex gap-5 md:gap-20">
					{FooterNavLinks.map((link, index) => (
						<li key={index}>
							<Link className=" text-[12px] md:text-[22px]" to={link.link}>
								{link.text}
							</Link>
						</li>
					))}
				</ul>

				<ul className="flex">
					{FooterSocial.map((link, index) => (
						<li className="mx-1" key={index}>
							<Link to={link.link}>
								<img src={link.image} alt={link.alt} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
