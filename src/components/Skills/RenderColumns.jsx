import React from 'react'
import SingleSkill from './SingleSkill';

const RenderColumns = ({ items }) => {
    let columnSize = 1;
    let currentColumn = 1;
    let columns = [];

    for (let i = 0; i < items.length; i++) {
        if (!columns[currentColumn - 1]) {
            columns[currentColumn - 1] = [];
        }

        let title = items[i].title
        let stake = items[i].stack.map((item) => item)

        columns[currentColumn - 1].push(<SingleSkill title={title} data={stake} key={i} />);

        if (currentColumn === columnSize) {
            columnSize++;
            currentColumn = 1;
        } else {
            currentColumn++;
        }
    }

    return columns.map((column, index) => (
        <div key={index} className="skills__column">
            {column}
        </div>
    ));


}

export default RenderColumns