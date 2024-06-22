'use client';

import React, { useState, useEffect, useContext } from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import Rating from '@/components/Ratings';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { FaCartPlus, FaHeart, FaTrash } from 'react-icons/fa';
import { cartContext } from '@/Context/CartContext';
import Navbar from '@/components/Navbar';
import { MdArrowBack } from 'react-icons/md';

const ProductPreview = () => {
	const {
		EachItem,
		setFavItem,
		cartItem,
		favItem,
		setCartItem,
		isAddedToCart,
		setIsAddedToCart,
		isAddedToFav,
		setIsAddedToFav,
		setEachItem,
	} = useContext(cartContext);

	// Load data from localStorage when component mounts
	useEffect(() => {
		const storedEachItem = JSON.parse(localStorage.getItem('EachItem')) || {};
		const storedCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
		const storedFavItems = JSON.parse(localStorage.getItem('favItem')) || [];

		setEachItem(storedEachItem);
		setCartItem(storedCartItems);
		setFavItem(storedFavItems);

		const checkIfPresentInCart = storedCartItems.some(
			(item) => item.id === storedEachItem.id
		);
		setIsAddedToCart(checkIfPresentInCart);

		const checkIfPresentInFav = storedFavItems.some(
			(item) => item.id === storedEachItem.id
		);
		setIsAddedToFav(checkIfPresentInFav);
	}, []);

	// Save cartItem to localStorage when cartItem changes
	useEffect(() => {
		localStorage.setItem('cartItem', JSON.stringify(cartItem));
	}, [cartItem]);

	// Save favItem to localStorage when favItem changes
	useEffect(() => {
		localStorage.setItem('favItem', JSON.stringify(favItem));
	}, [favItem]);

	if (!EachItem || !EachItem.rating) {
		return null; // or return an error message or fallback UI
	}

	const ratingFunc = (count) => {
		return (
			<Rating
				value={count}
				counts={EachItem.rating.count}
			/>
		);
	};

	let stars = Math.round(EachItem.rating.rate);

	return (
		<div className='min-h-[100vh] w-full overflow-x-hidden -z-0'>
			<Navbar
				cartItem={cartItem}
				setCartItem={setCartItem}
				favItem={favItem}
				setFavItem={setFavItem}
			/>
			<div className='w-full h-full flex md:flex-row flex-col items-start gap-8 justify-center rounded-lg py-[24px] overflow-y-hidden'>
				<div className='left h-full md:w-[40%] overflow-hidden w-[100%] rounded-lg'>
					<Image
						src={EachItem.image}
						width={800}
						height={300}
						alt='hdhd'
						className='object-cover rounded-lg'
					/>
				</div>
				<div className='right md:w-[50%] w-[100%] md:px-0 px-[16px] py-[24px]'>
					<div className='topInfo mb-4'>
						<h6 className='category text-sm font-mono capitalize text-[#c4c4c4] text-[20px] font-bold'>
							{EachItem.category}
						</h6>
						<h6 className='title text-2xl font-bold uppercase text-[var(--primary-color)]'>
							{EachItem.title}
						</h6>
						<div className='rate flex gap-3 items-center justify-start'>
							{ratingFunc(stars)}
						</div>
					</div>
					<p>{EachItem.description}</p>
					<div className='cta w-full px-[16px] py-[10px] flex md:flex-row flex-col justify-between border-2 rounded-lg mt-8 items-center'>
						<div className='left flex flex-col items-start font-semibold'>
							<p className='capitalize md:text-[16px] text-sm w-full'>
								Save up to{' '}
								{Math.floor(
									((EachItem.oldprice - EachItem.price) / EachItem.oldprice) *
										100
								)}
								% by Ordering Now
							</p>
							<p className='text-[var(--primary-color)] flex gap-4 text-[32px]'>
								<span className='line-through text-[#c4c4c4] font-strikethrough'>
									${EachItem.oldprice}
								</span>
								${EachItem.price}
							</p>
						</div>
						<div className='ctabtn flex items-center justify-end gap-2 h-full w-full'>
							{isAddedToFav ? (
								<button
									className='p-[14px] border-2 border-red-400 md:w-[50px] rounded-md text-red-400 md:mt-0 mt-4 flex items-center justify-center gap-4'
									onClick={() => {
										setFavItem(
											favItem.filter((item) => item.id !== EachItem.id)
										);
										setIsAddedToFav(false);
									}}>
									<IoIosHeart size={20} />
								</button>
							) : (
								<button
									className='p-[14px]  border-2 border-[var(--primary-color)] md:w-[50px] rounded-md text-[var(--primary-color)] md:mt-0 mt-4 flex items-center justify-center gap-4'
									onClick={() => {
										if (!favItem.some((item) => item.id === EachItem.id)) {
											setFavItem([...favItem, EachItem]);
											setIsAddedToFav(true);
										}
									}}>
									<IoIosHeartEmpty size={20} />
								</button>
							)}
							{isAddedToCart ? (
								<button
									className='py-[14px] px-[16px] bg-red-400 md:w-auto w-full rounded-md text-white md:mt-0 mt-4 flex items-center justify-center gap-4'
									onClick={() => {
										setCartItem(
											cartItem.filter((item) => item.id !== EachItem.id)
										);
										setIsAddedToCart(false);
									}}>
									<FaTrash size={20} />
									Remove From Cart
								</button>
							) : (
								<button
									className='py-[14px] px-[16px] bg-[var(--primary-color)] md:w-[200px] w-full rounded-md text-white md:mt-0 mt-4 flex items-center justify-center gap-4'
									onClick={() => {
										if (!cartItem.some((item) => item.id === EachItem.id)) {
											setCartItem([...cartItem, EachItem]);
											setIsAddedToCart(true);
										}
									}}>
									<FaCartPlus size={20} />
									Add To Cart
								</button>
							)}
						</div>
					</div>
					<div
						className='py-[14px] flex items-center justify-start gap-4 px-[16px] text-[var(--primary-color)] my-[24px] rounded-md font-semibold md:text-left text-center w-full cursor-pointer'
						onClick={() => window.history.back()}>
						<MdArrowBack size={24} />
						Continue Shopping
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
