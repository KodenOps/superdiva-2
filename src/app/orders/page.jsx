'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cartContext } from '@/Context/CartContext';
import { getOrders, ORDER_STATUS } from '@/lib/orders';
import { MdArrowBack } from 'react-icons/md';

const statusStyle = (status) => {
	if (status === ORDER_STATUS.CONFIRMED) return 'bg-green-100 text-green-700';
	if (status === ORDER_STATUS.DECLINED) return 'bg-red-100 text-red-600';
	return 'bg-amber-100 text-amber-700';
};

const Orders = () => {
	const { cartItem, favItem } = useContext(cartContext);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const load = () => setOrders(getOrders());
		load();
		window.addEventListener('superdiva-orders-updated', load);
		window.addEventListener('storage', load);
		return () => {
			window.removeEventListener('superdiva-orders-updated', load);
			window.removeEventListener('storage', load);
		};
	}, []);

	return (
		<div className='bg-slate-200 min-h-screen flex flex-col'>
			<Navbar cartItem={cartItem} favItem={favItem} />
			<div className='flex-1 bg-white w-full max-w-[800px] mx-auto my-[20px] rounded-lg p-[16px] md:p-[24px]'>
				<h2 className='text-2xl font-bold text-[var(--primary-color)]'>
					My Orders
				</h2>
				{orders.length === 0 ? (
					<div className='text-center py-[40px]'>
						<p className='font-semibold'>You have no orders yet.</p>
						<Link
							href='/'
							className='inline-flex items-center gap-2 mt-[16px] font-semibold text-[var(--primary-color)]'>
							<MdArrowBack /> Start shopping
						</Link>
					</div>
				) : (
					orders.map((order) => (
						<div
							key={order.id}
							className='border-2 rounded-md p-[14px] mb-[14px]'>
							<div className='flex flex-wrap items-center justify-between gap-[8px]'>
								<div>
									<p className='font-semibold text-[15px]'>{order.id}</p>
									<p className='text-[12px] text-[#6a6a6a]'>
										{new Date(order.createdAt).toLocaleString()}
									</p>
								</div>
								<span
									className={`text-[12px] font-semibold px-[10px] py-[4px] rounded-full ${statusStyle(
										order.status
									)}`}>
									{order.status}
								</span>
							</div>
							<div className='mt-[10px] text-[13px]'>
								{order.items?.map((item) => (
									<div
										key={item.id}
										className='flex justify-between py-[2px]'>
										<span>
											{item.title}{' '}
											<span className='text-[#9b9b9b]'>x{item.count}</span>
										</span>
										<span>${(item.price * item.count).toFixed(2)}</span>
									</div>
								))}
								<div className='flex justify-between font-semibold border-t-2 mt-[8px] pt-[8px]'>
									<span>Total paid</span>
									<span>${Number(order.total).toFixed(2)}</span>
								</div>
							</div>
							<p className='text-[12px] text-[#6a6a6a] mt-[8px]'>
								{order.status === ORDER_STATUS.CONFIRMING
									? 'We have your receipt and are confirming your payment.'
									: order.status === ORDER_STATUS.CONFIRMED
									? 'Payment confirmed. Your order is being prepared for delivery.'
									: 'We could not confirm this payment. Please contact support.'}
							</p>
						</div>
					))
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Orders;
