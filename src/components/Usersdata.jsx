import React from 'react';
import './Userdata.css';

const Usersdata = ({ users }) => {
  return (
    <div className="user-card-grid">
      <h1>USERS INFO</h1>
      <div className="card-container">
        {users.map(({ id, first_name, last_name, email, avatar }) => (
          <div key={id} className="user-card">
            <div className="avatar-container">
              <img src={avatar} alt={`Avatar of ${first_name}`} />
            </div>
            <div className="user-details">
              <h3>{`${first_name} ${last_name}`}</h3>
              <p>Email: {email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usersdata;
