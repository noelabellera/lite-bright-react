import React from 'react';
import ColorSelectorCircle from './ColorSelectorCiricle'

const ColorSelectorColumn = (props) => {
    return(
        <div>
            <ColorSelectorCircle handleColorSelect={props.handleColorSelect} />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
            <ColorSelectorCircle />
        </div>
    )
};

export default ColorSelectorColumn;