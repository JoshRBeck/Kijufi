import React from 'react';
import { Helmet } from 'react-helmet';
// import HomeHero from '../Components/HomeHero';
import HomeInfos from '../Components/HomeInfos';
import HomeFantasie from '../Components/HomeFantasie';
import HomeFreiheit from '../Components/HomeFreiheit';
import HomeFestival from '../Components/HomeFestival';
import HomeSwiper from '../Components/HomeSwiper';
// import Countdown from '../Components/Countdown';
import HomeGarland from '../Components/HomeGarland';
import YouTubeEmbed from '../Components/PromoVideo';


function Home() {
	return (
		<div>
			<Helmet>
				<title>Gemainsam Grenzenlos Kinderrechte Filmfestival 2023</title>
				<meta name="description" content="Gemeinsam Grenzenlos ist ein Film-Festival für alle Generationen: Junge Filmemacher:innen sind eingeladen, mit ihren Ideen und Überzeugungen ins Spotlight zu treten. Sagt, was ihr zu sagen habt. Zeigt, was euch bewegt und was euch wichtig ist! Auch ohne Film sind Kinder und Jugendliche eingeladen, als Zuschauer:innen Teil eines vibrierenden Festivalerlebnisses zu werden. Trefft auf engagierte Gleichaltrige. Lasst euch inspirieren. Alle Erwachsenen! Kommt – denn ihr seid genauso eingeladen. Ihr seid der Teil von Gemeinsam, der Grenzen setzen, aber auch loswerden kann" />
				<meta name="keywords" content="Festival Film Kinderrechte-Filmfestival Gemainsam Grenzenlos Berlin 2023" />

				<meta property="og:title" content="Gemainsam Grenzenlos Kinderrechte Filmfestival 2023" />
				<meta property="og:description" content="Gemeinsam Grenzenlos ist ein Film-Festival für alle Generationen: Junge Filmemacher:innen sind eingeladen, mit ihren Ideen und Überzeugungen ins Spotlight zu treten. Sagt, was ihr zu sagen habt. Zeigt, was euch bewegt und was euch wichtig ist! Auch ohne Film sind Kinder und Jugendliche eingeladen, als Zuschauer:innen Teil eines vibrierenden Festivalerlebnisses zu werden. Trefft auf engagierte Gleichaltrige. Lasst euch inspirieren. Alle Erwachsenen! Kommt – denn ihr seid genauso eingeladen. Ihr seid der Teil von Gemeinsam, der Grenzen setzen, aber auch loswerden kann." />
				<meta property="og:url" content="http://kinderrechte-filmfestival.de" />

				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="canonical" href="http://kinderrechte-filmfestival.de" />
			</Helmet>
			{/* <HomeHero /> */}
			{/* <Countdown /> */}
			<YouTubeEmbed videoId="isA_1zgGJ2Y?si=xuhjb6YL7ttUb12g" title="Gemeinsam Grenzenlos - das Kinderrechte-Filmfestival 2023 (Kino-Trailer)" />
			<HomeInfos />
			<HomeFantasie />
			{/* <HomeGarland /> */}
			<HomeFreiheit />
			<HomeFestival />
			<HomeSwiper />
		</div>
	);
}

export default Home;
