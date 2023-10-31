import gif3 from '../Assets/3.gif';
import Btn from './Btn';
function HomeFestival() {
	return (
		<section className="flex flex-col items-center text-center gap-5 bg-[#D5E7E3] py-[55px] md:flex-row md:justify-between md:text-left md:px-[100px]  md:gap-0">
			<div>
				<img className="h-64 md:h-full" src={gif3} alt="action-img" />
			</div>
			<div className="md:w-[1300px] md:pr-[50px]">
				<h3 className="text-[16px] font-semibold md:text-[40px]">Werde Teil der Festival-Crew</h3>
				<p className="mt-[30px] md:text-[25px]">Das Filmfestival wird maßgeblich von Kindern und Jugendlichen veranstaltet. Die junge Festival-Crew trifft alle wichtigen Entscheidungen – vom Titel und Thema des Festivals über die Filmauswahl bis hin zum Rahmenprogramm. Sie sind es auch, die das Festival hosten: als Filmvorführer:innen, Moderator:innen, Presse-Sprecher:innen und Gäste-Betreuer:innen.</p>
				<p className="text-[18px] font-semibold mt-[40px] md:text-[25px]">Du willst mitmachen? Melde Dich bei uns und komm' vorbei!</p>

				<div className="mt-[40px]">
					<Btn text={'Info Festival-Crew'} backgroundColor="bg-white" hoverColor="hover:bg-[#5BA092]" padding="py-[5px] px-[20px] md:py-[11px] md:px-[35px]" fontSize="md:text-[16px]" />
				</div>
			</div>
		</section>
	);
}

export default HomeFestival;
