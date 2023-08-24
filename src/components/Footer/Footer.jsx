import React from 'react';
import { ReactComponent as FooterLogoIcon } from '../../assets/image/skillsimg/logo-footer.svg';
import { ReactComponent as SocialDiscordLogoIcon } from '../../assets/image/skillsimg/Discord.svg';
import { ReactComponent as SocialLinkedinLogoIcon } from '../../assets/image/skillsimg/Linkedin.svg';
import { ReactComponent as SocialGithubLogoIcon } from '../../assets/image/skillsimg/Github.svg';
import { ReactComponent as SocialDribbleLogoIcon } from '../../assets/image/skillsimg/Dribble.svg';

import './footer.css'


const Footer = () => {
	return (
		<footer className='footer__section'>
			<div className="footer__wrapper">
				<div className="footer">
					{/* left  */}
					<div className="footer_left">
						<div className="footer_logo">
							<span>
								{<FooterLogoIcon />}
							</span>
							<h6>Masud</h6>
							<p>masud@masud.me</p>
						</div>
						<div className="footer__content">
							<p>Web designer and front-end developer based in Bangladesh</p>
						</div>
					</div>
					{/* right  */}
					<div className="footer_right">
						<h6>media</h6>
						<div className="footer__social_icons">
							<a href="/#"> <span className='social_icon'>{<SocialDiscordLogoIcon />}</span></a>
							<a href="/#"> <span className='social_icon'>{<SocialLinkedinLogoIcon />}</span></a>
							<a href="/#"> <span className='social_icon'>{<SocialGithubLogoIcon />}</span></a>
							<a href="/#"> <span className='social_icon'>{<SocialDribbleLogoIcon />}</span></a>
						</div>
					</div>
				</div>
				<div className="footer_copyright">
					<p> &copy; Copyright 2023. Made by Masud</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
