import React from 'react'
import renderColumns from '../../utilities/renderColumns';
import RenderColumns from './RenderColumns';

const Skills = () => {
    // Example usage
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];



    return (
        <div>Skills
            {/* {renderColumns(items)} */}
            {/* {renderColumns} */}
            <RenderColumns items={items} />
        </div>
    )
}

export default Skills