import cookList from '../Assets/cooking-list.png';

function HomeFantasie() {
	return (
		<section className="flex items-center justify-between pt-5 md:h-[400px] md:w-[1300px] md:m-auto">
			<div>
				<img className="h-[200px] md:h-full" src={cookList} alt="cooking-list" />
			</div>
			<div className="w-[250px] md:w-[500px]">
				<h3 className="text-[20px] font-bold md:text-[35px]"> #Fantasie #Miteinander</h3>
				<p className="mt-5 md:text-[20px]">Was wir brauchen ist: Zusammenhalt, Miteinander und viel Fantasie. Also weg mit den Grenzen im Kopf.</p>
			</div>
		</section>
	);
}

export default HomeFantasie;
