import Titles from '@/components/Titles';
import React, { useContext, useEffect } from 'react';
import { cartContext } from '@/Context/CartContext';
import ProductPreview from './ProductPreview';
import Navbar from './Navbar';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const Favorite = () => {
	const {
		loading,
		EachItem,
		setEachItem,
		setFavItem,
		previewItem,
		setPreviewItem,
		cartItem,
		favItem,
		setCartItem,
		isAddedToCart,
		setIsAddedToCart,
		isAddedToFav,
		setIsAddedToFav,
	} = useContext(cartContext);
	// set variable to the localstorage
	useEffect(() => {
		localStorage.setItem('previewItem', JSON.stringify(previewItem));
	}, [previewItem]);

	useEffect(() => {
		localStorage.setItem('EachItem', JSON.stringify(EachItem));
	}, [EachItem]);
	const router = useRouter();
	return !previewItem ? (
		<div>
			<Navbar
				cartItem={cartItem}
				favItem={favItem}
			/>
			<div className='min-h-[50vh] py-[10px] md:px-[50px] px-[10px] md:mt-[50px] mt-[30px] id="topProd'>
				<Titles
					title='Your Favorite Collections'
					subtext='Items you mark as favorite will appear here. '
				/>
				{/* the entire product box */}
				{favItem.length === 0 ? (
					<div className='w-full flex flex-col justify-center items-center pt-[20px] '>
						<dotlottie-player
							src='https://lottie.host/3095858a-c868-43c6-a8fb-278a86188820/Osjevx7uQY.json'
							background='transparent'
							speed='1'
							style={{ width: '300px', height: '300px' }}
							loop
							autoplay></dotlottie-player>
					</div>
				) : (
					<div className='product_Container flex flex-wrap gap-[24px] mt-[40px] justify-center items-center'>
						{favItem.map((hotDB) => {
							return (
								<div key={hotDB.title}>
									<div
										className='md:w-[200px] w-[150px] mb-[40px] hover:shadow-md shadow-sm cursor-pointer p-[10px] rounded-md duration-1000'
										onClick={() => {
											router.push('/preview');
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
								</div>
							);
						})}
					</div>
				)}
				<div className='w-auto md:mb-[40px] mb-[20px]'>
					<Link
						href={'/'}
						className='flex items-center  py-[16px] font-semibold text-[var(--primary-color)] gap-2   justify-center'>
						<MdArrowBack size={20} /> Check Other Items
					</Link>
				</div>
			</div>
		</div>
	) : (
		<ProductPreview
			EachItem={EachItem}
			setEachItem={setEachItem}
			setPreviewItem={setPreviewItem}
			previewItem={previewItem}
			cartItem={cartItem}
			setCartItem={setCartItem}
			favItem={favItem}
			setFavItem={setFavItem}
			isAddedToCart={isAddedToCart}
			setIsAddedToCart={setIsAddedToCart}
			isAddedToFav={isAddedToFav}
			setIsAddedToFav={setIsAddedToFav}
		/>
	);
};

export default Favorite;
