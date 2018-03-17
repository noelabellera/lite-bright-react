import React from 'react';
import ColorSelectorCircle from './ColorSelectorCiricle'


const ColorSelectorBoard = (props) => {
    return (
        <div className="ColorSelector">
            <ColorSelectorCircle color={props.color}/>
        </div>
    )
}

export default ColorSelectorBoard;