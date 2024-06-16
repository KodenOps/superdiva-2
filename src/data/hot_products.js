const hotProductsDB = [
	{
		id: 'qoEa1r3z',
		title: 'Vintage Floral Dress',
		price: 70.0,
		oldprice: 100.0,
		description:
			'Embrace timeless elegance with our Vintage Floral Dress. This enchanting piece features a classic floral print and a flattering A-line silhouette, perfect for any occasion. Crafted from lightweight, breathable fabric, it ensures all-day comfort. The delicate detailing adds a touch of charm, making it a must-have for your wardrobe. Ideal for both casual and formal events, this dress promises to elevate your style effortlessly. Available in various sizes.',
		category: 'dress',
		image:
			'https://cdn.yoursclothing.com/Images/ProductImages/b96372c7-c683-49_137786_D.jpg',
		rating: { rate: 4.7, count: 320 },
		count: 1,
	},
	{
		id: 'sFb4Wt7y',
		title: 'Casual Denim Jacket',
		price: 90.0,
		oldprice: 120.0,
		description:
			"Upgrade your casual wardrobe with our Casual Denim Jacket. This versatile piece features a classic design with modern touches, perfect for layering over any outfit. Made from high-quality denim, it offers durability and comfort. The jacket's timeless style makes it a staple for any season, ensuring you stay fashionable year-round. Pair it with jeans or a dress for a chic look. Available in multiple sizes.",
		category: 'jacket',
		image:
			'https://www.tristanstyle.com/cdn/shop/files/FV120C0436Z_BL01_1_800x.jpg?v=1709090415',
		rating: { rate: 4.8, count: 280 },
		count: 1,
	},
	{
		id: 'pLm9Cq2x',
		title: 'Comfortable Knit Sweater',
		price: 60.0,
		oldprice: 80.0,
		description:
			'Stay cozy and stylish with our Comfortable Knit Sweater. This sweater features a soft, luxurious fabric and a relaxed fit, making it perfect for chilly days. The classic knit design adds a touch of sophistication to your casual wardrobe. Ideal for pairing with jeans or leggings, it ensures you look great while staying warm. Available in various sizes and colors to suit your personal style.',
		category: 'sweater',
		image: 'https://i.ebayimg.com/images/g/Sm8AAOSwXoBkX1Ra/s-l1200.jpg',
		rating: { rate: 4.6, count: 240 },
		count: 1,
	},
	{
		id: 'rTk5Qw8u',
		title: 'Elegant Silk Blouse',
		price: 85.0,
		oldprice: 110.0,
		description:
			'Add a touch of luxury to your wardrobe with our Elegant Silk Blouse. This blouse features a smooth, silky fabric that drapes beautifully, offering a sophisticated look. Perfect for both professional and casual settings, it pairs effortlessly with skirts or trousers. The timeless design and high-quality material ensure it becomes a staple piece in your collection. Available in multiple sizes and colors.',
		category: 'blouse',
		image: 'https://www.avasilk.co.uk/cdn/shop/products/3.jpg?v=1705129641',
		rating: { rate: 4.9, count: 150 },
		count: 1,
	},
	{
		id: 'uIo3Pz9v',
		title: 'Chic Wide-Leg Pants',
		price: 65.0,
		oldprice: 90.0,
		description:
			'Step up your style game with our Chic Wide-Leg Pants. These pants feature a modern, wide-leg silhouette and a comfortable fit, perfect for any occasion. Made from high-quality fabric, they offer both durability and elegance. The versatile design makes them ideal for pairing with blouses, tops, or sweaters. Elevate your wardrobe with these stylish and comfortable pants. Available in various sizes and colors.',
		category: 'pants',
		image:
			'https://aamthelabel.com/cdn/shop/files/mauvewidelegpantfrontfull.png?v=1694556392',
		rating: { rate: 4.5, count: 200 },
		count: 1,
	},
	{
		id: 'wNj8Ht4s',
		title: 'Trendy Off-Shoulder Top',
		price: 50.0,
		oldprice: 70.0,
		description:
			'Make a statement with our Trendy Off-Shoulder Top. This top features a stylish off-shoulder design and a comfortable, relaxed fit, making it perfect for any occasion. The high-quality fabric ensures all-day comfort and durability. Pair it with jeans, skirts, or shorts for a chic, effortless look. Available in various sizes and colors to suit your personal style.',
		category: 'top',
		image:
			'https://www.shopamericanthreads.com/cdn/shop/files/nancy-ivory-cream-foldover-off-shoulder-long-sleeve-cozy-knit-top-trendy-womens-clothing-levis-denim-jeans-vintage-09.jpg?v=1696884604&width=1024',
		rating: { rate: 4.4, count: 260 },
		count: 1,
	},
	{
		id: 'zMk7Lu1x',
		title: 'Sophisticated Pencil Skirt',
		price: 55.0,
		oldprice: 75.0,
		description:
			'Enhance your professional wardrobe with our Sophisticated Pencil Skirt. This skirt features a sleek, tailored fit and a high waist, offering a polished look. Made from high-quality fabric, it provides both comfort and style, perfect for the office or formal events. The classic design makes it a versatile piece that can be paired with blouses, shirts, or sweaters. Available in multiple sizes and colors.',
		category: 'skirt',
		image:
			'https://pds01.b-cdn.net/wp-content/uploads/2019/11/High-Waist-Office-Ladies-Plants-And-Floral-Print-Elegant-Pencil-Skirt-5.jpg',
		rating: { rate: 4.7, count: 220 },
		count: 1,
	},
	{
		id: 'cAo9Rt3w',
		title: 'Stylish Trench Coat',
		price: 120.0,
		oldprice: 160.0,
		description:
			'Stay warm and fashionable with our Stylish Trench Coat. This coat features a classic trench design with modern elements, perfect for any season. Made from high-quality materials, it offers both warmth and durability. The timeless style ensures it remains a staple piece in your wardrobe. Ideal for layering over any outfit, it provides a chic, sophisticated look. Available in various sizes and colors.',
		category: 'coat',
		image:
			'https://www.kosha.co/image/catalog/trench%20coat%20women%202023/maroon2.jpg',
		rating: { rate: 4.8, count: 180 },
		count: 1,
	},
	{
		id: 'vXb6Ap2k',
		title: 'Casual Graphic Tee',
		price: 25.0,
		oldprice: 35.0,
		description:
			'Express your personality with our Casual Graphic Tee. This tee features a comfortable fit and a stylish graphic print, perfect for casual wear. Made from soft, breathable fabric, it ensures all-day comfort. Pair it with jeans, shorts, or skirts for a laid-back, trendy look. Available in multiple sizes and designs to suit your taste.',
		category: 't-shirt',
		image:
			'https://i.pinimg.com/736x/12/9e/e5/129ee58c24612d1a47fdd14e82492b3b.jpg',
		rating: { rate: 4.5, count: 300 },
		count: 1,
	},
	{
		id: 'xKc3Wo5l',
		title: 'Luxury Cashmere Scarf',
		price: 95.0,
		oldprice: 130.0,
		description:
			'Add a touch of elegance to your outfit with our Luxury Cashmere Scarf. Made from premium cashmere, this scarf offers a soft, luxurious feel and exceptional warmth. The classic design makes it a versatile accessory for any occasion, perfect for layering over your favorite outfits. Available in various colors to complement your wardrobe.',
		category: 'accessories',
		image:
			'https://imageio.forbes.com/specials-images/imageserve/5fd9413849f2c768c7c62e3a/The-Lafayette-148-New-York-KindCashmere-Braided-Cable-Scarf-is-an-elevated-take-on-a/960x0.jpg?height=902&width=711&fit=bounds',
		rating: { rate: 4.9, count: 140 },
		count: 1,
	},
	{
		id: 'aJs5Rp9m',
		title: 'Elegant Maxi Dress',
		price: 110.0,
		oldprice: 150.0,
		description:
			'Turn heads with our Elegant Maxi Dress. This dress features a flowing silhouette and intricate detailing, perfect for formal occasions. Made from high-quality materials, it offers both comfort and style, ensuring you look and feel your best. The timeless design makes it a versatile addition to your wardrobe, suitable for weddings, parties, or any special event. Available in multiple sizes and colors.',
		category: 'dress',
		image:
			'https://www.lulus.com/images/product/xlarge/8377281_1703696.jpg?w=375&hdpi=1',
		rating: { rate: 4.8, count: 210 },
		count: 1,
	},
	{
		id: 'zLm8Oq1n',
		title: 'Classic Button-Up Shirt',
		price: 45.0,
		oldprice: 60.0,
		description:
			'Upgrade your wardrobe with our Classic Button-Up Shirt. This shirt features a tailored fit and a timeless design, perfect for both professional and casual settings. Made from high-quality fabric, it offers durability and comfort. Pair it with trousers, skirts, or jeans for a versatile look. Available in various sizes and colors to suit your personal style.',
		category: 'shirt',
		image:
			'https://cdn.shopify.com/s/files/1/0204/7208/files/TW1139-IVORY_08-04-23_VC1084-ECRU_08-04-23_17474_fb2fd430-02aa-46d9-b68c-bcf94a86d3ba.jpg?v=1695775471',
		rating: { rate: 4.6, count: 250 },
		count: 1,
	},
];

export default hotProductsDB;
