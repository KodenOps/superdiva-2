// app/page.js
'use client';
import React, { useContext, useEffect } from 'react';
import TopProduct from '@/components/TopProduct';
import Hero from '@/components/Hero';
import Promosection from '@/components/Promosection';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import '../apm'

// import ProductPreview from '@/components/ProductPreview';
import { cartContext } from '@/Context/CartContext';

export default function Home() {
	const {
		loading,
		EachItem,
		setEachItem,
		setFavItem,
		previewItem,
		setPreviewItem,
		setLoading,
		cartItem,
		favItem,
		setCartItem,
		isAddedToCart,
		setIsAddedToCart,
		isAddedToFav,
		setIsAddedToFav,
	} = useContext(cartContext);

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

		setCartItem(storedCartItems);
		setFavItem(storedFavItems);
		setEachItem(storedEachItem);
		setPreviewItem(storedPreviewItem);

		const checkIfPresentInCart = storedCartItems.some(
			(item) => item.id === storedEachItem.id
		);
		setIsAddedToCart(checkIfPresentInCart);

		const checkIfPresentInFav = storedFavItems.some(
			(item) => item.id === storedEachItem.id
		);
		setIsAddedToFav(checkIfPresentInFav);

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
			<div>
				<Hero
					cartItem={cartItem}
					setCartItem={setCartItem}
					favItem={favItem}
					setFavItem={setFavItem}
				/>
				<Categories />
				<TopProduct
					// setPreviewItem={setPreviewItem}
					previewItem={previewItem}
					EachItem={EachItem}
					setEachItem={setEachItem}
				/>
				<Promosection
					// setPreviewItem={setPreviewItem}
					previewItem={previewItem}
					EachItem={EachItem}
					setEachItem={setEachItem}
				/>
			</div>

			<Footer />
		</main>
	);
}
