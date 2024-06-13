import React from 'react';
import hotProductsDB from '../data/hot_products';
import Titles from '@/components/Titles';
const TopProduct = () => {
	return (
		<div
			className=' md:px-[50px] px-[10px] my-[100px] mb-[40px]'
			id='topProd'>
			<Titles
				title='What Others Are buying'
				subtext='Don’t be left out. Checkout top products other Diva are adding to cart'
			/>
			{/* the entire product box */}
			<div className='product_Container flex flex-wrap mt-[40px] justify-around items-center'>
				{hotProductsDB.map((hotDB) => {
					return (
						<div
							key={hotDB.id}
							className='md:w-[200px] w-[120px]  mb-[40px] hover:shadow-md shadow-sm cursor-pointer p-[10px] rounded-md duration-1000'>
							<img
								src={hotDB.image}
								alt=''
								className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] object-cover aspect-'
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
					);
				})}
			</div>
		</div>
	);
};

export default TopProduct;
