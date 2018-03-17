import React from 'react';
import ColorSelectorColumn from './ColorSelectorColumn'



const ColorSelectorBoard = (props) => {
    return (
        <div className="ColorSelector">
            <ColorSelectorColumn />
            <ColorSelectorColumn />
            <ColorSelectorColumn />
            <ColorSelectorColumn />
            <ColorSelectorColumn />
            <ColorSelectorColumn />
            <ColorSelectorColumn />
        </div>
    )
}

export default ColorSelectorBoard;