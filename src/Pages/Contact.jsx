import React from 'react';
import { Helmet } from 'react-helmet';
import FilmUndFestival from '../Components/FilmUndFestival';
import Map from '../Components/Map';
import FestivalPoster from '../Components/FestivalPoster';
import KontaktForm from '../Components/ContactForm';

function Contact() {
	return (
		<div>
			<Helmet>
				<title>Contact Us - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023</title>
				<meta name="description" content="Contact the Gemainsam Grenzenlos Kinderrechte Filmfestival 2023 team. We're here to answer your questions and provide assistance." />
				<meta name="keywords" content="Contact, Contact Us, Get in Touch,Kontakt, Kontakt Uns, Support, Kinderrechte Filmfestival, Gemainsam Grenzenlos, Berlin 2023" />

				<meta property="og:title" content="Contact Us - Gemainsam Grenzenlos Kinderrechte Filmfestival 2023" />
				<meta property="og:description" content="Contact the festival team for information, support, and inquiries. We're here to help!" />
				<meta property="og:url" content="http://kinderrechte-filmfestival.de/contact" />

				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="canonical" href="http://kinderrechte-filmfestival.de/contact" />
			</Helmet>
			<FilmUndFestival />
			<Map />
			<KontaktForm />
			<FestivalPoster />
		</div>
	);
}

export default Contact;
