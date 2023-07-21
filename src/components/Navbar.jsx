
import React from 'react';
import './Navbar.css';

const Navbar = ({ loadUsers }) => {
  return (
    <div className='Header'>
      <div className="button-container">
        <button className="data-button" onClick={loadUsers}>Get Data</button>
      </div>
    </div>
  );
};

export default Navbar;
