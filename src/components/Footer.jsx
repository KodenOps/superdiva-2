import React from 'react';
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaMailBulk,
	FaTwitter,
} from 'react-icons/fa';
const Footer = () => {
	return (
		<footer className=' bg-[var(--primary-color)] '>
			<div className='text-[var(--white)] w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center py-[50px] md:px-[100px] px-[16px]'>
				<div className='lg:w-[40%] w-full '>
					<div className='logo'>
						<h3 className='text-[var(--white)]  md:text-[24px] text-2xl font-extrabold tracking-widest lg:text-left text-center'>
							SUPER
							<span className='text-[var(--secondary-color)] font-normal'>
								DIVA
							</span>
						</h3>
						<p className='lg:text-[14px] md:text-[16px] text-sm my-[10px] lg:text-left text-center md:w-[90%] w-full leading-8'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Mollitia, laudantium culpa? Dicta inventore accusamus iusto,
							ducimus reprehenderit expedita, harum, laborum aut ratione nihil
							recusandae qui alias illo dolores quod odit. Recusandae quam
							maxime repellendus quod officiis, eos qui harum quo!
						</p>
						<div className='socialIcons flex items-center gap-[40px] lg:justify-start justify-center mt-[20px]'>
							<FaFacebook
								size={25}
								className='hover:text-[var(--secondary-color)] transition-colors duration-1000 cursor-pointer'
							/>
							<FaTwitter
								size={25}
								className='hover:text-[var(--secondary-color)] transition-colors duration-1000 cursor-pointer'
							/>
							<FaInstagram
								size={25}
								className='hover:text-[var(--secondary-color)] transition-colors duration-1000 cursor-pointer'
							/>
							<FaEnvelope
								size={25}
								className='hover:text-[var(--secondary-color)] transition-colors duration-1000 cursor-pointer'
							/>
						</div>
					</div>
				</div>
				{/* end of the first column */}
				<div className='md:w-[15%] lg:mt-0 mt-[50px]  w-full flex flex-col gap-[20px] justify-start items-center'>
					<p className='font-bold text-xl text-[var(--secondary-color)]'>
						Shop Diva
					</p>
					<ul className='flex flex-col items-center justify-center text-center gap-[10px]'>
						<li>Shoes</li>
						<li>Jackets</li>
						<li>Caps</li>
						<li>Trousers</li>
						<li>Bikini</li>
					</ul>
				</div>
				{/* End of second column */}
				<div className='md:w-[15%] w-full lg:mt-0 mt-[30px]  flex flex-col gap-[20px] justify-start items-center'>
					<p className='font-bold text-xl text-[var(--secondary-color)]'>
						Quick Links
					</p>
					<ul className='flex flex-col items-center justify-center text-center gap-[10px]'>
						<li>Home</li>
						<li>About</li>
						<li>Categories</li>
						<li>Explore</li>
						<li>Cart</li>
					</ul>
				</div>
				{/* End of second column */}
				<div className='md:w-[35%] w-full lg:mt-0 mt-[30px]  flex flex-col gap-[20px] justify-start items-center'>
					<p className='font-bold text-xl text-[var(--secondary-color)]'>
						Be An Affiliate
					</p>
					<form
						action=''
						className='md:w-[80%] w-full'>
						<input
							type='email'
							placeholder='Enter Your Email'
							className='px-[15px] py-[10px] w-full rounded-sm outline-none text-[var(--primary-color)]'
							required
						/>
						<button
							type='submit'
							className='bg-[var(--secondary-color)] w-full py-[10px] mt-[10px] rounded-sm'>
							Submit
						</button>
					</form>
				</div>
				{/* End of second column */}
			</div>
			<p className='text-center text-[var(--white)] py-[20px]'>
				&copy; 2023 SuperDiva / All Right Researved{' '}
			</p>
		</footer>
	);
};

export default Footer;
