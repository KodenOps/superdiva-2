// src/app/cart.jsx

'use client';
import React, { useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';
import { IoMdTrash } from 'react-icons/io';
import { MdArrowBack, MdPayments } from 'react-icons/md';
import Link from 'next/link';

const Cart = () => {
	let total = 0;
	let vat = 0;
	let FinalPrice = 0;
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

			{cartItem.length === 0 ? (
				<div className='w-full mt-[3%] bg-white min-h-[80vh]'>
					<header className='flex items-center justify-between w-full md:pr-[24px] border-b-2 md:p-[24px] p-[16px]'>
						<h3 className='md:text-2xl text-md font-bold text-[var(--primary-color)]  '>
							Your Cart
						</h3>
						<h4 className='md:text-xl text-sm font-semibold  text-[var(--primary-color)]'>
							{cartItem.length} Items
						</h4>
					</header>
					<p className='text-center  md:text-xl text-md font-semibold md:w-[50%] w-[80%] md:mx-[25%] mx-[10%] mt-[40px]'>
						Your cart is currently empty. Once you add an item to your cart, you
						should be able to see them here.
					</p>
					<div className='w-full flex justify-center items-start pt-[20px] '>
						<script
							src='https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
							type='module'></script>

						<dotlottie-player
							src='https://lottie.host/08fd840f-0c5e-447f-b8db-3c34751c3ba7/reu970Ijxr.json'
							background='transparent'
							speed='1'
							style={{ width: '300px', height: '300px' }}
							loop
							autoplay></dotlottie-player>
					</div>
					<div className='w-auto'>
						<Link
							href={'/'}
							className='flex items-center  py-[16px] font-semibold text-[var(--primary-color)] gap-2 md:text-xl text-md  justify-center'>
							<MdArrowBack size={20} /> Continue Shopping
						</Link>
					</div>
				</div>
			) : (
				<div className='mainBody min-h-[40rem] md:mt-[1%] md:w-[99%] w-full border-1 bg-white md:mx-[0.5%] rounded-lg flex flex-wrap items-start justify-center '>
					<div className='cartItemList  w-full border-r-2 border-slate-300'>
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
								<tr className='text-left md:text-lg text-[12px] text-[#A0A0A0] font-mono sticky top-[8vh] z-[100]  bg-white border-b-2'>
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
									total = total + item.price * item.count;
									vat = (10 / 100) * total;
									FinalPrice = total + vat;
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
													<p className='md:text-lg text-[14px]'>
														{' '}
														{item.title}
													</p>
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
														onChange={() => ''}
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
												$ {(item.count * item.price).toFixed(2)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className='summary w-full md:p-[24px] p-[16px]'>
						<h3 className='text-[var(--primary-color)] font-semibold mb-2'>
							Summary
						</h3>
						<div className='total flex w-ful justify-between items-center md:text-md text-sm'>
							<h4 className=''>Total items</h4>
							<p>{cartItem.length} Items</p>
						</div>
						<div className='total flex w-ful justify-between items-center md:text-md text-sm'>
							<h4 className=''>Items Price</h4>
							<p>${total.toFixed(2)}</p>
						</div>
						<div className='total flex w-ful justify-between items-center md:text-md text-sm'>
							<h4 className=''>VAT</h4>
							<p>${vat.toFixed(2)}</p>
						</div>
						<div className='total flex w-ful justify-between items-center md:text-md text-sm'>
							<h4 className=''>Shipping Fee</h4>
							<p>${190}</p>
						</div>
						<div className='total flex w-ful justify-between items-center md:text-md text-sm border-y-2 mt-2 py-[10px]'>
							<h4 className='font-semibold'>Final Price</h4>
							<p>${(190 + FinalPrice).toFixed(2)}</p>
						</div>
					</div>
					<div className='cta flex w-full flex-wrap md:flex-row flex-col-reverse justify-between items-center p-[16px]'>
						<div className='w-auto'>
							<Link
								href={'/'}
								className='flex items-center  py-[16px] font-semibold text-[var(--primary-color)] gap-2   justify-center'>
								<MdArrowBack size={20} /> Continue Shopping
							</Link>
						</div>
						<div className='w-auto'>
							<Link
								href={'/'}
								className='flex items-center py-[12px] rounded-sm text-white px-[16px] font-normal bg-[var(--primary-color)] gap-2   justify-center'>
								<MdPayments size={25} /> Proceed To Checkout
							</Link>
						</div>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default Cart;
