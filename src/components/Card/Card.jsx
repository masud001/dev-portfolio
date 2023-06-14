import React from 'react'
import './card.css'
import Button from '../Button/Button'

const Card = (
    {
        thumUrl = "https://placehold.co/600x400/000000/FFF",
        thumAlt = "lorem text",
        tagLists = [1, 2, 3, 4, 5, 6,],
        title = "Example title",
        description = "Description text",
        links = []
    }
) => {

    const btn = links.map((btn, index) => <Button key={index} title={btn.title} isIcon={btn.isIcon} url={btn.btnLink} icon="~~>" />)
    const tags = tagLists.map((tag, index) => <span key={index}>{tag}</span>)

    return (
        <div className='card__wrapper'>
            <div className="card_thum">
                <img src={thumUrl} alt={thumAlt} />
            </div>
            <div className="card_tech_list">
                {tags && tags}
            </div>
            <div className="card_contents">
                <h1 className='card_title'>{title}</h1>
                <p className='card_description'>{description}</p>
                <div className="card__buttons">
                    {btn && btn}
                </div>
            </div>
        </div>
    )
}

export default Card