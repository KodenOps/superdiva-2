import React, { useContext, useEffect } from 'react';
import hotProductsDB from '../data/hot_products';
import Titles from '@/components/Titles';
import { cartContext } from '@/Context/CartContext';
import { useRouter } from 'next/navigation';
const TopProduct = () => {
	const { previewItem, setPreviewItem, setEachItem,EachItem, cartItem, favItem } =
		useContext(cartContext);
	useEffect(() => {
		localStorage.setItem('previewItem', JSON.stringify(previewItem));
	}, [previewItem]);
	useEffect(() => {
		localStorage.setItem('EachItem', JSON.stringify(EachItem));
	}, [EachItem]);
	const router = useRouter();
	return (
		<div
			className=' md:px-[50px] px-[10px] my-[100px] mb-[40px]'
			id='topProd'>
			<Titles
				title='What Others Are buying'
				subtext="Don't be left out. Checkout top products other Diva are adding to cart"
			/>
			{/* the entire product box */}
			<div className='product_Container flex flex-wrap mt-[40px] justify-around items-center'>
				{hotProductsDB.map((TopPro) => {
					return (
						<div
							key={TopPro.id}
							className='md:w-[200px] w-[150px]  mb-[40px] hover:shadow-md shadow-sm cursor-pointer p-[10px] rounded-md duration-1000'
							onClick={() => {
								setEachItem(TopPro);
								router.push('./preview');
							}}>
							<img
								src={TopPro.image}
								alt=''
								className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] object-cover aspect-'
								loading='lazy'
							/>
							<div className='text-[10px] mt-[10px] md:text-left text-center'>
								<h4 className=' font-bold'>{TopPro.title}</h4>
								<p className='text-[gray]'>{TopPro.category}</p>
								<div className='prices   md:justify-left justify-center'>
									<span className='newprice text-[var(--primary-color)] font-semibold'>
										${TopPro.price}
									</span>
									<span className='mx-[10px]'>|</span>
									<span className='oldprice text-[gray] line-through'>
										${TopPro.oldprice}
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopProduct;
