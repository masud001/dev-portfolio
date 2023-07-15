import React from 'react'
import './skills.css';
import RenderColumns from './RenderColumns';
import SectionHeading from '../SectionHeading/SectionHeading';
import skillsSet from '../../data/skills'
import { ReactComponent as IconImage } from '../../assets/image/skillsimg/logo.svg';
import { ReactComponent as Frame } from '../../assets/image/skillsimg/frame.svg';
import { ReactComponent as RectengleOne } from '../../assets/image/skillsimg/rectangle.svg';
const Skills = () => {
    // Example usage
    const skills = skillsSet;

    return (
        <section className='skills__wrapper'>
            <SectionHeading title="skills" viewLink={false} url="https://example.com" />
            <div className="skills_snippet">


                <div className="skills__images">
                    <span>
                        <Frame />
                    </span>
                    <span>
                        <IconImage />
                    </span>
                    <span>
                        <RectengleOne />
                    </span>
                    <span>
                        <Frame />
                    </span>
                    <span>
                        <RectengleOne />
                    </span>
                </div>

                <div className="skills__area">
                    <RenderColumns items={skills} />
                </div>

            </div>
        </section>
    )
}

export default Skills