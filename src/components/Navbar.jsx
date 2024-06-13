"use client";
import React, { useState } from "react";
import {
	AiOutlineShoppingCart,
	AiOutlineHeart,
	AiOutlineUser,
	AiOutlineMenu,
} from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
	const [sideBarIsOn, setsideBarIsOn] = useState(false);
	return (
		<div className="mainNav relative overflow-hidden h-[10vh] ">
			<nav className="lg:p-[40px] py-[20px] overflow-hidden fixed flex justify-between items-center lg:px-[50px] px-[30px]  w-screen  -z-100 bg-[var(--white)]">
				<div className="logo">
					<h3 className="text-[var(--primary-color)]  md:text-[24px] text-2xl font-extrabold tracking-widest">
						SUPER
						<span className="text-[var(--secondary-color)] font-normal">
							DIVA
						</span>
					</h3>
				</div>
				{/* text links */}
				<ul className="homenav lg:flex hidden lg:gap-[24px] md:gap-[18px] gap-1 justify-center items-center list-none ">
					<li className="active">
						<Link href="/#home">Home</Link>
					</li>
					<li>Collections</li>
					<li>
						<Link href="/#topProd">Top Products</Link>
					</li>
					<li>Categories</li>
					<li>Explore</li>
				</ul>
				{/* cart and other iconified links */}
				<div className="homenav_icons lg:flex items-center justify-center gap-[30px] hidden ">
					{/* cart icon */}
					<div className="flex items-center justify-center">
						<AiOutlineShoppingCart size={30} />
						<span>0</span>
					</div>
					{/* favorite icon */}
					<div className="flex items-center justify-center">
						<AiOutlineHeart size={30} />
						<span>0</span>
					</div>
					{/* user icon */}
					<div className="flex items-center justify-center">
						<AiOutlineUser size={30} />
					</div>
				</div>
				{/* mobile view hamburger*/}
				<div
					className="flex items-center justify-center lg:hidden"
					onClick={() => setsideBarIsOn(!sideBarIsOn)}>
					<AiOutlineMenu size={30} />
				</div>
			</nav>
			{/* side navigation */}
			{sideBarIsOn ? (
				// modal open
				<div className="lg:hidden transition-all fixed  top-0 z-10 left-0 translate-x-0 duration-100  ">
					<div
						className="sidenav_bg container  w-screen h-screen transition bg-black bg-opacity-[70%]"
						onClick={() => setsideBarIsOn(!sideBarIsOn)}></div>
					<nav className="sidenav_main absolute top-[10vh] right-[30px] z-50  h-[50vh] w-[60vw] ] shadow-lg border-[2px] bg-[white] rounded-sm py-[60px] translate-x-0">
						<ul className="list-none flex flex-col items-center justify-center gap-[25px] mb-[40px] h-[70%]">
							<li className="" onClick={() => setsideBarIsOn(!sideBarIsOn)}>
								<Link href="/#home">Home</Link>
							</li>
							<li>Collections</li>
							<li onClick={() => setsideBarIsOn(!sideBarIsOn)}>
								<Link href="/#topProd">Top Products</Link>
							</li>
							<li>Categories</li>
							<li>Explore</li>
						</ul>
						<div className="bottomIcons flex items-center justify-between gap-[32px] border-t-2 py-[20px] h-[30%] px-[20px]">
							<div className="flex items-center justify-center">
								<AiOutlineShoppingCart size={30} />
								<span>0</span>
							</div>
							<div className="flex items-center justify-center">
								<AiOutlineHeart size={30} />
								<span>0</span>
							</div>
							<div className="flex items-center justify-center">
								<AiOutlineUser size={30} />
							</div>
						</div>
					</nav>
				</div>
			) : (
				// if modal close
				<div className=" lg:hidden  fixed  top-0 z-10 left-0 translate-x-[100%] duration-100  ">
					<div
						className="sidenav_bg     bg-opacity-0 "
						onClick={() => setsideBarIsOn(!sideBarIsOn)}></div>
				</div>
			)}
			{/* end of main div */}
		</div>
	);
};

export default Navbar;
