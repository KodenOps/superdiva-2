'use client';
import TopProduct from '@/pages/TopProduct';
import Hero from '@/pages/Hero';
import React, { useEffect, useState } from 'react';
import Promosection from '@/pages/Promosection';
import Categories from '@/pages/Categories';
import Footer from '@/components/Footer';
import ProductPreview from '@/pages/ProductPreview';

export default function Home() {
	const [previewItem, setpreviewItem] = useState(false);
	const [EachItem, setEachItem] = useState({});
	const [cartItem, setcartItem] = useState([]);
	const [favItem, setfavItem] = useState([]);
	const [isAddedToCart, setisAddedToCart] = useState(false);
	const [isAddedToFav, setisAddedToFav] = useState(false);
	const [loading, setLoading] = useState(true);

	// Scroll to top on initial load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [EachItem, previewItem]);

	// Load data from localStorage on initial load
	useEffect(() => {
		const storedCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
		const storedFavItems = JSON.parse(localStorage.getItem('favItem')) || [];
		const storedEachItem = JSON.parse(localStorage.getItem('EachItem')) || {};
		const storedPreviewItem =
			JSON.parse(localStorage.getItem('previewItem')) || false;

		setcartItem(storedCartItems);
		setfavItem(storedFavItems);
		setEachItem(storedEachItem);
		setpreviewItem(storedPreviewItem);

		const checkIfPresentInCart = storedCartItems.some(
			(item) => item.id === storedEachItem.id
		);
		setisAddedToCart(checkIfPresentInCart);

		const checkIfPresentInFav = storedFavItems.some(
			(item) => item.id === storedEachItem.id
		);
		setisAddedToFav(checkIfPresentInFav);

		// Simulate loading with setTimeout
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen w-full'>
				<script
					src='https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
					type='module'
					defer></script>

				<dotlottie-player
					src='https://lottie.host/2f99218f-62ed-4337-a64e-b5b69764602e/3tRWqnngbp.json'
					background='transparent'
					speed='1'
					className="'w-[300px] h-[300px]"
					loop
					autoplay></dotlottie-player>
			</div>
		);
	}

	return (
		<main>
			{!previewItem ? (
				<div>
					<Hero
						cartItem={cartItem}
						setcartItem={setcartItem}
						favItem={favItem}
						setfavItem={setfavItem}
					/>
					<Categories />
					<TopProduct
						setpreviewItem={setpreviewItem}
						previewItem={previewItem}
						EachItem={EachItem}
						setEachItem={setEachItem}
					/>
					<Promosection
						setpreviewItem={setpreviewItem}
						previewItem={previewItem}
						EachItem={EachItem}
						setEachItem={setEachItem}
					/>
				</div>
			) : (
				<ProductPreview
					EachItem={EachItem}
					setEachItem={setEachItem}
					setpreviewItem={setpreviewItem}
					previewItem={previewItem}
					cartItem={cartItem}
					setcartItem={setcartItem}
					favItem={favItem}
					setfavItem={setfavItem}
					isAddedToCart={isAddedToCart}
					setisAddedToCart={setisAddedToCart}
					isAddedToFav={isAddedToFav}
					setisAddedToFav={setisAddedToFav}
				/>
			)}
			<Footer />
		</main>
	);
}
