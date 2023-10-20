import React from 'react';
import FilmUndFestival from '../Components/FilmUndFestival';
import Map from '../Components/Map';
import MailTo from '../Components/MailToButton';
import FestivalPoster from '../Components/FestivalPoster';
// import KontaktForm from '../Components/ContactForm';

function Contact() {
	return (
		<div>
			<FilmUndFestival />
			<Map />
			<MailTo />
			{/* <KontaktForm /> */}
			<FestivalPoster />
		</div>
	);
}

export default Contact;
