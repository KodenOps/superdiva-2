'use client';
import TopProduct from '@/pages/TopProduct';
import Hero from '../pages/Hero';
import React, { useEffect, useState } from 'react';
import Promosection from '@/pages/Promosection';
import Categories from '@/pages/Categories';
import Footer from '@/components/Footer';
import ProductPreview from '@/pages/ProductPreview';

export default function Home() {
	const [previewItem, setpreviewItem] = useState(false);
	const [EachItem, setEachItem] = useState([]);
	const [cartItem, setcartItem] = useState([]);
	const [favItem, setfavItem] = useState([]);
	const [isAddedToCart, setisAddedToCart] = useState(false);
	const [isAddedToFav, setisAddedToFav] = useState(false);
	const [loading, setLoading] = useState(true);
	// make the page scroll up upon loading the preview page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [EachItem.id, previewItem]);
	useEffect(() => {
		localStorage.setItem('previewItem', JSON.stringify(previewItem));
	}, [previewItem]);
	// get the value of the store vontent of localstorage
	useEffect(() => {
		const storedCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
		const storedFavItems = JSON.parse(localStorage.getItem('favItem')) || [];
		const storedEachItems = JSON.parse(localStorage.getItem('EachItem')) || [];
		const storedPreviewItems =
			JSON.parse(localStorage.getItem('previewItem')) || false;
		setcartItem(storedCartItems);
		setfavItem(storedFavItems);
		setpreviewItem(storedPreviewItems);
		setEachItem(storedEachItems);
		const checkIfPresentInCart = storedCartItems.some(
			(item) => item.id === EachItem.id
		);
		setisAddedToCart(checkIfPresentInCart);

		const checkIfPresentInFav = storedFavItems.some(
			(item) => item.id === EachItem.id
		);
		setisAddedToFav(checkIfPresentInFav);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	if (loading) {
		return (
			<div className='flex items-center justify-center h-screen w-full'>
				<script
					src='https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
					type='module'></script>

				<dotlottie-player
					src='https://lottie.host/2f99218f-62ed-4337-a64e-b5b69764602e/3tRWqnngbp.json'
					background='transparent'
					speed='1'
					className="'w-[300px] h-[300px]"
					loop
					autoplay></dotlottie-player>
			</div>
		); // Replace with a loader component or message
	}

	return (
		<main className=''>
			{!previewItem ? (
				<div>
					<Hero
						cartItem={cartItem}
						setcartItem={setcartItem}
						favItem={favItem}
						setfavItem={setfavItem}
					/>
					<Categories />
					<TopProduct />
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
