import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Hamburger from '../Assets/hamburger.png';
import Cross from '../Assets/cross.png';
import Btn from './Btn';

function Header() {
	const [open, setOpen] = useState(true);
	const handleNav = () => {
		setOpen(!open);
	};
	const location = useLocation();
	return (
		<div>
			<nav className=" flex md:block p-[10px] md:p-[50px]">
				<div className="flex items-center justify-between m-auto">
					<div>
						<h1 className="text-[40px] font-bold text-[#E16848] drop-shadow-lg">Gemeinsam Grenzenlos</h1>
						<p className="font-bold text-xl ">Das Kinderrechte-Filmfestival 2023</p>
					</div>

					<ul className="hidden md:flex items-center md:gap-24 uppercase">
						<li className={location.pathname === '/' ? 'font-bold' : ''}>
							<Link to={'/'}>Homepage</Link>
						</li>
						<li className={location.pathname === '/program' ? 'font-bold' : ''}>
							<NavLink to={'program'}>Programm</NavLink>
						</li>
						<li className={location.pathname === '/contact' ? 'font-bold' : ''}>
							<NavLink to={'contact'}>Kontakt & Infos</NavLink>
						</li>
						<li>
							<NavLink>
								<Btn text={'Tickets'} backgroundColor="bg-[#E16848]" hoverColor="hover:bg-[#B64021]" />
							</NavLink>
						</li>
					</ul>
				</div>
				<div className=" block z-10 md:hidden" onClick={handleNav}>
					{!open ? <img src={Cross} alt="" /> : <img src={Hamburger} alt="" />}
				</div>
				<div className={!open ? 'fixed m-auto  w-[90%] h-[90%] text-center bg-[#E16848] transition-ease-in-out duration-200 ' : 'fixed transition-ease-in-out duration-200 right-[-100%] h-[90%] '}>
					<ul className="uppercase mt-24">
						<li onClick={handleNav} className={location.pathname === '/' ? 'font-bold border-b-[1px] border-white mb-5' : 'border-b-[1px] border-white mb-5'}>
							<Link to={'/'}>Homepage</Link>
						</li>
						<li onClick={handleNav} className={location.pathname === '/program' ? 'font-bold border-b-[1px] border-white mt-5' : 'border-b-[1px] border-white mt-5'}>
							<NavLink to={'program'}>Programm</NavLink>
						</li>
						<li onClick={handleNav} className={location.pathname === '/contact' ? 'font-bold border-b-[1px] border-white mt-5' : 'border-b-[1px] border-white mt-5'}>
							<NavLink to={'contact'}>Kontakt & Infos</NavLink>
						</li>
						<li>
							<NavLink>
								<button onClick={handleNav} type="button" className="bg-[#E16848] rounded-[10px] px-3 py-1 text-white mt-5">
									Tickets
								</button>
							</NavLink>
						</li>
						<li>
							<p className="font-bold text-[12px] mt-5">*Ticketverkauf startet Anfang November 2023</p>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Header;
