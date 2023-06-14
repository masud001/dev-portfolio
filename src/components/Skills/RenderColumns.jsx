import React from 'react'

const RenderColumns = ({ items }) => {
    let columnSize = 1;
    let currentColumn = 1;
    let columns = [];

    for (let i = 0; i < items.length; i++) {
        if (!columns[currentColumn - 1]) {
            columns[currentColumn - 1] = [];
        }

        columns[currentColumn - 1].push(
            <li key={i} className="list-item">{items[i]}</li>
        );

        if (currentColumn === columnSize) {
            columnSize++;
            currentColumn = 1;
        } else {
            currentColumn++;
        }
    }

    return columns.map((column, index) => (
        <ul key={index} className="column">
            {column}
        </ul>
    ));


}

export default RenderColumns