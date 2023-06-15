import React from 'react'

const RenderColumns = ({ items }) => {
    console.log("🚀 ~ file: RenderColumns.jsx:4 ~ RenderColumns ~ items:", items);
    let columnSize = 1;
    let currentColumn = 1;
    let columns = [];

    for (let i = 0; i < items.length; i++) {
        if (!columns[currentColumn - 1]) {
            columns[currentColumn - 1] = [];
        }

        columns[currentColumn - 1].push(
            <li key={i} className={`skills__list-item`}>
                <div className="skill__title">
                    <h6>{items[i].title}</h6>
                </div>
                <div className="skills__lists">
                    {items[i].stack.map((item, index) => <span key={index}>{item}</span>)}
                </div>
            </li>
        );

        if (currentColumn === columnSize) {
            columnSize++;
            currentColumn = 1;
        } else {
            currentColumn++;
        }
    }

    return columns.map((column, index) => (
        <ul key={index} className="skills__column">
            {column}
        </ul>
    ));


}

export default RenderColumns