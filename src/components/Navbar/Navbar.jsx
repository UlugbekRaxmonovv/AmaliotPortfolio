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
                 <a href="">Home</a>    
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                        <a href="#services">Service</a>
    
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                <div className="btn">
                <button>Contact</button>
            </div>
                </li>
            </ul>
            <div className="btn1">
               <a href="#footer">
               <button>Contact</button>
               </a>
            </div>
            <BiMenuAltRight onClick={() =>setShow(!show)}  className='menu' />

            
        </nav>
       </header>
       </>
    );
}

export default Navbar;
