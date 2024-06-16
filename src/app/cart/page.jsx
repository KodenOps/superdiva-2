// src/app/cart.jsx

'use client';
import React, { useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';

const Cart = () => {
	const { cartItem, favItem } = useContext(cartContext);

	return (
		<div className='bg-slate-200'>
			<Navbar
				cartItem={cartItem}
				favItem={favItem}
			/>
			<div className='mainBody min-h-[40rem] md:mt-[1%] md:w-[96%] w-full border-1 bg-white md:mx-[2%] rounded-lg flex flex-wrap items-start justify-center '>
				<div className='cartItemList  md:w-[65%] w-[100%] border-r-2 border-slate-300'>
					<header className='flex items-center justify-between w-full md:pr-[24px] border-b-2 md:p-[24px] p-[16px]'>
						<h3 className='md:text-2xl text-md font-bold text-[var(--primary-color)]  '>
							Your Cart
						</h3>
						<h4 className='md:text-xl text-sm font-semibold text-[var(--primary-color)]'>
							{cartItem.length} Items
						</h4>
					</header>
				</div>
				<div className='CostingSection bg-red-500 md:w-[35%] w-full h-full'>
					o
				</div>
				{/* <h3>Cart Items</h3>
				<ul>
					{cartItem.map((item, index) => (
						<li key={index}>{item.title}</li>
					))}
				</ul> */}
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nam
				nihil illum rem, repellendus sunt voluptate consequatur error debitis
				architecto natus cum molestiae reiciendis deleniti ipsa esse saepe modi
				officia beatae voluptatum accusantium corrupti voluptatem excepturi
				perferendis. Aspernatur, eaque reiciendis.
			</p>
			<Footer />
		</div>
	);
};

export default Cart;
