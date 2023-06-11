import React, { useEffect, useState } from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import Logo from '../logo/Logo';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as MobileBurgerIcon } from './MobileBurgerIcon.svg';
import { ReactComponent as MobileCloseIcon } from './MobileCloseIcon.svg';
import './Header.css';

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
			console.log(window.innerWidth)
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
