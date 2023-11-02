import React from 'react';
import { Link } from 'react-router-dom';
import Btn from './Btn';
function HomeInfos() {
	return (
		<section className="bg-[#D5E7E3] h-fit md:h-[650px] py-10 text-center md:flex flex-col items-center justify-center gap-7">
			<h3 className="text-[25px] md:text-[50px] font-semibold ">Über das Festival</h3>
			<p className="text-[16px] md:text-[25px] md:w-[60%] font-medium mt-4">
				Gemeinsam Grenzenlos ist ein Film-Festival für alle Generationen: Junge Filmemacher:innen sind eingeladen, mit ihren Ideen und Überzeugungen ins Spotlight zu treten. Sagt, was ihr zu sagen habt. Zeigt, was euch bewegt und was euch wichtig ist! Auch ohne Film sind Kinder und Jugendliche eingeladen, als Zuschauer:innen Teil eines vibrierenden Festivalerlebnisses zu werden. Trefft auf engagierte Gleichaltrige. Lasst euch inspirieren. Alle Erwachsenen! Kommt – denn ihr seid genauso eingeladen.
				Ihr seid der Teil von Gemeinsam, der Grenzen setzen, aber auch loswerden kann.
			</p>
			<p className="text-[24px] font-semibold mt-6 pb-4">⚠️ Achtung! Der Ticketverkauf startet mitte November 2023</p>

			<Link to={'program'}>
				<Btn text={'Programm'} backgroundColor="bg-white" hoverColor="hover:bg-[#5BA092]" padding="py-[5px] pt-[5x] px-[20px] md:py-[11px] md:px-[35px]" fontSize="md:text-[16px]" />
			</Link>
		</section>
	);
}

export default HomeInfos;
