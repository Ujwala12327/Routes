import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'


const  changestyle= ({isActive}) => {
    return {
       backgroundColor:isActive?'greenyellow' : 'red'
    }
}



const Navlink = () => {
    return (
        <div  style={{backgroundColor:'black',color:'white',height:'30px'}}>
            <NavLink to="/" style={changestyle} className='l1'>Home</NavLink>
            <NavLink to="About" style={changestyle} className='l1'>About</NavLink>
            
        </div>
    );
}

export default Navlink;
