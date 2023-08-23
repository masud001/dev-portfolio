import React from 'react';
import Hero from '../../components/Hero/Hero';
import Quote from '../../components/Quote/Quote';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

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

			{/* about section START */}
			<About />
			{/* about section END */}

			{/* contact section START  */}
			<Contact />
			{/* contact section END */}

		</>
	);
};

export default HomePage;
