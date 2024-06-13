import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
const font = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "800"],
});

export const metadata = {
	title: "SuperDiva V.2",
	description: "The smart way to shop.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<body className={font.className}>{children}</body>
		</html>
	);
}
