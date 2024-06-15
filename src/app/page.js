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
	// make the page scroll up upon loading the preview page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [EachItem, previewItem]);
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
	}, []);

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
