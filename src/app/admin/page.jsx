'use client';
import React, { useEffect, useState } from 'react';
import {
	getOrders,
	updateOrderStatus,
	ORDER_STATUS,
} from '@/lib/orders';

const statusStyle = (status) => {
	if (status === ORDER_STATUS.CONFIRMED) return 'bg-green-100 text-green-700';
	if (status === ORDER_STATUS.DECLINED) return 'bg-red-100 text-red-600';
	return 'bg-amber-100 text-amber-700';
};

const Admin = () => {
	const [orders, setOrders] = useState([]);
	const [openReceipt, setOpenReceipt] = useState(null);

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

	const pending = orders.filter(
		(order) => order.status === ORDER_STATUS.CONFIRMING
	).length;

	return (
		<div className='min-h-screen bg-slate-100 p-[16px] md:p-[32px]'>
			<div className='max-w-[900px] mx-auto'>
				<div className='flex flex-wrap items-end justify-between gap-[8px]'>
					<div>
						<h1 className='text-2xl font-bold text-[var(--primary-color)]'>
							SuperDiva Admin
						</h1>
						<p className='text-[13px] text-[#6a6a6a]'>
							Confirm uploaded payment receipts to clear customer orders.
						</p>
					</div>
					<span className='text-[13px] font-semibold text-amber-700 bg-amber-100 px-[10px] py-[4px] rounded-full'>
						{pending} awaiting confirmation
					</span>
				</div>

				{orders.length === 0 ? (
					<p className='mt-[24px]'>No orders yet.</p>
				) : (
					orders.map((order) => (
						<div
							key={order.id}
							className='bg-white rounded-md border-2 p-[14px] mt-[14px]'>
							<div className='flex flex-wrap items-center justify-between gap-[8px]'>
								<div>
									<p className='font-semibold'>{order.id}</p>
									<p className='text-[12px] text-[#6a6a6a]'>
										{new Date(order.createdAt).toLocaleString()} •{' '}
										{order.customer?.name} • {order.customer?.phone}
									</p>
									<p className='text-[12px] text-[#6a6a6a]'>
										{order.customer?.address}, {order.customer?.city},{' '}
										{order.customer?.state}
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
									<span>Order total</span>
									<span>${Number(order.total).toFixed(2)}</span>
								</div>
							</div>

							<div className='mt-[10px] flex flex-wrap items-center gap-[10px]'>
								{order.receipt ? (
									order.receipt.dataUrl ? (
										<button
											onClick={() => setOpenReceipt(order.receipt.dataUrl)}
											className='text-[13px] font-semibold text-[var(--primary-color)] underline'>
											View receipt ({order.receipt.name})
										</button>
									) : (
										<span className='text-[13px] text-[#6a6a6a]'>
											Receipt file: {order.receipt.name}
										</span>
									)
								) : (
									<span className='text-[13px] text-red-500'>
										No receipt uploaded
									</span>
								)}
							</div>

							{order.status === ORDER_STATUS.CONFIRMING ? (
								<div className='flex gap-[10px] mt-[12px]'>
									<button
										onClick={() =>
											setOrders(
												updateOrderStatus(order.id, ORDER_STATUS.CONFIRMED)
											)
										}
										className='px-[14px] py-[8px] rounded-sm text-white bg-green-600 text-[13px]'>
										Confirm Payment
									</button>
									<button
										onClick={() =>
											setOrders(
												updateOrderStatus(order.id, ORDER_STATUS.DECLINED)
											)
										}
										className='px-[14px] py-[8px] rounded-sm text-white bg-red-500 text-[13px]'>
										Reject Receipt
									</button>
								</div>
							) : null}
						</div>
					))
				)}
			</div>

			{openReceipt ? (
				<div
					className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-[16px] z-[2000]'
					onClick={() => setOpenReceipt(null)}>
					{openReceipt.startsWith('data:application/pdf') ? (
						<iframe
							src={openReceipt}
							title='receipt'
							className='w-full max-w-[600px] h-[80vh] bg-white'
						/>
					) : (
						<img
							src={openReceipt}
							alt='payment receipt'
							className='max-h-[85vh] max-w-full object-contain bg-white'
						/>
					)}
				</div>
			) : null}
		</div>
	);
};

export default Admin;
