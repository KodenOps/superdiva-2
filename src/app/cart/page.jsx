// src/app/cart.jsx

'use client';
import React, { useContext, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';
import Image from 'next/image';
import { IoMdTrash } from 'react-icons/io';
import { MdArrowBack } from 'react-icons/md';
import Link from 'next/link';

const Cart = () => {
	const { cartItem, favItem, setCartItem } = useContext(cartContext);

	const handleIncrement = (item) => {
		const index = cartItem.findIndex((cartItem) => cartItem.id === item.id);
		const updatedCart = [...cartItem];
		const currentCount = updatedCart[index].count;

		if (currentCount < 10) {
			updatedCart[index] = {
				...updatedCart[index],
				count: currentCount + 1,
			};
			setCartItem(updatedCart);
		}
	};

	const handleDecrement = (item) => {
		// Find the index of the item in cartItem
		const index = cartItem.findIndex((cartItem) => cartItem.id === item.id);
		const updatedCart = [...cartItem];
		updatedCart[index] = {
			...updatedCart[index],
			count: Math.max(1, updatedCart[index].count - 1),
		};

		setCartItem(updatedCart);
	};
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
						<h4 className='md:text-xl text-sm font-semibold  text-[var(--primary-color)]'>
							{cartItem.length} Items
						</h4>
					</header>
					{/* the cart item */}
					<table className='w-full '>
						<thead>
							<tr className='text-left md:text-lg text-[12px] text-[#A0A0A0] md:font-semibold font-medium border-b-2'>
								<th className='md:p-8 p-4 ,d:w-[35%] w-[20%]'>
									Product Details
								</th>
								<th className='md:p-8 p-4 md:w-[15%] text-center  w-[2%] '>
									Quantity
								</th>
								<th className='md:p-8 p-4 md:w-auto w-[10%] text-center'>
									Price
								</th>
								<th className='md:p-8 p-4 text-center'>Total</th>
							</tr>
						</thead>
						<tbody className='w-full'>
							{cartItem.map((item) => {
								return (
									<tr
										className=' border-b-2'
										key={item.id}>
										<td className='flex md:flex-row flex-col md:items-center justify-start p-4 '>
											<img
												src={item.image}
												alt=''
												className='w-[50px] h-[50px] object-fill rounded-lg'
											/>
											<div className='md:px-4'>
												<p className='md:text-lg text-[14px]'> {item.title}</p>
												<p className='capitalize text-[#9b9b9b]'>
													{item.category}
												</p>
												<p className='capitalize  flex items-center justify-start gap-1 text-red-400'>
													<IoMdTrash />
													Remove
												</p>
											</div>
										</td>
										<td className=''>
											<div className='flex md:flex-row flex-col-reverse md:gap-4 gap-4 justify-center items-center w-full'>
												<button
													className='text-[24px] flex items-center justify-center w-[30px] h-[30px]'
													onClick={() => handleDecrement(item)}>
													-
												</button>
												<input
													type='num'
													name='counter'
													id='counter'
													value={item.count}
													max={10}
													min={1}
													className='w-[30px]  text-center border-2'
												/>
												<button
													className='text-[24px] flex items-center justify-center w-[30px] h-[30px] '
													onClick={() => handleIncrement(item)}>
													+
												</button>
											</div>
										</td>
										<td className=' text-center'>$ {item.price}</td>
										<td className='text-center'>
											$ {(item.count * item.price).toFixed(1)}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className='CostingSection  md:w-[35%] w-full h-full'></div>
				<Link
					href={'/'}
					className='flex items-center py-[16px] font-semibold text-[var(--primary-color)] gap-2 px-[16px] w-full justify-start'>
					<MdArrowBack size={20} /> Continue Shopping
				</Link>
			</div>

			<Footer />
		</div>
	);
};

export default Cart;
