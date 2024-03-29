import React from 'react'
import { PiPhoneCallThin, PiEnvelopeThin, PiMapPinThin, PiHouseLineThin, PiOfficeChairThin } from 'react-icons/pi';
const DynamicIcon = ({ dataType }) => {
    let icon = null;
    switch (dataType) {
        case 'phone':
            icon = <PiPhoneCallThin />;
            break;
        case 'email':
            icon = <PiEnvelopeThin />;
            break;
        case 'address':
            icon = <PiMapPinThin />;
            break;
        case 'home':
            icon = <PiHouseLineThin />;
            break;
        case 'office':
            icon = <PiOfficeChairThin />;
            break;
        // Add more cases as needed

        default:
            // You can have a default icon for unknown data types
            icon = <PiMapPinThin />;
            break;
    }
    return (
        <span className='icon'>{icon}</span>
    )
}

export default DynamicIcon