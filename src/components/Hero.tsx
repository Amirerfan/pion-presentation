const Hero = () => {
	return (
		<div className='hero flex flex-col w-full h-full items-center relative'>
			<div className='flex w-full justify-center'>
				<div className='flex flex-col'>
					<div className='flex gap-7 items-center mt-32'>
						<img src='/assets/images/home/logo.svg' alt='' className='w-[108px] h-auto'/>
						<div className='bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text text-9xl text-transparent'>
							<p className='text-8xl font-extrabold'>PION</p><p
							className='text-5xl text-center font-semibold'>NETWORK</p></div>
					</div>
					<p className='text-white text-5xl text-center'> vs </p>
					<p className='text-white font-bold text-[68px] text-center leading-[68px]'> Blockchain </p>
				</div>
				<div>
					<img src='/assets/images/home/hero-illustration.svg' alt=''/>
				</div>
			</div>

			<span className='animate-link absolute bottom-4 group' onClick={() => document.getElementById('cost-efficiency')?.scrollIntoView({behavior: "smooth",block: "start", inline: "start"})}>
				<div
					className='cursor-pointer flex flex-col gap-4 relative w-60 h-60 group-hover:w-[309px] group-hover:h-[309px] transition-all items-center justify-center '>
					<p
						className='font-extrabold text-8xl mx-auto text-white group-hover:text-primary-l1 transition-all -mt-10 group-hover:text-[108px]'>{1}</p>
					<h3
						className='font-medium text-[28px] leading-[28px] text-white text-center transition-all group-hover:text-[46px] group-hover:leading-[46px] group-hover:text-primary-l1'>Cost <br/>Efficiency</h3>
					</div>
				<span
					className='animated-border absolute top-0 w-full h-full border-4 border-dashed rounded-full border-primary-l1 pointer-events-none transition-all group-hover:rotate-[60deg]'></span>
			</span>
		</div>
	)
}

export default Hero;