import React from 'react'
import './contact.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import ContactData from "../../data/contacts"
import RenderContacts from './RenderContacts'
const Contact = () => {
    const contacts = ContactData;
    return (
        <React.Fragment>
            <div className="contact__wrapper">
                <SectionHeading title="Contact" viewLink={false} url="https://example.com" />
                <div className="contact__contents">
                    <div className="contact__contents_text">
                        <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.</p>
                    </div>
                    <div className="contact__address">
                        <RenderContacts items={contacts} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact