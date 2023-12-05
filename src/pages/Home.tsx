import Hero from "../components/Hero";
import CostEfficiency from "../components/cost-efficiency";

const Home = () => {
	return (
		<div className='page w-full'>

			<section className='page__section hero-section'>
				<Hero />
			</section>

			<section className='page__section cost-efficiency-section'>
				<CostEfficiency />
			</section>

			<section className='page__section real-time-data-section'>

			</section>

			<section className='page__section more-about-pion-section'>

			</section>
		</div>
	)
}

export default Home;