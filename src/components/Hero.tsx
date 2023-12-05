const Hero = () => {
	return (
		<div className='hero flex flex-col w-full h-full items-center relative'>
			<div className='flex w-full justify-center'>
				<div className='flex flex-col'>
					<div className='flex gap-7 items-center mt-32'>
						<img src='/assets/images/home/logo.svg' alt='' className='w-[108px] h-auto'/>
						<div className='bg-gradient-to-r from-gradient-1 to-gradient-2 bg-clip-text text-9xl text-transparent'>
							<p className='text-8xl font-extrabold'>PION</p><p className='text-5xl text-center font-semibold'>Network</p></div>
					</div>
					<p className='text-white text-5xl text-center'> vs </p>
					<p className='text-white font-bold text-[68px] text-center'> Blockchain </p>
				</div>
				<div>
					<img src='/assets/images/home/hero-illustration.svg' alt=''/>
				</div>
			</div>

			<div
				className='animated-link flex flex-col gap-4 absolute border-4 bottom-4 border-dashed rounded-full border-primary-l1 p-12 pt-6'>
				<p className='font-extrabold text-8xl mx-auto text-white'>{1}</p>
				<h3
					className='font-medium text-[28px] max-w-[138px] leading-[28px] text-white text-center'>{'Cost Efficiency'}</h3>
			</div>
		</div>
	)
}

export default Hero;