import React from 'react';
import instagram from '../Assets/instagram.png';
import facebook from '../Assets/facebook.png';
import youtube from '../Assets/youtube.png';
import M from '../Assets/M.png';
import NewPoster from "../Assets/NewPoster.png"

const FooterSocial = [
	{
		link: 'https://www.instagram.com/kijufi/',
		image: instagram,
		alt: 'instagram',
	},
	{
		link: 'https://www.facebook.com/kijufi/',
		image: facebook,
		alt: 'facebook',
	},
	{
		link: 'https://www.youtube.com/@kijufi',
		image: youtube,
		alt: 'youtube',
	},
	{
		link: 'https://bildung.social/@kijufi',
		image: M,
		alt: 'M',
	},
];

function FestivalPoster() {
	return (
		<div className="p-3">
			<div className="flex text-left justify-start md:pl-10">
				<h1 className="font-bold text-[16px] md:text-[50px] mt-10">Holen Sie sich das Festivalposter hier</h1>
			</div>
			<div className="md:flex flex-row content-center align-center w-full">
				<img src={NewPoster} className="w-full md:w-1/2 md:h-auto p-10 rounded-lg" alt="festival poster" />
				<div className="p-10">
					<div className="flex flex-col items-center justify-around h-1/2">
						<h3 className="font-bold text-[16px] md:text-[30px] mb-12 pt-14">Click here to get the poster as PDF</h3>
						<a href="https://wolke.kijufi.org/s/XxwB7TxNXtFxtXw" download="platzhalter-flyer-2.pdf" className="btn bg-[#E16848] text-white font-bold text-[16px] md:text-[25px] py-2 px-4 rounded-full mt-4" rel="noopener noreferrer" target="_blank">
							Download
						</a>
					</div>
					<div className="hidden md:flex flex-col items-center justify-center h-1/2">
						<div>
							<h3 className="font-bold text-[30px] pb-5">In sozialen Netzwerken teilen</h3>
						</div>
						<div className="flex flex-row">
							{FooterSocial.map((socialItem, index) => (
								<a key={index} href={socialItem.link} target="_blank" rel="noopener noreferrer" className="mr-4">
									<img src={socialItem.image} alt={socialItem.alt} className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FestivalPoster;
