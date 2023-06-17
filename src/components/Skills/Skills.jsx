import React from 'react'
import './skills.css';
import RenderColumns from './RenderColumns';
import SectionHeading from '../SectionHeading/SectionHeading';
import skillsSet from '../../data/skills'
const Skills = () => {
    // Example usage
    const skills = skillsSet;
    // console.log("🚀 ~ file: Skills.jsx:9 ~ Skills ~ skills:", skills);
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];



    return (
        <section className='skills__wrapper'>
            <SectionHeading title="skills" viewLink={false} url="https://example.com" />
            <div className="skills_snippet">
                <RenderColumns items={skills} />
                {/* <div className="skills__images"></div> */}
            </div>
        </section>
    )
}

export default Skills