import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from './logo.svg';
import './Logo.css';
const Logo = () => {
	return (
		<section className='header_logo'>
			<Link to='/'>
				<ReactLogo />
				<span>masud</span>
			</Link>
		</section>
	);
};

export default Logo;
