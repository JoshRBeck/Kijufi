import React from 'react';
import HomeHero from '../Components/HomeHero';
import HomeInfos from '../Components/HomeInfos';
import HomeFantasie from '../Components/HomeFantasie';
import HomeFreiheit from '../Components/HomeFreiheit';
import HomeFestival from '../Components/HomeFestival';
import HomeSwiper from '../Components/HomeSwiper';
import Countdown from '../Components/Countdown';

function Home() {
	return (
		<div>
			<HomeHero />
			<Countdown />
			<HomeInfos />
			<HomeFantasie />

			<HomeFreiheit />
			<HomeFestival />
			<HomeSwiper />
		</div>
	);
}

export default Home;
