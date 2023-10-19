import React from 'react';
import bg from '../Assets/vector15.png';
function Impressum() {
	return (
		<section style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center top' }} className="p-5 md:p-10 ">
			<h1 className="font-bold text-2xl md:text-4xl">Impressum</h1>

			<div>
				<h3 className="font-bold text-lg mt-3 md:text-2xl">Landesverband Kinder- & Jugendfilm Berlin e. V. </h3>
				<p className="text-sm md:text-lg">Am sudhaus 2</p>
				<p className="text-sm md:text-lg">12053 Berlin</p>

				<p className="text-sm md:text-lg">Vereinsregister Amtsgericht Charlottenburg | Registernummer VR 9413 Nz VAT-ID/Umsatzsteuer-Identifikationsnummer DE361265479</p>
				<h3 className="font-bold text-lg mt-3 md:text-2xl">Vertretungsberechtigte Vorstandsmitglieder und verantwortliche Redakteure:</h3>
				<p className="text-sm md:text-lg">
					Max Neu <br /> Ralf Schlotter <br /> Claudia Ziegenfuß
				</p>

				<h3 className="font-bold text-lg mt-3 md:text-2xl">UX/UI Designer der Website: </h3>
				<p className="text-sm md:text-lg">Clémence Le Carre - Linkedin-Profil</p>

				<h3 className="font-bold text-lg mt-3 md:text-2xl">Webentwickler der Website: </h3>
				<p className="text-sm md:text-lg">
					Josh Beck - Linkedin-Profil <br />
					Lukas Jülich - Linkedin-Profil <br /> Alexandre Maunoury - Linkedin Profil
				</p>

				<p className="text-sm md:text-lg">
					Ihr erreicht den Landesverband Kinder- & Jugendfilm Berlin e. V. postalisch unter der o. g Adresse, per Mail an <span className="font-bold"> info@kijufi.de </span> oder telefonisch unter <span className="font-bold"> +49 (0) 30 609 51 369</span>
				</p>
				<p className="text-sm md:text-lg">
					Landesverband Kinder- und Jugendfilm Berlin e. V <br />
					All rights reserved
				</p>
			</div>
		</section>
	);
}

export default Impressum;
