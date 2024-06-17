'use client';
import React, { useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';
import Bags from '@/components/Bags';

const CartCollection = () => {
	const { cartItem, favItem } = useContext(cartContext);
	return (
		<div>
		
			<div className='min-h-[60vh]'>
				<Bags />
			</div>
			<Footer />
		</div>
	);
};

export default CartCollection;
