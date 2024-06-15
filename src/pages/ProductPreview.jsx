'use client';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import Rating from '@/components/Ratings';
import { FaCartPlus, FaHeart, FaTrash } from 'react-icons/fa';

const ProductPreview = ({
	previewItems,
	setpreviewItems,
	EachItem,
	setEachItem,
	cartItem,
	setcartItem,
	favItem,
	setfavItem,
}) => {
	const [isAddedToCart, setisAddedToCart] = useState(false);

	useEffect(() => {
		// Check if the item is already in the cart when the component mounts
		const checkIfPresent = cartItem.some((item) => item.id === EachItem.id);
		setisAddedToCart(checkIfPresent);
	}, [EachItem, cartItem]);

	if (!EachItem || !EachItem.rating) {
		return null;
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
				setcartItem={setcartItem}
				favItem={favItem}
				setfavItem={setfavItem}
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
							<button
								className='p-[14px] border-2 border-[var(--primary-color)] md:w-[50px] rounded-md text-red-400 md:mt-0 mt-4 flex items-center justify-center gap-4'
								onClick={() => console.log('Added to favorites')}>
								<FaHeart size={20} />
							</button>
							{isAddedToCart ? (
								<button
									className='py-[14px] px-[16px] bg-red-400 md:w-[200px] w-full rounded-md text-white md:mt-0 mt-4 flex items-center justify-center gap-4'
									onClick={() => {
										setcartItem(
											cartItem.filter((item) => item.id !== EachItem.id)
										);
										setisAddedToCart(false);
									}}>
									<FaTrash size={20} />
									Remove From Cart
								</button>
							) : (
								<button
									className='py-[14px] px-[16px] bg-[var(--primary-color)] md:w-[200px] w-full rounded-md text-white md:mt-0 mt-4 flex items-center justify-center gap-4'
									onClick={() => {
										if (!cartItem.some((item) => item.id === EachItem.id)) {
											setcartItem([...cartItem, EachItem]);
											setisAddedToCart(true);
											// console.table(cartItem);
										}
									}}>
									<FaCartPlus size={20} />
									Add To Cart
								</button>
							)}
						</div>
					</div>
					<button
						className='py-[14px] px-[16px] text-[var(--primary-color)] my-[24px] md:w-[200px] rounded-md font-semibold md:text-left text-center w-full'
						onClick={() => setpreviewItems(!previewItems)}>
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
