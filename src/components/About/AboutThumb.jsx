import React from 'react'
import './about.css'
import aboutImage from "../../assets/image/about/about-thumb.png"
const AboutThumb = () => {
    return (
        <React.Fragment>
            <div className="about__contents_image">
                <img src={aboutImage} alt="about masudur Rahman" />
            </div>
        </React.Fragment>
    )
}

export default AboutThumb