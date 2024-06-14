'use client';
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
	return EachItem ? (
		<div className='min-h-[100vh] w-full overflow-x-hidden'>
			<Navbar />
			<div className='md:h-[100vh] w-full flex md:flex-row flex-col items-start gap-8 justify-center rounded-lg py-[24px]'>
				<div className='left  md:w-[40%] w-[100%]  md:h-[80%] rounded-lg'>
					<Image
						src={EachItem.image}
						width={510}
						height={400}
						alt='hdhd'
						className='object-fill h-full w-full rounded-lg'
					/>
				</div>
				<div className='right md:w-[50%] w-[100%] md:px-0 px-[16px] py-[24px] '>
					<div className='topInfo mb-4'>
						<h6 className='category text-sm font-mono capitalize text-[#c4c4c4] text-[20px] font-bold'>
							{EachItem.category}
						</h6>
						<h6 className='title text-2xl font-bold uppercase text-[var(--primary-color)] '>
							{EachItem.title}
						</h6>
						<h6 className='rate flex gap-3'>
							{EachItem.rating.rate}
							<span>{EachItem.rating.count}</span>
						</h6>
					</div>
					{/* THE PRODUCT Details */}
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut placeat
						nobis labore deleniti quis qui impedit earum debitis neque maxime,
						explicabo, blanditiis tempora veritatis reiciendis quas! Assumenda
						accusantium quasi eaque. Quibusdam minima laudantium, modi autem
						quis beatae consequatur fuga voluptatibus optio, iste eos
						consectetur officiis doloremque repellat ipsam itaque inventore qui
						dolore ad. Deleniti ullam repellendus adipisci voluptatibus porro
						dolore veniam architecto, quaerat officia eaque cupiditate molestiae
						cum aspernatur explicabo qui consequuntur quo suscipit quae
						eligendi. Velit eligendi laborum ex? Voluptate, quod distinctio quo
						provident, corporis a perferendis aut reprehenderit porro minima
						ullam exercitationem architecto omnis sunt deleniti alias nesciunt
						ducimus blanditiis magni, non modi laboriosam incidunt sit? Enim
						facilis eum quod, ratione expedita ea in, natus explicabo
						voluptatibus temporibus at quibusdam impedit amet ipsam debitis rem,
						praesentium earum vitae mollitia. Sint sit nobis beatae quaerat
						magni quam temporibus soluta hic non. Ratione sed voluptate
						consequatur officia distinctio! Neque aliquid aut voluptas
						consectetur animi distinctio natus quisquam nulla rem illo odio eius
						quis recusandae cumque, mollitia, nesciunt suscipit iste, unde
						repudiandae explicabo magnam veritatis sit expedita. Commodi
						repudiandae ipsa consectetur tenetur incidunt officiis,
						necessitatibus, doloribus consequuntur ea nesciunt quibusdam aliquid
						impedit ab voluptates omnis similique. Fugiat maiores inventore
						nobis sunt.
					</p>
					<div className='cta w-full px-[16px] py-[10px] flex md:flex-row flex-col justify-between border-2  rounded-lg mt-8 items-center '>
						<div className='left flex flex-col items-center font-semibold'>
							<p className='capitalize '>
								Save up to{' '}
								{Math.floor(
									((EachItem.oldprice - EachItem.price) / EachItem.oldprice) *
										100
								)}
								% by Ordering Now
							</p>
							<p className='text-[var(--primary-color)] flex gap-4 text-[32px]'>
								<span className='line-through text-[#c4c4c4] font-strikethrough'>
									${EachItem.oldprice}
								</span>
								${EachItem.price}
							</p>
						</div>
						<button
							className='py-[14px] px-[16px] bg-[var(--primary-color)] md:w-[200px] w-full rounded-md text-white mt-4'
							onClick={(e) => console.log('Added to cart')}>
							Add To Cart
						</button>
					</div>
					<button
						className='py-[14px] px-[16px] text-[var(--primary-color)] md:w-[200px] rounded-md font-semibold md:text-left text-center w-full'
						onClick={(e) => setpreviewItems(!previewItems)}>
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	) : (
		''
	);
};

export default ProductPreview;
