'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';
import { createOrderId, saveOrder, ORDER_STATUS } from '@/lib/orders';
import {
	formatNaira,
	VAT_RATE,
	SHIPPING_FEE,
	NIGERIAN_STATES,
} from '@/lib/currency';
import { MdArrowBack, MdUploadFile } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';

// Replace these with the store's real receiving account before going live.
const PAYMENT_ACCOUNT = {
	bank: 'Opay',
	name: 'SuperDiva Stores',
	number: '0123456789',
};

const NIGERIAN_PHONE = /^(?:\+234|0)[789][01]\d{8}$/;

const STEPS = ['Delivery details', 'Payment', 'Upload receipt'];

const Checkout = () => {
	const { cartItem, favItem, setCartItem } = useContext(cartContext);
	const [step, setStep] = useState(0);
	const [orderId, setOrderId] = useState('');
	const [receipt, setReceipt] = useState(null);
	const [error, setError] = useState('');
	const [placedOrder, setPlacedOrder] = useState(null);
	const [details, setDetails] = useState({
		name: '',
		phone: '',
		email: '',
		address: '',
		city: '',
		state: 'Lagos',
	});

	const itemsTotal = cartItem.reduce(
		(sum, item) => sum + item.price * item.count,
		0
	);
	const vat = VAT_RATE * itemsTotal;
	const shipping = cartItem.length > 0 ? SHIPPING_FEE : 0;
	const grandTotal = itemsTotal + vat + shipping;

	const updateDetail = (event) => {
		setDetails({ ...details, [event.target.name]: event.target.value });
	};

	const goToPayment = () => {
		setError('');
		if (
			!details.name.trim() ||
			!details.phone.trim() ||
			!details.address.trim() ||
			!details.city.trim() ||
			!details.state.trim()
		) {
			setError('Please fill your name, phone number and delivery address.');
			return;
		}
		if (!NIGERIAN_PHONE.test(details.phone.replace(/\s/g, ''))) {
			setError('Enter a valid Nigerian phone number, e.g. 08012345678.');
			return;
		}
		if (!orderId) setOrderId(createOrderId());
		setStep(1);
	};

	const handleReceipt = (event) => {
		const file = event.target.files?.[0];
		if (!file) return;
		setError('');

		const isImage = file.type.startsWith('image/');
		const isPdf = file.type === 'application/pdf';
		if (!isImage && !isPdf) {
			setError('Upload a photo or PDF of your payment receipt.');
			return;
		}
		if (file.size > 4 * 1024 * 1024) {
			setError('That file is too large. Please upload a file under 4MB.');
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			setReceipt({
				name: file.name,
				size: file.size,
				type: file.type,
				dataUrl: reader.result,
			});
		};
		reader.readAsDataURL(file);
	};

	const completeOrder = () => {
		if (!receipt) {
			setError('Please upload your payment receipt first.');
			return;
		}
		const order = {
			id: orderId || createOrderId(),
			createdAt: Date.now(),
			status: ORDER_STATUS.CONFIRMING,
			customer: details,
			items: cartItem.map((item) => ({
				id: item.id,
				title: item.title,
				price: item.price,
				count: item.count,
				image: item.image,
			})),
			itemsTotal: Math.round(itemsTotal),
			vat: Math.round(vat),
			shipping,
			total: Math.round(grandTotal),
			receipt: {
				name: receipt.name,
				type: receipt.type,
				size: receipt.size,
				// keep large files out of storage, the file name is still recorded
				dataUrl:
					receipt.dataUrl && receipt.dataUrl.length < 1500000
						? receipt.dataUrl
						: null,
			},
		};

		try {
			saveOrder(order);
		} catch (storageError) {
			setError('We could not save your order. Please try a smaller receipt.');
			return;
		}

		setPlacedOrder(order);
		setCartItem([]);
		localStorage.setItem('cartItem', JSON.stringify([]));
	};

	if (placedOrder) {
		return (
			<div className='bg-slate-200 min-h-screen flex flex-col'>
				<Navbar cartItem={[]} favItem={favItem} />
				<div className='flex-1 bg-white w-full max-w-[640px] mx-auto my-[40px] rounded-lg p-[24px] text-center'>
					<AiOutlineCheckCircle
						size={56}
						className='mx-auto text-[var(--secondary-color)]'
					/>
					<h2 className='text-2xl font-bold text-[var(--primary-color)] mt-[16px]'>
						Order received
					</h2>
					<p className='mt-[10px] text-[15px]'>
						Your order <span className='font-semibold'>{placedOrder.id}</span>{' '}
						has been submitted together with your payment receipt.
					</p>
					<div className='mt-[20px] border-2 rounded-md p-[16px] bg-slate-50'>
						<p className='text-[13px] text-[#6a6a6a]'>Order status</p>
						<p className='font-semibold text-[18px] text-[var(--primary-color)]'>
							Confirming Payment
						</p>
						<p className='text-[12px] text-[#6a6a6a] mt-[6px]'>
							Our team is checking your transfer. Once payment is confirmed you
							will see the update on your orders page — usually within 30
							minutes during work hours.
						</p>
					</div>
					<div className='flex flex-col md:flex-row gap-[10px] mt-[24px]'>
						<Link
							href='/orders'
							className='flex-1 py-[12px] rounded-sm text-white bg-[var(--primary-color)]'>
							Track My Order
						</Link>
						<Link
							href='/'
							className='flex-1 py-[12px] rounded-sm border-2 border-[var(--primary-color)] text-[var(--primary-color)]'>
							Continue Shopping
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	if (cartItem.length === 0) {
		return (
			<div className='bg-slate-200 min-h-screen flex flex-col'>
				<Navbar cartItem={[]} favItem={favItem} />
				<div className='flex-1 bg-white w-full max-w-[640px] mx-auto my-[40px] rounded-lg p-[24px] text-center'>
					<h2 className='text-xl font-bold text-[var(--primary-color)]'>
						Your cart is empty
					</h2>
					<p className='mt-[10px]'>Add an item before checking out.</p>
					<Link
						href='/'
						className='inline-flex items-center gap-2 mt-[20px] font-semibold text-[var(--primary-color)]'>
						<MdArrowBack /> Continue Shopping
					</Link>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className='bg-slate-200 flex flex-col min-h-screen'>
			<Navbar cartItem={cartItem} favItem={favItem} />
			<div className='flex-1 w-full bg-white my-[20px] rounded-lg flex flex-col md:flex-row items-start'>
				<div className='w-full md:w-[62%] p-[16px] md:p-[24px]'>
					<h2 className='text-2xl font-bold text-[var(--primary-color)]'>
						Checkout
					</h2>
					{/* progress */}
					<div className='flex items-center gap-[8px] my-[20px]'>
						{STEPS.map((label, index) => (
							<React.Fragment key={label}>
								<div
									className={`flex items-center gap-2 text-[12px] ${
										index <= step
											? 'text-[var(--primary-color)] font-semibold'
											: 'text-[#9b9b9b]'
									}`}>
									<span
										className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-white text-[11px] ${
											index <= step
												? 'bg-[var(--primary-color)]'
												: 'bg-[#c4c4c4]'
										}`}>
										{index + 1}
									</span>
									{label}
								</div>
								{index < STEPS.length - 1 ? (
									<span className='flex-1 h-[2px] bg-slate-200' />
								) : null}
							</React.Fragment>
						))}
					</div>

					{step === 0 ? (
						<div className='grid grid-cols-1 md:grid-cols-2 gap-[12px]'>
							<input
								name='name'
								value={details.name}
								onChange={updateDetail}
								placeholder='Full name'
								className='border-2 rounded-sm px-[12px] py-[10px] outline-none'
							/>
							<input
								name='phone'
								value={details.phone}
								onChange={updateDetail}
								placeholder='Phone number (080...)'
								inputMode='tel'
								className='border-2 rounded-sm px-[12px] py-[10px] outline-none'
							/>
							<input
								name='email'
								value={details.email}
								onChange={updateDetail}
								placeholder='Email (optional)'
								className='border-2 rounded-sm px-[12px] py-[10px] outline-none md:col-span-2'
							/>
							<input
								name='address'
								value={details.address}
								onChange={updateDetail}
								placeholder='Delivery address (street, bus stop, landmark)'
								className='border-2 rounded-sm px-[12px] py-[10px] outline-none md:col-span-2'
							/>
							<input
								name='city'
								value={details.city}
								onChange={updateDetail}
								placeholder='City / Area'
								className='border-2 rounded-sm px-[12px] py-[10px] outline-none'
							/>
							<select
								name='state'
								value={details.state}
								onChange={updateDetail}
								className='border-2 rounded-sm px-[12px] py-[10px] outline-none bg-white'>
								{NIGERIAN_STATES.map((state) => (
									<option key={state} value={state}>
										{state}
									</option>
								))}
							</select>
							<p className='md:col-span-2 text-[12px] text-[#6a6a6a]'>
								Lagos deliveries arrive in 1–3 working days, other states in
								2–5 working days.
							</p>
							<button
								onClick={goToPayment}
								className='md:col-span-2 mt-[8px] py-[12px] rounded-sm text-white bg-[var(--primary-color)]'>
								Continue to payment
							</button>
						</div>
					) : null}

					{step === 1 ? (
						<div>
							<p className='text-[14px] mb-[12px]'>
								Transfer the total below to our store account, then upload the
								payment receipt on the next step.
							</p>
							<div className='border-2 rounded-md p-[16px] bg-slate-50'>
								<div className='flex justify-between text-[14px] py-[4px]'>
									<span className='text-[#6a6a6a]'>Bank</span>
									<span className='font-semibold'>{PAYMENT_ACCOUNT.bank}</span>
								</div>
								<div className='flex justify-between text-[14px] py-[4px]'>
									<span className='text-[#6a6a6a]'>Account name</span>
									<span className='font-semibold'>{PAYMENT_ACCOUNT.name}</span>
								</div>
								<div className='flex justify-between text-[14px] py-[4px]'>
									<span className='text-[#6a6a6a]'>Account number</span>
									<span className='font-semibold'>
										{PAYMENT_ACCOUNT.number}
									</span>
								</div>
								<div className='flex justify-between text-[14px] py-[4px] border-t-2 mt-[8px] pt-[8px]'>
									<span className='text-[#6a6a6a]'>Amount</span>
									<span className='font-bold text-[var(--primary-color)]'>
										{formatNaira(grandTotal)}
									</span>
								</div>
								<div className='flex justify-between text-[14px] py-[4px]'>
									<span className='text-[#6a6a6a]'>Transfer narration</span>
									<span className='font-semibold'>{orderId}</span>
								</div>
							</div>
							<p className='text-[12px] text-[#6a6a6a] mt-[10px]'>
								Use your order ID as the transfer narration so we can match
								your payment quickly. Bank transfers reflect in minutes.
							</p>
							<div className='flex gap-[10px] mt-[16px]'>
								<button
									onClick={() => setStep(0)}
									className='flex-1 py-[12px] rounded-sm border-2 border-[var(--primary-color)] text-[var(--primary-color)]'>
									Back
								</button>
								<button
									onClick={() => setStep(2)}
									className='flex-1 py-[12px] rounded-sm text-white bg-[var(--primary-color)]'>
									I have paid
								</button>
							</div>
						</div>
					) : null}

					{step === 2 ? (
						<div>
							<label className='border-2 border-dashed rounded-md p-[24px] flex flex-col items-center justify-center cursor-pointer text-center'>
								<MdUploadFile
									size={40}
									className='text-[var(--secondary-color)]'
								/>
								<span className='font-semibold mt-[8px]'>
									{receipt ? receipt.name : 'Upload your payment receipt'}
								</span>
								<span className='text-[12px] text-[#6a6a6a] mt-[4px]'>
									Photo or PDF of your transfer receipt
								</span>
								<input
									type='file'
									accept='image/*,application/pdf'
									onChange={handleReceipt}
									className='hidden'
								/>
							</label>
							{receipt ? (
								<p className='text-[12px] text-green-600 mt-[8px]'>
									Receipt uploaded successfully.
								</p>
							) : null}
							<div className='flex gap-[10px] mt-[16px]'>
								<button
									onClick={() => setStep(1)}
									className='flex-1 py-[12px] rounded-sm border-2 border-[var(--primary-color)] text-[var(--primary-color)]'>
									Back
								</button>
								{receipt ? (
									<button
										onClick={completeOrder}
										className='flex-1 py-[12px] rounded-sm text-white bg-[var(--primary-color)] font-semibold'>
										Complete Order
									</button>
								) : (
									<button
										disabled
										className='flex-1 py-[12px] rounded-sm text-white bg-[#c4c4c4] cursor-not-allowed'>
										Complete Order
									</button>
								)}
							</div>
							<p className='text-[12px] text-[#6a6a6a] mt-[10px]'>
								Your order will show <strong>Confirming Payment</strong> until
								our team confirms the receipt.
							</p>
						</div>
					) : null}

					{error ? (
						<p className='text-[13px] text-red-500 mt-[10px]'>{error}</p>
					) : null}

					<Link
						href='/cart'
						className='inline-flex items-center gap-2 mt-[24px] font-semibold text-[var(--primary-color)]'>
						<MdArrowBack size={20} /> Back to cart
					</Link>
				</div>

				{/* order summary */}
				<div className='w-full md:w-[38%] border-t-2 md:border-t-0 md:border-l-2 p-[16px] md:p-[24px]'>
					<h3 className='font-semibold text-[var(--primary-color)] mb-[12px]'>
						Order summary
					</h3>
					{cartItem.map((item) => (
						<div
							key={item.id}
							className='flex items-start justify-between gap-[8px] text-[13px] py-[6px]'>
							<span>
								{item.title}{' '}
								<span className='text-[#9b9b9b]'>x{item.count}</span>
							</span>
							<span className='whitespace-nowrap'>
								{formatNaira(item.price * item.count)}
							</span>
						</div>
					))}
					<div className='border-t-2 mt-[10px] pt-[10px] text-[13px]'>
						<div className='flex justify-between py-[3px]'>
							<span>Items price</span>
							<span>{formatNaira(itemsTotal)}</span>
						</div>
						<div className='flex justify-between py-[3px]'>
							<span>VAT (7.5%)</span>
							<span>{formatNaira(vat)}</span>
						</div>
						<div className='flex justify-between py-[3px]'>
							<span>Delivery fee</span>
							<span>{formatNaira(shipping)}</span>
						</div>
						<div className='flex justify-between py-[8px] border-t-2 mt-[6px] font-semibold'>
							<span>Total</span>
							<span>{formatNaira(grandTotal)}</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Checkout;
