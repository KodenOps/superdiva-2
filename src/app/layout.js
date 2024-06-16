// src/app/layout.js

import '../app/globals.css';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { CartProvider } from '@/Context/CartContext';

const font = Poppins({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600', '800'],
});

export const metadata = {
	title: 'SuperDiva V.2',
	description: 'The smart way to shop.',
};

export default function RootLayout({ children }) {
	return (
		<CartProvider>
			<html lang='en'>
				<Head>
					<link
						rel='shortcut icon'
						href='/favicon.ico'
					/>
				</Head>
				<body className={font.className}>{children}</body>
			</html>
		</CartProvider>
	);
}
