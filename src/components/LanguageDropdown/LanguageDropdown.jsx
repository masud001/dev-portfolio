import { useState } from 'react';
import { ReactComponent as ReactArrow } from './arrow.svg';
import './LanguageDropdown.css';
const LanguageDropdown = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleClick = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className='lang_navigation'>
			<button onClick={handleClick}>
				EN{' '}
				<span className={` ${showMenu && 'lang_navigation-arrow'} `}>{<ReactArrow />}</span>
			</button>
			{showMenu && (
				<ul>
					<li>BN</li>
					<li>RU</li>
				</ul>
			)}
		</div>
	);
};

export default LanguageDropdown;
