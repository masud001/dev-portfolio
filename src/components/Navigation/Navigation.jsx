import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ isVisible, setIsVisible }) => {
	const navigationItems = [
		{ item: 'home', link: '/' },
		{ item: 'works', link: 'works' },
		{ item: 'about-me', link: 'about' },
		{ item: 'contacts', link: 'contact' },
	];
	const item = navigationItems.map((item, index) => {
		return (
			<li key={index} className='navigation_item'>
				<NavLink to={item.link} className='navigation_link' onClick={() => setIsVisible(!isVisible)}>
					<span>#</span>
					{item.item}
				</NavLink>
			</li>
		);
	});
	return (
		<nav className='header_navigation'>
			<ul>{item}</ul>
		</nav>
	);
};

export default Navigation;
