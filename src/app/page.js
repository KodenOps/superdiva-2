'use client';
import TopProduct from '@/pages/TopProduct';
import Hero from '../pages/Hero';
import React, { useState } from 'react';
import Promosection from '@/pages/Promosection';
import Categories from '@/pages/Categories';
import Footer from '@/components/Footer';
import ProductPreview from '@/pages/ProductPreview';

export default function Home() {
	const [previewItem, setpreviewItem] = useState(false);
	const [EachItem, setEachItem] = useState([]);
	
	return (
		<main className=''>
			{!previewItem ? (
				<div>
					<Hero />
					<Categories />
					<TopProduct />
					<Promosection
						setpreviewItems={setpreviewItem}
						previewItems={previewItem}
						EachItem={EachItem}
						setEachItem={setEachItem}
					/>
				</div>
			) : (
				<ProductPreview
					EachItem={EachItem}
					setEachItem={setEachItem}
					setpreviewItems={setpreviewItem}
					previewItems={previewItem}
				/>
			)}
			<Footer />
		</main>
	);
}
