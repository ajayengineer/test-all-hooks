import React, {} from 'react';
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/searchimages">Search Images</Link>
                <Link to="/contactus">Contact Us</Link>
        </>
    )
}

export default Menu;