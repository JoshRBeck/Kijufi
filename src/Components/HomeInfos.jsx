import React from 'react';
import { NavLink } from 'react-router-dom';

function HomeInfos() {
	return (
		<section className="bg-[#D5E7E3] h-fit md:h-[650px] py-10 text-center md:flex flex-col items-center justify-center gap-7">
			<h3 className="text-[50px] font-bold ">Über das Festival</h3>
			<p className="text-[25px] md:w-[60%] mt-4">
				Gemeinsam Grenzenlos ist ein Film-Festival für alle Generationen: Junge Filmemacher:innen sind eingeladen, mit ihren Ideen und Überzeugungen ins Spotlight zu treten. Sagt, was ihr zu sagen habt. Zeigt, was euch bewegt und was euch wichtig ist! Auch ohne Film sind Kinder und Jugendliche eingeladen, als Zuschauer:innen Teil eines vibrierenden Festivalerlebnisses zu werden. Trefft auf engagierte Gleichaltrige. Lasst euch inspirieren. Alle Erwachsenen! Kommt – denn ihr seid genauso eingeladen.
				Ihr seid der Teil von Gemeinsam, der Grenzen setzen, aber auch loswerden kann.
			</p>
			<p className="text-[30px] font-bold mt-6 ">⚠️ Achtung! Der Ticketverkauf startet Anfang November 2023</p>
			<button type="button" className="py-[11px] px-[30px] text-black bg-white rounded-[30px] mt-4 shadow-[3px_3px_2px_-1px_rgba(0,0,0,0.9)] ">
				<NavLink to={'program'}>Programm</NavLink>
			</button>
		</section>
	);
}

export default HomeInfos;
