import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <section className='hero_section'>
            <div className="hero_section-content">
                <h1>Masud is a <span>web designer</span> and <span>front-end developer</span></h1>
                <p>He crafts responsive websites where technologies meet creativity</p>
                <a href='/#' className=''>contact me!!</a>
            </div>
            <div className="hero_section-image">
                <img src="https://via.placeholder.com/450" alt="masud profile" />
            </div>
        </section>
    )
}

export default Hero