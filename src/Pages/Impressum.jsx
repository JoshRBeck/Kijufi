import React from 'react';
import { Helmet } from 'react-helmet';
import ImpressumPage from '../Components/ImpressumData';

function Impressum() {
	return (
		<div>
			<Helmet>
				<title>Impressum - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023</title>
				<meta name="description" content="Erfahren Sie mehr über unser Impressum und die rechtlichen Aspekte unserer Website." />
				<meta name="keywords" content="Impressum, Imprint, Legal Notice, Rechtliches, Gemainsam Grenzenlos, Kinderrechte Filmfestival, Kinderrechte-Filmfestival" />

				<meta property="og:title" content="Impressum - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023" />
				<meta property="og:description" content="Erfahren Sie mehr über unser Impressum und die rechtlichen Aspekte unserer Website." />
				<meta property="og:url" content="http://kinderrechte-filmfestival.de/impressum" />

				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="canonical" href="http://kinderrechte-filmfestival.de/impressum" />
			</Helmet>
			<ImpressumPage />
		</div>
	);
}

export default Impressum;
