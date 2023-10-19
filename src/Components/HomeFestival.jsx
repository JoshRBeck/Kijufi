import action from '../Assets/action.png';

function HomeFestival() {
	return (
		<section className="flex flex-col items-center text-center gap-5 bg-[#D5E7E3] md:flex-row md:justify-between md:text-left md:px-[250px] md:py-[50px]">
			<div>
				<img className="h-64 md:h-full" src={action} alt="action-img" />
			</div>
			<div className="md:w-[1300px] md:pr-[50px]">
				<h3 className="text-[25px] font-bold md:text-[40px]">Werde Teil der Festival-Crew</h3>
				<p className="mt-2 md:text-[25px]">Das Filmfestival wird maßgeblich von Kindern und Jugendlichen veranstaltet. Die junge Festival-Crew trifft alle wichtigen Entscheidungen – vom Titel und Thema des Festivals über die Filmauswahl bis hin zum Rahmenprogramm. Sie sind es auch, die das Festival hosten: als Filmvorführer:innen, Moderator:innen, Presse-Sprecher:innen und Gäste-Betreuer:innen.</p>
				<p className="text-[18px] font-bold mt-5 md:text-[25px]">Du willst mitmachen? Melde Dich bei uns und komm' vorbei!</p>
				<button type="button" className="bg-white rounded-[30px] py-[11px] px-[30px] m-5 shadow-[3px_3px_2px_-1px_rgba(0,0,0,0.9)]">
					Info Festival-Crew
				</button>
			</div>
		</section>
	);
}

export default HomeFestival;
