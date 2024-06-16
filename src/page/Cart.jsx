// src/pages/cart.js (or src/pages/cart.jsx)

'use client';
import React, { useContext } from 'react';
import '../app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';

const Cart = () => {
	const { cartItem, favItem } = useContext(cartContext);

	return (
		<div className=''>
			<Navbar
				cartItem={cartItem}
				favItem={favItem}
			/>
			<h3>Cart Item</h3>
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
