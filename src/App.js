import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Usersdata from './components/Usersdata';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [showUserData, setShowUserData] = useState(false); 

  const loadUsers = async () => {
    try {
      setLoading(true); 
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonresponse = await response.json();
      setUsers(jsonresponse.data);
      setShowUserData(true); 
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); 
    }
  };

  return (
    <div className="App">
      <Navbar loadUsers={loadUsers} />
      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p className="loading-message">Loading...</p>
        </div>
      ) : showUserData ? (
        <Usersdata users={users} />
      ) : null}
    </div>
  );
};

export default App;

