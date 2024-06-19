
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import './Navbar.css';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    setShowNavbar(location.pathname !== '/');
  }, [location]);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <nav className={showNavbar ? 'navbar' : 'navbar hidden'}>
      <h1 className="bank-name">
        Sparks<span className="bank">Bank</span>
      </h1>
      <div className="menu-icon" onClick={toggleMenu}>
        {menu ? <ImCross /> : <FaBars />}
      </div>
      <ul className={menu ? 'nav-links nav-links-menu' : 'nav-links'}>
        <li onClick={handleLinkClick}><Link to='/' className="icons">Home</Link></li>
        <li onClick={handleLinkClick}><Link to="/AllCustomers" className="icons">All Customers</Link></li>
        <li onClick={handleLinkClick}><Link to="/SendMoney/1" className="icons">Send Money</Link></li> 
        <li onClick={handleLinkClick}><Link to="/Transactions" className="icons">Transactions</Link></li>
        <li onClick={handleLinkClick}><Link to="/ContactUs" className="icons">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
