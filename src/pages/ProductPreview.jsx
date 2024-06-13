'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import '@/app/globals.css';
import Image from 'next/image';

const ProductPreview = ({
	previewItems,
	setpreviewItems,
	EachItem,
	setEachItem,
}) => {
	return (
		<div className='min-h-[100vh] '>
			<Navbar />
			<div className='min-h-screen'>
				<Image
					src={EachItem.image}
					width={60}
					height={60}
					alt='hdhd'
				/>
				<button onClick={(e) => setpreviewItems(!previewItems)}>Click</button>
				<p>{EachItem.title}</p>
			</div>
		</div>
	);
};

export default ProductPreview;
