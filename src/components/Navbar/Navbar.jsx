import React, { useState } from 'react';
import './Navbar.scss'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    const [show,setShow] = useState(false);
    return (
       <>
       <header>
        <nav className='container nav'>
                <img src={logo} alt="" />
            <ul className={`ul_list ${show ? "menu_list" : <></>}`}>
        
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>          
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="active">About</NavLink>          
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="active">Service</NavLink>          
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="active">Portfolio</NavLink>          
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="active">Blog</NavLink>          
                </li>
                <li>
                <div className="btn">
                <button>Contact</button>
            </div>
                </li>
            </ul>
            <div className="btn1">
                <button>Contact</button>
            </div>
            <BiMenuAltRight onClick={() =>setShow(!show)}  className='menu' />

            
        </nav>
       </header>
       </>
    );
}

export default Navbar;
