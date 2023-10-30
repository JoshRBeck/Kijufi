import kids from '../Assets/cool-kids.png';
import bg2 from '../Assets/bg-2.png';

function HomeFreiheit() {
	return (
		<section style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: ' top bottom' }} className="flex items-center justify-center pl-5 py-10 md:py-0 md:pl-0 md:gap-28  md:h-[650px]  md:m-auto">
			<div className="w-[250px] md:w-[500px]">
				<h3 className="text-[20px] font-semibold md:text-[35px]"> #Freiheit leben </h3>
				<p className="mt-5 md:text-[20px]">Wir engagieren uns gegen Ausgrenzung und Diskriminierung. Wir schlagen Brücken der Begegnung, feiern Vielfalt und nehmen uns Freiheit. Die Freiheit, eigene Ideen zu haben, die Freiheit, mitzureden und die Freiheit, die Welt, in der wir leben, besser zu machen.</p>
			</div>

			<div>
				<img className="w-[200px]  md:w-[450px]" src={kids} alt="cooking-list" />
			</div>
		</section>
	);
}

export default HomeFreiheit;
