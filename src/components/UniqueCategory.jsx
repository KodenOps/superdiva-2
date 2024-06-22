import Titles from '@/components/Titles';
import React, { useContext, useEffect } from 'react';
import { cartContext } from '@/Context/CartContext';
import Navbar from './Navbar';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const UniqueCategory = ({ db, pageTitle, pageParagraph }) => {
	const { setEachItem, EachItem, setPreviewItem, cartItem, favItem } =
		useContext(cartContext);
	const router = useRouter();
	useEffect(() => {
		localStorage.setItem('EachItem', JSON.stringify(EachItem));
	}, [EachItem]);
	const handleClick = (e) => {
		setEachItem(e);
		router.push(`/${e.title.replace(/ /g, '_')}`);
	};

	return (
		<div>
			<Navbar
				cartItem={cartItem}
				favItem={favItem}
			/>
			<div
				className='min-h-[50vh] py-[10px] md:px-[50px] px-[10px] mt-[10px]'
				id='topProd'>
				<Titles
					title={pageTitle}
					subtext={pageParagraph}
				/>
				<div className='product_Container flex flex-wrap gap-[24px] mt-[40px] justify-around items-center'>
					{db.map((item) => (
						<div
							// href={`/${item.title.replace(/ /g, '_')}`}
							key={item.title}
							onClick={() => handleClick(item)}>
							<div className='md:w-[200px] w-[150px] mb-[40px] hover:shadow-md shadow-sm cursor-pointer p-[10px] rounded-md duration-1000'>
								<img
									src={item.image}
									alt='image of products'
									className='md:w-[200px] md:h-[200px] w-[160px] h-[160px] object-cover '
									loading='lazy'
								/>
								<div className='text-[10px] mt-[10px] md:text-left text-center'>
									<h4 className=' font-bold'>{item.title}</h4>
									<p className='text-[gray]'>{item.category}</p>
									<div className='prices   md:justify-left justify-center'>
										<span className='newprice text-[var(--primary-color)] font-semibold'>
											${item.price}
										</span>
										<span className='mx-[10px]'>|</span>
										<span className='oldprice text-[gray] line-through'>
											${item.oldprice}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div
					className='py-[14px] flex items-center justify-center gap-4 px-[16px] text-[var(--primary-color)] my-[24px] rounded-md font-semibold md:text-left text-center w-full cursor-pointer'
					onClick={() => router.back()}>
					<MdArrowBack size={24} />
					Continue Shopping
				</div>
			</div>
		</div>
	);
};

export default UniqueCategory;
