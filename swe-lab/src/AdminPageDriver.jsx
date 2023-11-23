import React, { useState, useEffect } from 'react'
import Overlay from './components/Overlay.jsx'
import Header from './components/Header.jsx'
import data from './data.js';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';


function AdminPageDriver({setCookieValue, cookieValue }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  console.log(cookieValue);
  const isTokenValid = (token) => {
    try {
      // Decode token and get payload
      const decoded = jwtDecode(token);
  
      // Get current time (converted to seconds)
      const currentTime = Date.now() / 1000;
  
      // Check if token is expired
      if (decoded.exp < currentTime) {
        console.log("Token is expired.");
        return false;
      }
  
      // Here you can add other checks such as issuer, audience, etc., if necessary
      // if (decoded.iss !== 'expectedIssuer') {
      //   console.log("Invalid issuer.");
      //   return false;
      // }
  
      // If everything checks out, the token is valid
      console.log("Token is valid.");
      return true;
    } catch (error) {
      console.error("Error decoding token:", error);
      return false;
    }
  };
  
  // Example usage
  const token = cookieValue;
  console.log(isTokenValid(token));
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Assuming the token is stored in local storage or state after login
        const token = cookieValue || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiYXVkIjpbImZhc3RhcGktdXNlcnM6YXV0aCJdLCJleHAiOjE3MDA3NjU3MTV9.kxFCzfkwC9WZ1flivat1QOqMD7EoF35IB372qZCR4xY'; // Replace with actual token retrieval logic
        console.log(token);
        const response = await fetch('http://80.240.17.228:9999/api/users/get_all_users', {
          method: 'GET',
          //credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Cookie': `fastapiuserauth=${token}` // Include the token in the Authorization header
          },
        });
        if (!response.ok) {
          // If the response is not ok, throw an error with the status
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        setUsers(data); // Set the users in state
      } catch (error) {
        setError(`Failed to fetch users: ${error.message}`);
        console.error('There was an error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []);
  
  
  const [name, setName] = useState("");
  const [list, setList] = useState(data);
  let handleDelete = (e) => {
    const newArr = list.filter(item => item.id !== e.id);
    setList(newArr);
  }
  return (
    <div className='adminPage d-flex'>
        <div className='leftOverlay'>
            <div className='leftUpperSideAdmin d-flex flex-column align-center pt-50'>
                <div className='topSide d-flex'>
                    <img src='./assets/logo.png' alt='logo' /> 
                    <img src='./assets/NUVMS.png' alt='text'/>
                </div>
                <h2>Admin Panel</h2>
                <ul className='linksAdmin'>
                    <li className='linkMenuAdmin'>Menu</li>
                    <Link to="/admin_user"><li className='linksAdminItem'>Drivers</li></Link>
                    <li className='linksAdminItem'>Users</li>
                    <li className='linksAdminItem'>Vehicles</li>
                    <li className='linksAdminItem'>Appointments</li>
                    <li className='linksAdminItem'>Auction</li>
                    <li className='linksAdminItem'>Reports</li>
                </ul>
            </div>
        </div>
        <div className='rightOverlay pl-50 pt-40'>
            <h2>Users</h2>
            <div className='searchAdmin'>
                <input className='adminSearch mr-50' placeholder='search by name' onChange={(e) => setName(e.target.value)}/>
                <Link to="/general"><button>Register new user</button></Link>
            </div>
            <h3 style={{color: 'white'}}>Total Users <span style={{color: 'red', paddingLeft: '20px'}}>{list.length}</span></h3>
            <div className='userInfo d-flex'>
                <h3 className='naming'>Name Surname</h3>
                <h3 className='naming'>Username</h3>
                <h3 className='naming'>Phone number</h3>
                <h3 className='email naming'>Email</h3>
                <h3 className='pr-20 naming'>Position</h3>
            </div>
            <div className='userInfo d-flex flex-column'>
                {list.map(us => {
                    if (us.name.toLowerCase().includes(name.toLowerCase())){
                        return <div className='userPersonal d-flex ' key={us.id}>
                            <h3>{us.name}</h3>
                            <h3 >{us.username}</h3>
                            <h3 >{us.phone}</h3>
                            <h3 className='email'>{us.email}</h3>
                            <h3>{us.position}</h3>
                            <img className='pr-30' src='./assets/update.png' width={30} height={30}/>
                            <img src='./assets/delete.png' width={30} height={30} onClick={() => handleDelete(us)}/>
                        </div>
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default AdminPageDriver