import Titles from '@/components/Titles';
import React, { useContext, useEffect } from 'react';
import Promo from '@/data/Promo';
import { cartContext } from '@/Context/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Promosection = () => {
	const { previewItem, setPreviewItem, setEachItem, EachItem } =
		useContext(cartContext);
	// set variable to the localstorage
	useEffect(() => {
		localStorage.setItem('previewItem', JSON.stringify(previewItem));
	}, [previewItem]);

	useEffect(() => {
		localStorage.setItem('EachItem', JSON.stringify(EachItem));
	}, [EachItem]);
	
	return (
		<div className='min-h-[50vh] py-[10px] md:px-[50px] px-[10px] mt-[10px]" id="topProd'>
			<Titles
				title='Our 50% Price Slash Promo'
				subtext='Explore our catalog of clearance sales. The products are carefully selected to meet your fashion need while also removing 50% off the initial price'
			/>
			{/* the entire product box */}
			<div className='product_Container flex flex-wrap gap-[24px] mt-[40px] justify-around items-center'>
				{Promo.map((hotDB) => {
					return (
						<Link
							href='./preview'
							key={hotDB.id}>
							<div
								className='md:w-[200px] w-[150px] mb-[40px] hover:shadow-md shadow-sm cursor-pointer p-[10px] rounded-md duration-1000'
								onClick={() => {
									setEachItem(hotDB);
								}}>
								<img
									src={hotDB.image}
									alt='image of products'
									className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] object-cover '
									loading='lazy'
								/>
								<div className='text-[10px] mt-[10px] md:text-left text-center'>
									<h4 className=' font-bold'>{hotDB.title}</h4>
									<p className='text-[gray]'>{hotDB.category}</p>
									<div className='prices   md:justify-left justify-center'>
										<span className='newprice text-[var(--primary-color)] font-semibold'>
											${hotDB.price}
										</span>
										<span className='mx-[10px]'>|</span>
										<span className='oldprice text-[gray] line-through'>
											${hotDB.oldprice}
										</span>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Promosection;
