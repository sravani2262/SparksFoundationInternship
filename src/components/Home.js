import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="menu-toggle">
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <div className="content-container">
        <h1 className="head">The <span className="color">Sparks</span> Bank</h1>
        <p>Welcome to the bank</p>
        <div>
          <Link to="/AllCustomers">
            <button className="button">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="cta-container">
        <p className="cta-text">Experience the future of banking with us. Secure, reliable, and innovative.</p>
      </div>
    </div>
  );
}

export default Home;
