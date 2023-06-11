import React from 'react';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
	return (
		<>
			{/* hero section for home page START
			==================================== */}
			<Hero />
			{/* hero section for home page END
			==================================== */}
			<section>
				<h1>quote section</h1>
			</section>
			<section>
				<h1>project section</h1>
			</section>
			<section>
				<h1>skill section</h1>
			</section>
			<section>
				<h1>about me section</h1>
			</section>
			<section>
				<h1>contact section</h1>
			</section>
		</>
	);
};

export default HomePage;
