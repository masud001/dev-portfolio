import React from 'react'
import { NavLink } from 'react-router-dom'
import profileImage from './masud-profile-image.png'
import { ReactComponent as ProfileOverlayLogoIcon } from './Logo.svg';
import { ReactComponent as ProfileOverlayDotIcon } from './Dots.svg';
import './Hero.css'
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section className='hero_section'>
            <div className="hero_section-content">
                <h1>Masud is a <span>web designer</span> and <span>front-end developer</span></h1>
                <p>He crafts responsive websites where technologies meet creativity</p>
                <Button title="contact me!!" url="https://example.com" isIcon={false} icon="~~>" />
            </div>
            <div className="hero_section-image">
                <span className='hero_overlay-one'>{<ProfileOverlayLogoIcon />}</span>
                <span className='hero_overlay-two'>{<ProfileOverlayDotIcon />}</span>
                <img src={profileImage} alt="masudur rahman front-end developer profile" />
                <h6>Currently working on <span><NavLink to="/#">Portfolio</NavLink></span></h6>
            </div>
        </section>
    )
}

export default Hero