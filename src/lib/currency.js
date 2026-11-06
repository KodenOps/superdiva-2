// Naira formatting helpers - all store prices are stored in Naira.

export const formatNaira = (amount, decimals = 0) => {
	const value = Number(amount) || 0;
	return `\u20A6${value.toLocaleString('en-NG', {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	})}`;
};

export const VAT_RATE = 0.075; // 7.5% VAT, Nigeria
export const SHIPPING_FEE = 3500; // flat nationwide delivery fee in Naira

export const NIGERIAN_STATES = [
	'Abia',
	'Adamawa',
	'Akwa Ibom',
	'Anambra',
	'Bauchi',
	'Bayelsa',
	'Benue',
	'Borno',
	'Cross River',
	'Delta',
	'Ebonyi',
	'Edo',
	'Ekiti',
	'Enugu',
	'FCT - Abuja',
	'Gombe',
	'Imo',
	'Jigawa',
	'Kaduna',
	'Kano',
	'Katsina',
	'Kebbi',
	'Kogi',
	'Kwara',
	'Lagos',
	'Nasarawa',
	'Niger',
	'Ogun',
	'Ondo',
	'Osun',
	'Oyo',
	'Plateau',
	'Rivers',
	'Sokoto',
	'Taraba',
	'Yobe',
	'Zamfara',
];
