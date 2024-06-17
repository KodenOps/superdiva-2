'use client';
import React, { useContext, useEffect } from 'react';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';
import Favorite from '@/components/Favorite';

const CartCollection = () => {
	const {
		loading,
		setEachItem,
		setFavItem,
		setPreviewItem,
		setLoading,
		setCartItem,
		previewItem,
		setIsAddedToCart,
		setIsAddedToFav,
	} = useContext(cartContext);
	// Scroll to top on initial load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [previewItem]);

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
			<div className='flex items-center  justify-center h-screen w-full'>
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
		<div>
			<div className='min-h-[60vh]'>
				<Favorite />
			</div>
			<Footer />
		</div>
	);
};

export default CartCollection;
