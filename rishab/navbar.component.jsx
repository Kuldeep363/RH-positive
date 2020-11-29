import React from 'react';

import { } from '../../assets/logo.jpeg';

import { Link } from 'react-router-dom';

import {BsDroplet , BsPeople } from 'react-icons/bs';

import {BiHome} from 'react-icons/bi';

import {FiAward} from 'react-icons/fi';

import {IoCallOutline} from 'react-icons/io5';

import './navbar.styles.css';


const NavbarForMobile = () =>{
    return(
       <div className="navbar-for-mobile">
       <div className="options">
          <Link className="option">
             <div className="icon"><BiHome/></div>
             <p>Home</p>
          </Link> 
          <Link className="option">
             <div className="icon"><BsDroplet/></div>
             <p>Donate blood</p>
          </Link> 
          <Link className="option">
             <div className="icon"><FiAward/></div>
             <p>Host camp</p>
          </Link> 
          <Link className="option">
             <div className="icon"><BsPeople/></div>
             <p>About us</p>
          </Link> 
          <Link className="option">
             <div className="icon"><IoCallOutline/></div>
             <p>Contact</p>
          </Link> 
       </div>
       </div>
    );
}

export default NavbarForMobile;