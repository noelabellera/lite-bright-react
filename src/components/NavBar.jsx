import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="Navbar">
            <h2><Link to='/'>Home  </Link> |
            <Link to='/about'> About</Link></h2>
        </div>
    )
}

export default NavBar;

