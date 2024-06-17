// src/Context/CartContext.js

'use client';
import React, { createContext, useState, useEffect } from 'react';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [EachItem, setEachItem] = useState([]);
	const [favItem, setFavItem] = useState([]);
	const [previewItem, setPreviewItem] = useState(false);
	const [cartItem, setCartItem] = useState([]);
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const [isAddedToFav, setIsAddedToFav] = useState(false);

	useEffect(() => {
		const savedCartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
		const savedFavItem = JSON.parse(localStorage.getItem('favItem')) || [];
		setCartItem(savedCartItem);
		setFavItem(savedFavItem);
		setLoading(false); // Set loading to false after loading from local storage
	}, []);

	return (
		<cartContext.Provider
			value={{
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
			}}>
			{children}
		</cartContext.Provider>
	);
};
