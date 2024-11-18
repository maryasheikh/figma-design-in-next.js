import React from "react";

const Hero = () => {
	return (
		<>
			 <div className='py-[140px] px-[20px] top-[92px] bg-[#043873] text-white flex items-center'>
				<div className='w-[656px] h-[361px]'>
					<div className='w-[656px] h-[238px]'>
						<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Get More Done with whitepace
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
							Project management software that enables your teams to
							collaborate, plan, analyze and manage everyday tasks
						</p>
            <button className="bg-[#4F9CF9;] w-[219px] h-[63px] rounded-lg p-5 mt-[60px]  hover:bg-blue-600 transition-transform duration-200 ease-in transform hover:scale-105">
            Try Whitepace free -&gt;
            </button>
					</div>
				</div>
				<div className='w-[824px] h-[549px] bg-[#C4DEFD] transition-transform duration-200 ease-in transform hover:scale-105'></div>
			</div>
		</>
	);
};

export default Hero;