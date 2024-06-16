// src/app/cart.jsx

'use client';
import React, { useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';

const Cart = () => {
	const { cartItem, favItem } = useContext(cartContext);

	return (
		<div>
			<Navbar
				cartItem={cartItem}
				favItem={favItem}
			/>
			<h3>Cart Items</h3>
			<ul>
				{cartItem.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
			<Footer />
		</div>
	);
};

export default Cart;
