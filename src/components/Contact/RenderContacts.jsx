import React from 'react'
import DynamicIcon from './DynamicIcon';

const RenderContacts = ({ items }) => {
    console.log("🚀 ~ file: RenderContacts.jsx:4 ~ RenderContacts ~ items:", items);
    let columnSize = 1;
    let currentColumn = 1;
    let columns = [];
    for (let i = 0; i < items.length; i++) {
        if (!columns[currentColumn - 1]) {
            columns[currentColumn - 1] = [];
        }

        let title = items[i].title;
        let addresses = items[i].address.map(item => <div className='contact_lists_items' key={i}  >
            <p> <DynamicIcon dataType="email" />  <span className='contact__item'>{item.email}</span> </p>
            <p> <DynamicIcon dataType="phone" /> <span className='contact__item'>{item.phone}</span> </p>
            <p> <DynamicIcon dataType="home" /> <span className='contact__item'>{item.home}</span> </p>
            <p> <DynamicIcon dataType="office" /> <span className='contact__item'>{item.office}</span> </p>
        </div>);

        columns[currentColumn - 1].push(
            <div className='single__contact' key={i}>
                <div className="contact__title">
                    <h6>{title}</h6>
                </div>
                <div className="contact_lists">
                    {addresses}
                </div>
            </div>
        );

        if (currentColumn === columnSize) {
            columnSize++;
            currentColumn = 1;
        } else {
            currentColumn++;
        }
    }
    return columns.map((column, index) => (
        <div key={index} className="contact__column">
            {column}
        </div>
    ));
}

export default RenderContacts