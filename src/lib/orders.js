// Shared order storage helpers.
// Orders are kept in the browser so the storefront, the customer order page and
// the admin panel all read the same records.

const ORDERS_KEY = 'superdiva_orders';

export const ORDER_STATUS = {
	CONFIRMING: 'Confirming Payment',
	CONFIRMED: 'Payment Confirmed',
	DECLINED: 'Receipt Rejected',
};

export const getOrders = () => {
	if (typeof window === 'undefined') return [];
	try {
		return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
	} catch (error) {
		return [];
	}
};

const writeOrders = (orders) => {
	localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
	// let other open tabs (e.g. the admin panel) refresh
	window.dispatchEvent(new Event('superdiva-orders-updated'));
};

export const createOrderId = () => {
	const stamp = Date.now().toString(36).toUpperCase();
	const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
	return `SD-${stamp}-${rand}`;
};

export const saveOrder = (order) => {
	const orders = getOrders();
	writeOrders([order, ...orders]);
	return order;
};

export const updateOrderStatus = (id, status) => {
	const orders = getOrders().map((order) =>
		order.id === id ? { ...order, status, updatedAt: Date.now() } : order
	);
	writeOrders(orders);
	return orders;
};
