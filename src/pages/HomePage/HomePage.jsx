import React from 'react';
import Hero from '../../components/Hero/Hero';
import Quote from '../../components/Quote/Quote';

const HomePage = () => {
	return (
		<>
			{/* hero section for home page START
			==================================== */}
			<Hero />
			{/* hero section for home page END
			==================================== */}

			{/* Quote section START 
			======================= */}
			<Quote />
			{/* Quote section END 
			======================= */}

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
