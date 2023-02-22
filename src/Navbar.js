import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (
        <div style={{backgroundColor:'black',color:'white',height:'30px'}}>
            <Link to="/" className='l1'>Home</Link>
            <Link to="About">About</Link>
        </div>
    );
}

export default Navbar;
