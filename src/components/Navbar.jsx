// src/components/Navbar.js

'use client';
import React, { useContext, useState } from 'react';
import {
	AiOutlineShoppingCart,
	AiOutlineHeart,
	AiOutlineUser,
	AiOutlineMenu,
} from 'react-icons/ai';
import { MdArrowForwardIos, MdShower } from 'react-icons/md';
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
import Link from 'next/link';
import { cartContext } from '@/Context/CartContext';

const Navbar = () => {
	const { cartItem, favItem, previewItem, setPreviewItem } =
		useContext(cartContext);
	const [sideBarIsOn, setSideBarIsOn] = useState(false);

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
					<li>Collections</li>
					<li>
						<Link href='/#topProd'>Top Products</Link>
					</li>
					<li>Categories</li>
					<li>Explore</li>
				</ul>
				{/* cart and other iconified links */}
				<div className='homenav_icons flex items-center justify-center gap-[30px]  '>
					{/* cart icon */}
					<Link
						href='/cart'
						className='flex items-center justify-center'>
						<AiOutlineShoppingCart size={30} />
						<span>{cartItem.length}</span>
					</Link>
					{/* favorite icon */}
					<Link
						href='favorites'
						className='flex items-center justify-center'>
						<AiOutlineHeart size={30} />
						<span>{favItem.length}</span>
					</Link>
					{/* user icon */}
					<div className='md:flex items-center justify-center hidden'>
						<AiOutlineUser size={30} />
					</div>
				</div>
				{/* mobile view hamburger*/}
				<div
					className='flex items-center justify-center md:hidden'
					onClick={() => setSideBarIsOn(!sideBarIsOn)}>
					<AiOutlineMenu size={30} />
				</div>
			</nav>
			{/* side navigation */}
			{sideBarIsOn ? (
				// modal open
				<div className='md:hidden transition-all fixed w-full top-0 z-10 left-0 translate-x-0 duration-100  '>
					<div
						className='sidenav_bg container  w-screen h-screen transition bg-black bg-opacity-[70%]'
						onClick={() => setSideBarIsOn(!sideBarIsOn)}></div>
					<nav className='sidenav_main absolute top-0 right-0 z-[1000]  h-[100vh] w-[100vw] ] shadow-lg border-[2px] bg-[white] rounded-sm py-[60px] translate-x-0'>
						<div className='list-none flex flex-col items-start px-[16px] py-[24px] justify-start gap-[25px] mb-[40px] h-[70%]'>
							<h3 className='text-md  font-semibold text-[#6a6a6a]'>
								SHOP FOR:
							</h3>
							<Link
								href='/shoesnboots'
								className='list pl-4 flex items-center justify-between w-full py-2 border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<GiConverseShoe
										size={24}
										color='#3c1642'
									/>{' '}
									Shoes
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
							<Link
								href='/bagscollection'
								className='list pl-4 flex items-center justify-between w-full py-2 border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<IoBag
										size={24}
										color='#3c1642'
									/>{' '}
									Bags
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
							<Link
								href='/gownscollection'
								className='list pl-4 flex items-center justify-between w-full py-2 border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<GiAmpleDress
										size={24}
										color='#3c1642'
									/>{' '}
									Gowns
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
							<Link
								href='/shirts'
								className='list pl-4 flex items-center justify-between w-full py-2 border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<GiAmpleDress
										size={24}
										color='#3c1642'
									/>{' '}
									Shirts
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
							<Link
								href='/jackets'
								className='list pl-4 flex items-center justify-between w-full py-2 border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<GiSleevelessJacket
										size={24}
										color='#3c1642'
									/>{' '}
									Jackets
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
							<Link
								href='/trousers'
								className='list pl-4 flex items-center justify-between w-full py-2 border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<GiTrousers
										size={24}
										color='#3c1642'
									/>{' '}
									Trousers
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
							<h3 className='text-md  font-semibold text-[#6a6a6a]'>
								QUICK LINKS:
							</h3>

							<Link
								href='#'
								className='list pl-4 flex items-center justify-between w-full pb-[10px] border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<RiLuggageCartFill
										size={24}
										color='#3c1642'
									/>{' '}
									My Orders
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
							<Link
								href='#'
								className='list pl-4 flex items-center justify-between w-full pb-[10px] border-b-2 pr-4'>
								<div className='item flex justify-start items-center gap-2'>
									<BiSupport
										size={24}
										color='#3c1642'
									/>{' '}
									Contact Us
								</div>
								<MdArrowForwardIos
									size={20}
									color='#c4c4c4'
								/>
							</Link>
						</div>
						<div className='w-full h-[80px] rounded-md absolute flex items-center justify-between  bg-slate-100 bottom-0 border-2 p-6'>
							<div className='user flex items-center justify-start gap-3 '>
								<FaRegUserCircle size={40} />
								<div>
									<div className='text-md'>User Name</div>
									<div className='text-[12px]'>email@gmail.com</div>
								</div>
							</div>
							<button className='bg-red-400 w-[140px] py-[6px] rounded-sm text-white'>
								Logouts
							</button>
						</div>
					</nav>
				</div>
			) : (
				// if modal close
				<div className=' lg:hidden  fixed  top-0 z-10 left-0 translate-x-[100%] duration-100  '>
					<div
						className='sidenav_bg     bg-opacity-0 '
						onClick={() => setSideBarIsOn(!sideBarIsOn)}></div>
				</div>
			)}
			{/* end of main div */}
		</div>
	);
};

export default Navbar;
