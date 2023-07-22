import logo from './logo.png';
import React from 'react';
import './Navbar.css';

const Navbar = ({ loadUsers }) => {
  return (
    <div className='Header'>
       <img src={logo} alt="logo" />
      <div className="button-container">
        <button className="data-button" onClick={loadUsers}>Get Users</button>
      </div>
    </div>
  );
};

export default Navbar;
