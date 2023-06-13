import React from 'react'
import './sectionHeading.css'
import { NavLink } from 'react-router-dom'
const SectionHeading = ({ title, viewLink, url }) => {
	const viewMore = viewLink ? <NavLink to={viewLink ? url : null}>view all<span>~~></span> </NavLink> : null
	return (
		<section className='section_heading'>
			<div className="section__heading-content">
				<h1><span>#</span>{title}</h1>
				{/* if viewlink exist then show viewMore button with url  */}
				{viewMore}
			</div>
		</section>
	)
}

export default SectionHeading