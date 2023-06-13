import React from 'react'
import './sectionHeading.css'
import { NavLink } from 'react-router-dom'
const SectionHeading = () => {
	return (
		<section className='section_heading'>
			<div className="section__heading-content">
				<h1><span>#</span>projects</h1>
				<NavLink to="/#">view all  <span>~~></span> </NavLink>
			</div>
		</section>
	)
}

export default SectionHeading