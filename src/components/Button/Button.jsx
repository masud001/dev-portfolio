import React from 'react'
import './button.css'
import { NavLink } from 'react-router-dom'
const Button = ({ title, url = "/#", isIcon, icon }) => {

    const btnIcon = isIcon ? <span className='button_icon'>{icon}</span> : null

    return (
        <React.Fragment>
            <NavLink to={url} className="theme_button">
                {title}

                {btnIcon}
            </NavLink>
        </React.Fragment>
    )
}

export default Button