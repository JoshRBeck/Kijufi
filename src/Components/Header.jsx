import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from '../Assets/hamburger.png';
import Cross from '../Assets/cross.png';
import { MenuLinKs } from '../Data/MenuLinks';
import Btn from './BtnHeader';

function Header() {
	const [open, setOpen] = useState(true);
	const handleNav = () => {
		setOpen(!open);
	};
	const location = useLocation();
	return (
		<div>
			<nav className="block md:p-[50px] ">
				<div className="flex items-center justify-between bg-white w-full fixed top-0 p-[10px] md:relative m-auto">
					<div className="pt-5 md:pt-0">
						<h1 className="md:text-[40px] text-[20px] font-bold text-[#E16848] drop-shadow-lg">Gemeinsam Grenzenlos</h1>
						<p className="font-bold text-xl  text-[13px] ">Das Kinderrechte-Filmfestival 2023</p>
					</div>

					<ul className="hidden md:flex items-center md:gap-24 uppercase">
						<li className={location.pathname === '/' ? 'font-bold' : ''}>
							<Link to={'/'}>Homepage</Link>
						</li>
						<li className={location.pathname === '/program' ? 'font-bold' : ''}>
							<Link to={'/program'}>Programm</Link>
						</li>
						<li className={location.pathname === '/contact' ? 'font-bold' : ''}>
							<Link to={'contact'}>Kontakt & Infos</Link>
						</li>
						<li>
							<a href="https://www.yorck.de/specials/gemeinsam-grenzenlos-das-kinderrechte-filmfestival-2023">
								<Btn text={'Tickets'} backgroundColor="bg-[#E16848]" hoverColor="hover:bg-[#B64021]" />
							</a>
						</li>
					</ul>
				</div>
				<div className=" block z-10 md:hidden fixed top-[10px] right-[20px] p-[10px] rounded-[10px] bg-white border-[2px] border-[#D5E7E3]" onClick={handleNav}>
					{!open ? <img src={Cross} alt="close-menu" /> : <img src={Hamburger} alt="menu-icon" />}
				</div>
				<div className={!open ? 'fixed top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] m-auto rounded-[20px] w-[94vw] h-[85vh] text-center bg-[#E16848] transition-ease-in-out duration-200 ' : 'fixed top-[55%]  transition-ease-in-out duration-200 right-[-100%] h-[90%] '}>
					<ul className="uppercase flex flex-col justify-center gap-8 mt-8 items-center text-white">
						<li onClick={handleNav} className={location.pathname === '/' ? ' font-bold border-b-[1px] px-5 border-white' : 'border-b-[1px] px-5 border-white '}>
							<Link to={'/'}>Homepage</Link>
						</li>
						<li onClick={handleNav} className={location.pathname === '/program' ? ' font-bold border-b-[1px] px-5 border-white ' : 'border-b-[1px] px-5 border-white'}>
							<Link to={'program'}>Programm</Link>
						</li>
						<li onClick={handleNav} className={location.pathname === '/contact' ? ' font-bold border-b-[1px] px-5 border-white ' : 'border-b-[1px] px-5 border-white '}>
							<Link to={'contact'}>Kontakt & Infos</Link>
						</li>
						<li className="">
							<a href="https://www.yorck.de/specials/gemeinsam-grenzenlos-das-kinderrechte-filmfestival-2023">
								<Btn text={'Tickets'} backgroundColor="bg-[#333C3A]" hoverColor="hover:bg-[#5BA092]" />
							</a>
						</li>
						<p className=" text-[12px]">*Ticketverkauf startet Anfang November 2023</p>
						<ul className="flex">
							{MenuLinKs.map((link, index) => (
								<li className="mx-1" key={index}>
									<Link to={link.link}>
										<img src={link.image} alt={link.alt} />
									</Link>
								</li>
							))}
						</ul>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Header;
