import Titles from '@/components/Titles';
import React from 'react';
import bag from '../assets/categories/bags.svg';
import gowns from '../assets/categories/gowns.svg';
import jacket from '../assets/categories/jacket.svg';
import shirt from '../assets/categories/shirt.svg';
import shoe from '../assets/categories/shoe.svg';
import trousers from '../assets/categories/trousers.svg';
import Image from 'next/image';
import Link from 'next/link';
const Categories = () => {
	return (
		<section className='md:pt-[100px]  '>
			<Titles
				title='Shop by categories'
				subtext='Tailor your exploration by selecting what you want to see rather than being overwhelmed by all the awesomeness we have here'
			/>
			<div className='categorybox flex items-center justify-center flex-wrap gap-[20px] my-[30px] md:px-[100px] px-[16px]'>
				<Link
					href='/bagscollection'
					className='cursor-pointer hover:translate-y-[-16px] transition-all ease duration-1000 '>
					<Image
						src={bag}
						alt=''
						width={300}
					/>
				</Link>
				<Link
					href='/gownscollection'
					className='cursor-pointer hover:translate-y-[-8px] transition-all ease duration-1000 '>
					<Image
						src={gowns}
						alt=''
						width={300}
					/>
				</Link>
				<Link
					href='/jackets'
					className='cursor-pointer hover:translate-y-[-8px] transition-all ease duration-1000 '>
					<Image
						src={jacket}
						alt=''
						width={300}
					/>
				</Link>
				<Link
					href='/shirts'
					className='cursor-pointer hover:translate-y-[-8px] transition-all ease duration-1000 '>
					<Image
						src={shirt}
						alt=''
						width={300}
					/>
				</Link>
				<Link
					href='/shoesnboots'
					className='cursor-pointer hover:translate-y-[-8px] transition-all ease duration-1000 '>
					<Image
						src={shoe}
						alt=''
						width={300}
					/>
				</Link>

				<div className='cursor-pointer hover:translate-y-[-8px] transition-all ease duration-1000 '>
					<Image
						src={trousers}
						alt=''
						width={300}
					/>
				</div>
			</div>
		</section>
	);
};

export default Categories;
