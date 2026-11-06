import React from 'react';
import {
	AiOutlineSafetyCertificate,
	AiOutlineCheckCircle,
	AiOutlineTruck,
	AiOutlineWallet,
} from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';

const badges = [
	{
		Icon: AiOutlineSafetyCertificate,
		title: '100% Original',
		sub: 'No fakes, no copies — confirmed authentic',
	},
	{
		Icon: FaAward,
		title: 'Tested & Trusted',
		sub: 'Every piece checked before it ships',
	},
	{
		Icon: AiOutlineWallet,
		title: 'Pay On Delivery',
		sub: 'Inspect am before you pay, no wahala',
	},
	{
		Icon: AiOutlineTruck,
		title: 'Nationwide Delivery',
		sub: 'Lagos to Abuja, Port Harcourt and beyond',
	},
	{
		Icon: AiOutlineCheckCircle,
		title: 'Verified Reviews',
		sub: 'Naija shoppers, real orders, real ratings',
	},
];

const TrustBadges = () => {
	return (
		<section className='w-full bg-[var(--white)] py-[24px] md:px-[50px] px-[16px]'>
			<div className='flex flex-wrap items-center justify-center gap-[16px]'>
				{badges.map(({ Icon, title, sub }) => (
					<div
						key={title}
						className='flex items-start gap-3 border-2 border-slate-200 rounded-md px-[14px] py-[10px] max-w-[240px]'>
						<Icon size={26} className='text-[var(--secondary-color)]' />
						<div>
							<p className='font-semibold md:text-[15px] text-[13px] text-[var(--primary-color)]'>
								{title}
							</p>
							<p className='text-[11px] text-[gray] leading-4'>{sub}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TrustBadges;
