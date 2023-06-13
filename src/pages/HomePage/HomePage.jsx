import React from 'react';
import Hero from '../../components/Hero/Hero';
import Quote from '../../components/Quote/Quote';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Card from '../../components/Card/Card';
import Projects from '../../components/Projects/Projects';

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
