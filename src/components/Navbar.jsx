'use client';
import React, { useState } from 'react';
import {
	AiOutlineShoppingCart,
	AiOutlineHeart,
	AiOutlineUser,
	AiOutlineMenu,
} from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
const Navbar = ({ cartItem, setcartItem, favItem, setfavItem }) => {
	const [sideBarIsOn, setsideBarIsOn] = useState(false);
	return cartItem && favItem ? (
		<div className='mainNav relative overflow-hidden h-[10vh] z-1000'>
			<nav className='lg:p-[40px] py-[20px] overflow-hidden fixed flex justify-between items-center lg:px-[50px] px-[16px]  w-screen  -z-100 bg-[var(--white)] z-[1000]'>
				<div className='logo'>
					<h3 className='text-[var(--primary-color)]  md:text-[24px] text-lg font-extrabold tracking-widest'>
						SUPER
						<span className='text-[var(--secondary-color)] font-extrabold'>
							DIVA
						</span>
					</h3>
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
					<div className='flex items-center justify-center'>
						<AiOutlineShoppingCart size={30} />
						<span>{cartItem.length}</span>
					</div>
					{/* favorite icon */}
					<div className='flex items-center justify-center'>
						<AiOutlineHeart size={30} />
						<span>{favItem.length}</span>
					</div>
					{/* user icon */}
					<div className='md:flex items-center justify-center hidden'>
						<AiOutlineUser size={30} />
					</div>
				</div>
				{/* mobile view hamburger*/}

				<div
					className='flex items-center justify-center lg:hidden'
					onClick={() => setsideBarIsOn(!sideBarIsOn)}>
					<AiOutlineMenu size={30} />
				</div>
			</nav>
			{/* side navigation */}
			{sideBarIsOn ? (
				// modal open
				<div className='lg:hidden transition-all fixed top-0 z-10 left-0 translate-x-0 duration-100  '>
					<div
						className='sidenav_bg container  w-screen h-screen transition bg-black bg-opacity-[70%]'
						onClick={() => setsideBarIsOn(!sideBarIsOn)}></div>
					<nav className='sidenav_main absolute top-[10vh] right-[0px] z-50  h-[90vh] w-[100vw] ] shadow-lg border-[2px] bg-[white] rounded-sm py-[60px] translate-x-0'>
						<ul className='list-none flex flex-col items-center justify-center gap-[25px] mb-[40px] h-[70%]'>
							<li
								className='LinkStyle'
								onClick={() => setsideBarIsOn(!sideBarIsOn)}>
								<Link href='/#home'>Home</Link>
								<MdArrowForwardIos size={20} />
							</li>
							<li className='LinkStyle'>
								Collections <MdArrowForwardIos size={20} />
							</li>
							<li
								className='w-full'
								onClick={() => setsideBarIsOn(!sideBarIsOn)}>
								<Link
									className='LinkStyle'
									href='/#topProd'>
									Top Products
									<MdArrowForwardIos size={20} />
								</Link>
							</li>
							<li className='LinkStyle'>
								Categories <MdArrowForwardIos size={20} />
							</li>
							<li className='LinkStyle'>
								Explore <MdArrowForwardIos size={20} />
							</li>
						</ul>
					</nav>
				</div>
			) : (
				// if modal close
				<div className=' lg:hidden  fixed  top-0 z-10 left-0 translate-x-[100%] duration-100  '>
					<div
						className='sidenav_bg     bg-opacity-0 '
						onClick={() => setsideBarIsOn(!sideBarIsOn)}></div>
				</div>
			)}
			{/* end of main div */}
		</div>
	) : (
		''
	);
};

export default Navbar;
