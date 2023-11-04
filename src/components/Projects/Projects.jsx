import React from 'react'
import './projects.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Card/Card'
import projectsData from '../../data/projects'

const Projects = () => {
    const data = projectsData.slice(0, 3);
    return (
        <section className='project__wrapper'>
            <SectionHeading title="projects" viewLink={true} url="https://example.com" />
            <div className="project_cards">
                {data && data.map((data, index) => <Card key={index}
                    thumUrl={data.thumUrl}
                    thumAlt={data.thumAlt}
                    tagLists={data.tagLists}
                    title={data.title}
                    description={data.description}
                    links={data.links}
                />)}
            </div>
        </section>
    )
}

export default Projects