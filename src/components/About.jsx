import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
    return (
        <div className="About">
            <h2>About Lite Brite</h2>
            <p>Created back in 1967, Lite Brite is a toy that colors us little plastic pegs that fit into a pannel.</p>
            <br/>
            <Link className="Link" to="/">Back to Lite Brite Board</Link>
        </div>
    )
}

export default About;