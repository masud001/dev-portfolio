import React from 'react'
import './about.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import AboutText from './AboutText'
import AboutThumb from './AboutThumb'

const About = () => {
    return (
        <section className='about__wrapper'>
            <SectionHeading title="About" viewLink={false} url="https://example.com" />
            <div className="about__contents">
                {/* about text  */}
                <AboutText />
                {/* about image thumb  */}
                <AboutThumb />
            </div>
        </section>
    )
}

export default About