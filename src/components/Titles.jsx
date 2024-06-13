import React from "react";
const Titles = ({ title, subtext }) => {
	return (
		<div className="w-full text-center">
			<h3 className=" md:text-3xl text-xl font-bold text-[var(--primary-color)]">
				{title}
			</h3>
			<p className="md:text-xl mt-[14px] text-[var(--black)] md:w-[60%] w-[90%] md:mx-[20%] mx-[5%]">
				{subtext}
			</p>
		</div>
	);
};

export default Titles;
