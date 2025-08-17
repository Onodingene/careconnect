import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="logo" onClick={() => navigate('/')}>
                Care Connect 
            </div> 
            <ul className="nav-links text-teal-900">
                <li><Link to="#about">About</Link></li>
                <li><Link to="#donate">Donate</Link></li>
                <li><Link to="#contact">Contact</Link></li>
                
            </ul>
            <div>
                <button className="buttons text-teal-700" onClick={() => navigate('/signup')}>Get Started</button>
            </div>
            
        </div>
    );
};

export default Navbar;
