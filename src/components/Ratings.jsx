import React from 'react';

const Star = ({ filled, index }) => (
	<path
		d='M10 1.5L12.09 6.41L17.27 7.23L13.64 10.97L14.55 16.15L10 13.27L5.45 16.15L6.36 10.97L2.73 7.23L7.91 6.41L10 1.5Z'
		fill={filled ? 'gold' : 'lightgray'}
		transform={`translate(${index * 20}, 0) scale(1.2)`}
	/>
);

const Rating = ({ value, counts }) => {
	const stars = Array.from({ length: 5 }, (_, i) => (
		<Star
			key={i}
			filled={i < value}
			index={i}
		/>
	));

	return (
		<div className='flex'>
			<svg
				baseProfile='full'
				height='20px'
				version='1.1'
				width='110px'
				xmlns='http://www.w3.org/2000/svg'>
				<defs />
				{stars}
			</svg>
			<span className='text-sm font-semibold text-slate-400'>
				({counts} Buyers)
			</span>
		</div>
	);
};

export default Rating;
