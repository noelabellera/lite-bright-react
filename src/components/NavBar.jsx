import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="Navbar">
            <h2><Link className="Links" to='/'>Home  </Link> |
            <Link className="Links" to='/about'> About</Link></h2>
        </div>
    )
}

export default NavBar;

