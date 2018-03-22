import React from 'react';



const ColorSelectorBoard = (props) => {
    return (
        <div className="ColorSelector">
            {props.colors.map((color, idx) => 
                <div
                    onClick={() => props.handleColorSelect(idx)}
                    className="ColorPicker-color"
                    style={{
                        backgroundColor: props.selColorIdx === idx ? 'white' : color,
                        border: props.selColorIdx === idx ? `14px solid ${color}` : false
                    }}
                    key={color}
                />
            )}
        </div>
    );
}

export default ColorSelectorBoard;