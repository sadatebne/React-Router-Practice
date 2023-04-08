import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
          <Link to="/">Home</Link>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/contact">Contact</ActiveLink>      
          <ActiveLink to="/friends">Friends</ActiveLink> 
          <ActiveLink to="/posts">Posts</ActiveLink>       
        </nav>
    );
};

export default Header;