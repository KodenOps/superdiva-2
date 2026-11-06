// src/components/Navbar.js

'use client';
import React, { useContext, useEffect, useState } from 'react';
import {
	AiOutlineShoppingCart,
	AiOutlineHeart,
	AiOutlineMenu,
	AiOutlineClose,
} from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import { RiLuggageCartFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import {
	GiConverseShoe,
	GiAmpleDress,
	GiSleevelessJacket,
	GiTrousers,
} from 'react-icons/gi';
import { IoBag } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import Link from 'next/link';
import { cartContext } from '@/Context/CartContext';

const categories = [
	{ href: '/shoesnboots', label: 'Shoes', Icon: GiConverseShoe },
	{ href: '/bagscollection', label: 'Bags', Icon: IoBag },
	{ href: '/gownscollection', label: 'Gowns', Icon: GiAmpleDress },
	{ href: '/shirts', label: 'Shirts', Icon: GiAmpleDress },
	{ href: '/jackets', label: 'Jackets', Icon: GiSleevelessJacket },
	{ href: '/trousers', label: 'Trousers', Icon: GiTrousers },
];

const Navbar = () => {
	const { cartItem, favItem } = useContext(cartContext);
	const [sideBarIsOn, setSideBarIsOn] = useState(false);
	const [theme, setTheme] = useState('light');

	// restore the saved theme on mount
	useEffect(() => {
		const stored = localStorage.getItem('superdiva_theme') || 'light';
		setTheme(stored);
		document.documentElement.classList.toggle('dark', stored === 'dark');
	}, []);

	const toggleTheme = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
		localStorage.setItem('superdiva_theme', next);
		document.documentElement.classList.toggle('dark', next === 'dark');
	};

	return (
		<div className='mainNav relative overflow-hidden h-[10vh] z-1000'>
			<nav className='md:p-[30px] py-[20px] overflow-hidden fixed flex justify-between items-center lg:px-[50px] px-[16px]  w-screen  -z-100 bg-[var(--white)] z-[1000]'>
				<div className='logo'>
					<Link
						href='/'
						className='text-[var(--primary-color)]  md:text-[24px] text-lg font-extrabold tracking-widest'>
						SUPER
						<span className='text-[var(--secondary-color)] font-extrabold'>
							DIVA
						</span>
					</Link>
				</div>
				{/* text links */}
				<ul className='homenav lg:flex hidden lg:gap-[24px] md:gap-[18px] gap-1 justify-center items-center list-none '>
					<li className='active'>
						<Link href='/#home'>Home</Link>
					</li>
					<li>
						<Link href='/#topProd'>Top Products</Link>
					</li>
					<li>
						<Link href='/shoesnboots'>Shoes</Link>
					</li>
					<li>
						<Link href='/bagscollection'>Bags</Link>
					</li>
					<li>
						<Link href='/trousers'>Trousers</Link>
					</li>
					<li>
						<Link href='/jackets'>Jackets</Link>
					</li>
					<li>
						<Link href='/gownscollection'>Gowns</Link>
					</li>
				</ul>
				{/* cart + favorites + mobile hamburger (right aligned) */}
				<div className='flex items-center justify-end gap-[18px] md:gap-[30px]'>
					<Link
						href='/cart'
						className='flex items-center justify-center'
						aria-label='cart'>
						<AiOutlineShoppingCart size={30} />
						<span>{cartItem.length}</span>
					</Link>
					<Link
						href='/favorites'
						className='hidden md:flex items-center justify-center'
						aria-label='favorites'>
						<AiOutlineHeart size={30} />
						<span>{favItem.length}</span>
					</Link>
					{/* mobile view hamburger - far right */}
					<button
						className='flex items-center justify-center md:hidden'
						aria-label='menu'
						onClick={() => setSideBarIsOn(!sideBarIsOn)}>
						<AiOutlineMenu size={30} />
					</button>
				</div>
			</nav>
			{/* side navigation */}
			{sideBarIsOn ? (
				<div className='md:hidden transition-all fixed w-full top-0 z-10 left-0 translate-x-0 duration-100  '>
					<div
						className='sidenav_bg container  w-screen h-screen transition bg-black bg-opacity-[70%]'
						onClick={() => setSideBarIsOn(!sideBarIsOn)}></div>
					<nav className='sidenav_main absolute top-0 right-0 z-[1000]  h-[100vh] w-[85vw] max-w-[320px] shadow-lg border-[2px] bg-[var(--white)] rounded-sm py-[24px] translate-x-0 flex flex-col'>
						<div className='flex items-center justify-between px-[16px] pb-[16px] border-b-2'>
							<span className='font-extrabold tracking-widest text-[var(--primary-color)]'>
								MENU
							</span>
							<button
								aria-label='close menu'
								onClick={() => setSideBarIsOn(!sideBarIsOn)}>
								<AiOutlineClose size={22} />
							</button>
						</div>

						<div className='list-none flex flex-col items-start px-[16px] py-[16px] justify-start gap-[18px] overflow-y-auto flex-1'>
							<h3 className='text-md font-semibold text-[#6a6a6a]'>
								MY ACCOUNT:
							</h3>
							<Link
								href='/favorites'
								onClick={() => setSideBarIsOn(false)}
								className='list pl-2 flex items-center justify-between w-full py-2 border-b-2 pr-2'>
								<div className='item flex justify-start items-center gap-2'>
									<AiOutlineHeart size={24} color='#3c1642' /> Favorites (
									{favItem.length})
								</div>
								<MdArrowForwardIos size={20} color='#c4c4c4' />
							</Link>
							<Link
								href='/orders'
								onClick={() => setSideBarIsOn(false)}
								className='list pl-2 flex items-center justify-between w-full py-2 border-b-2 pr-2'>
								<div className='item flex justify-start items-center gap-2'>
									<RiLuggageCartFill size={24} color='#3c1642' /> My Orders
								</div>
								<MdArrowForwardIos size={20} color='#c4c4c4' />
							</Link>
							<Link
								href='/'
								onClick={() => setSideBarIsOn(false)}
								className='list pl-2 flex items-center justify-between w-full py-2 border-b-2 pr-2'>
								<div className='item flex justify-start items-center gap-2'>
									<BiSupport size={24} color='#3c1642' /> Contact Us
								</div>
								<MdArrowForwardIos size={20} color='#c4c4c4' />
							</Link>

							<h3 className='text-md font-semibold text-[#6a6a6a] mt-2'>
								SHOP FOR:
							</h3>
							{categories.map(({ href, label, Icon }) => (
								<Link
									key={href}
									href={href}
									onClick={() => setSideBarIsOn(false)}
									className='list pl-2 flex items-center justify-between w-full py-2 border-b-2 pr-2'>
									<div className='item flex justify-start items-center gap-2'>
										<Icon size={24} color='#3c1642' /> {label}
									</div>
									<MdArrowForwardIos size={20} color='#c4c4c4' />
								</Link>
							))}

							<h3 className='text-md font-semibold text-[#6a6a6a] mt-2'>
								APPEARANCE:
							</h3>
							<button
								onClick={toggleTheme}
								className='list pl-2 flex items-center justify-between w-full py-2 border-b-2 pr-2'>
								<div className='item flex justify-start items-center gap-2'>
									{theme === 'dark' ? (
										<HiOutlineSun size={24} color='#f2994a' />
									) : (
										<HiOutlineMoon size={24} color='#3c1642' />
									)}
									{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
								</div>
								<span className='text-[12px] text-[#6a6a6a] uppercase'>
									{theme}
								</span>
							</button>
						</div>

						<div className='w-[calc(100%-24px)] mx-[12px] rounded-md flex items-center justify-between bg-slate-100 p-4'>
							<div className='user flex items-center justify-start gap-3 '>
								<FaRegUserCircle size={34} />
								<div>
									<div className='text-md'>Guest Shopper</div>
									<div className='text-[12px]'>Welcome to SuperDiva</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
			) : null}
			{/* end of main div */}
		</div>
	);
};

export default Navbar;
