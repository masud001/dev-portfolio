import React from 'react';
import Hero from '../../components/Hero/Hero';
import Quote from '../../components/Quote/Quote';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';

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
			{/* projects section START 
			=========================*/}
			<Projects />
			{/* projects section END
			=========================*/}
			{/* skills section START 
			======================== */}
			<Skills />
			{/* skills section END 
			======================== */}
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
