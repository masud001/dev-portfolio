import React from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import Logo from '../logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
	return (
		<header className='header'>
			{/* logo section  */}
			<Logo />
			{/* navbar section */}
			<Navigation />
			<LanguageDropdown />
		</header>
	);
};

export default Header;
