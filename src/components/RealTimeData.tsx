const RealTimeData = () => {
	return (
		<div className='hero flex flex-col w-full h-full items-center relative'>

			<span className='animate-link absolute bottom-0 translate-y-1/2 hover:translate-y-10 transition-all group'>
				<div
					className='cursor-pointer flex flex-col gap-4 relative w-60 h-60 group-hover:w-[309px] group-hover:h-[309px] transition-all items-center justify-center '>
					<img src='/assets/images/home/more-about-pion-logo.svg' className='w-11 group-hover:w-14 transition-all' alt=''/>
					<h3
						className='font-medium text-[28px] leading-[28px] text-white text-center transition-all group-hover:text-[46px] group-hover:leading-[46px] group-hover:text-primary-l1'>More About<br/>PION</h3>
					</div>
				<span
					className='animated-border absolute top-0 w-full h-full border-4 border-dashed rounded-full border-primary-l1 pointer-events-none transition-all group-hover:rotate-[60deg]'></span>
			</span>
		</div>
	)
}

export default RealTimeData;