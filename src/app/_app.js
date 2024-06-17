import '@/styles/globals.css'; // Ensure you adjust this import based on your setup
import { CartProvider } from '@/Context/CartContext';

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
}

export default MyApp;
