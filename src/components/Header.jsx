import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="Header"> 
            <h2>Lite Brite</h2><br/>
            <h5><Link to ='/about'>About Lite Brite</Link></h5>
        </div>
    )
}

export default Header