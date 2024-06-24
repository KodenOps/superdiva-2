'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import HeroImg from '../assets/heroimg.png';
import { cartContext } from '@/Context/CartContext';
const Hero = () => {
	const { cartItem, setcartItem, favItem, setfavItem } =
		useContext(cartContext);
	return favItem && cartItem ? (
		<section
			className='h-auto w-full'
			id='home'>
			<Navbar
				cartItem={cartItem}
				setcartItem={setcartItem}
				favItem={favItem}
				setfavItem={setfavItem}
			/>
			<div className='main_content min-h-[90vh] lg:h-[85vh] flex items-center justify-around  gap-[50px] lg:flex-row flex-col  mt-[30px]'>
				<div className='left lg:w-[50%] w-full md:px-[50px] px-4 lg:h-[80%] lg:py-[5%]'>
					<h2 className='font-bold  md:text-4xl lg:text-5xl sm:text-4xl text-[26px] w-[90%] mx-[5%] lg:mx-0 capitalize text-[var(--black)] lg:w-[90%]    leading-8 text-center lg:text-left'>
						Get the <span className='text-[var(--primary-color)]'>best</span>{' '}
						without breaking the{' '}
						<span className='text-[var(--primary-color)]'>bank</span>
					</h2>
					<Image
						src={HeroImg}
						alt='hero img'
						className='lg:w-[80%] md:w-[32%] sm:w-[50%] w-[80%] lg:mx-[10%] md:mx-[34%]  sm:mx-[25%] mx-[10%] object-cover lg:hidden block my-[30px]'
					/>
					<p className=' text-[16px] sm:text-[24px] md:text-xl my-[32px] lg:w-[85%] w-full text-center lg:text-left leading-loose'>
						{' '}
						Step into a world of curated collections and endless possibilities,
						where style meets convenience at your fingertips. Your only
						destination for discovering the latest trends, and everything in
						between
					</p>
					<div className='w-full   '>
						<button className='px-[32px] py-[16px] bg-[var(--primary-color)] rounded-md lg:w-[40%]  w-full mx-0 text-[var(--white)] hover:bg-[var(--black)] duration-1000 '>
							Explore Now
						</button>
					</div>
				</div>
				<div className='right lg:w-[50%] flex justify-center items-center '>
					<Image
						src={HeroImg}
						alt='hero img'
						className='lg:w-[70%] md:w-[100%]  object-cover hidden lg:block '
					/>
				</div>
			</div>
		</section>
	) : (
		''
	);
};

export default Hero;
