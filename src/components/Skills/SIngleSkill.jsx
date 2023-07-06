import React from 'react'
import './sskill.css'


const SingleSkill = ({ title = "Title", data }) => {
    console.log('data : ', data)
    return (
        <div className={`skills__list-item`}>
            <div className="skill__title">
                <h6>{title}</h6>
            </div>
            <div className="skills__lists">
                {data && data.map((item, index) => <span key={index}>{item}</span>)}

            </div>
        </div>
    )
}

export default SingleSkill