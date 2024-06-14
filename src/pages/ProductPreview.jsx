'use client';
import Navbar from '@/components/Navbar';
import React from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import Rating from '@/components/Ratings';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const ProductPreview = ({
	previewItems,
	setpreviewItems,
	EachItem,
	setEachItem,
}) => {
	if (!EachItem || !EachItem.rating) {
		// If EachItem is undefined or EachItem.rating is undefined/null, return null or handle the case accordingly
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
		<div className='min-h-[100vh] w-full overflow-x-hidden'>
			<Navbar />
			<div className='w-full h-full flex md:flex-row flex-col items-start gap-8 justify-center rounded-lg py-[24px] overflow-y-hidden'>
				<div className='left md:w-[40%] h-full overflow-hidden w-[100%] rounded-lg'>
					<Image
						src={EachItem.image}
						width={310}
						height={200}
						alt='hdhd'
						className='object-fill w-full rounded-lg'
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
					{/* THE PRODUCT Details */}
					<p>
						Elevate your style with our Effortlessly Chic Maxi Dress. This
						stunning piece blends sophistication and comfort, making it a
						must-have for any fashion-forward wardrobe. The dress features a
						flowy silhouette that flatters all body types, and its delicate
						detailing adds a touch of elegance to your look. Crafted with
						premium materials, this dress ensures durability and comfort,
						perfect for any occasion. Whether you&apos;re attending a summer
						wedding, enjoying a day out with friends, or simply looking to add a
						versatile piece to your collection, this maxi dress is your go-to
						choice. Featuring an elegant design, the dress enhances your natural
						beauty with a flattering silhouette. Its premium quality fabric
						guarantees long-lasting wear and comfort. The versatile style makes
						it ideal for weddings, casual outings, or any special event.
						Delicate detailing adds a touch of sophistication and charm, making
						it a timeless addition to your wardrobe. Turn heads and feel
						confident in the Effortlessly Chic Maxi Dress. Available in multiple
						sizes and colors to suit your personal style. Shop now and embrace
						timeless elegance. The Effortlessly Chic Maxi Dress is designed to
						be a staple in your wardrobe, offering a balance of style and
						comfort that is unmatched. This dress is perfect for any season,
						easily transitioning from a summer day out to a cozy autumn evening.
						Its effortless design and high-quality fabric make it easy to dress
						up or down, ensuring you always look your best. Don&apos;t miss out
						on the opportunity to add this beautiful dress to your collection.
						With its timeless design and superior craftsmanship, the
						Effortlessly Chic Maxi Dress is an investment in style and elegance.
						Shop today and discover why this dress is a favorite among fashion
						enthusiasts.
					</p>
					<div className='cta w-full px-[16px] py-[10px] flex md:flex-row flex-col justify-between border-2 rounded-lg mt-8 items-center'>
						<div className='left flex flex-col items-center font-semibold'>
							<p className='capitalize'>
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
								onClick={(e) => console.log('Added to cart')}>
								<FaHeart size={20} />
							</button>
							<button
								className='py-[14px] px-[16px] bg-[var(--primary-color)] md:w-[200px] w-full rounded-md text-white md:mt-0 mt-4 flex items-center justify-center gap-4'
								onClick={(e) => console.log('Added to cart')}>
								<FaCartPlus size={20} />
								Add To Cart
							</button>
						</div>
					</div>
					<button
						className='py-[14px] px-[16px] text-[var(--primary-color)] my-[24px] md:w-[200px] rounded-md font-semibold md:text-left text-center w-full'
						onClick={(e) => setpreviewItems(!previewItems)}>
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
