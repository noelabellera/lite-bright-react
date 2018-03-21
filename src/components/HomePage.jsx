import React from 'react';
import ColorSelectorBoard from './ColorSelectorBoard';
import CirclesBoard from './CirclesBoard';


const HomePage = (props) => {
    return (
        <div>
            <div className="Page">
                <CirclesBoard />
                <ColorSelectorBoard colors={props.colors}
                                    handleColorSelect={props.handleColorSelect} />
            </div>
        </div>
    )
}

export default HomePage;
