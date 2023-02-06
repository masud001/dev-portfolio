import React, { useEffect, useRef, useState } from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import Logo from '../logo/Logo';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as MobileBurgerIcon } from './MobileBurgerIcon.svg';
import { ReactComponent as MobileCloseIcon } from './MobileCloseIcon.svg';
import './Header.css';

const Header = () => {
	const ref = useRef(0);
	console.log('🚀 ~ file: Header.jsx:11 ~ Header ~ ref', ref);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 786) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<header className='header'>
			{/* logo section  */}
			<Logo />
			{/* navbar section */}
			{isVisible && (
				<div className='navigation_menu'>
					<Navigation />
					<LanguageDropdown />
				</div>
			)}
			<div className='header_mobile_icon' onClick={() => setIsVisible(!isVisible)}>
				{isVisible ? <MobileCloseIcon /> : <MobileBurgerIcon />}
			</div>
		</header>
	);
};

export default Header;
