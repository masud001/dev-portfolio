import React from 'react'
import './skills.css';
import RenderColumns from './RenderColumns';
import SectionHeading from '../SectionHeading/SectionHeading';
import skillsSet from '../../data/skills'
import { ReactComponent as IconImage } from '../../assets/image/skillsimg/skils-img.svg';
const Skills = () => {
    // Example usage
    const skills = skillsSet;

    return (
        <section className='skills__wrapper'>
            <SectionHeading title="skills" viewLink={false} url="https://example.com" />
            <div className="skills_snippet">
                <div className="items_column">
                    <IconImage />
                </div>
                <div className="items_column skills_items">
                    <RenderColumns items={skills} />
                </div>
            </div>
        </section>
    )
}

export default Skills