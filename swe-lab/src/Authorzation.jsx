import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Cookies from 'js-cookie';
import axios from 'axios';

function Authorization({setCookieValue, cookieValue}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://80.240.17.228:9999/api/auth/jwt/login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'username': username,
          'password': password
        })
      });
      const myCookie = Cookies.get('fastapiusersauth');
      setCookieValue(myCookie);
      console.log(cookieValue, "Page Auth");
      if (response.ok || response.status === 204) {
        console.log('Login successful');

        
        navigate("/admin_menu");
      } else {
        const errorData = await response.text();
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
  /*const handleLogin = async (event) => {//Register
    event.preventDefault();
  
    try {
      const response = await fetch('http://80.240.17.228:9999/api/auth/register', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json', // Updated content type
        },
        body: JSON.stringify({
          email: username, // Assuming the username state variable holds the email
          password: password,
          is_active: true, // Set true or as appropriate for your app logic
          is_superuser: false, // Set as appropriate for your app logic
          is_verified: false, // Set as appropriate for your app logic
        })
      });
  
      console.log(response);
  
      // Check for OK status or status is 204, which means success
      if (response.ok || response.status === 201) {
        // Handle successful registration. You might want to navigate to a confirmation page or login page
        navigate("/admin"); // Adjust as needed
      } else {
        // If there's an error, handle it here
        const errorData = await response.text();
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }
  };*/
  
  
  

  return (
    <div className='wrapper'>
        <div className='check'>
            <Header />
            <div className='authBlock d-flex flex-column justify-center mt-50'>
                <form className='d-flex flex-column justify-center' onSubmit={handleLogin}>
                    <div className='usernameBlock d-flex flex-column'>
                        <span style={{width: "200px"}}>username</span>
                        <input
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder=''
                        />
                    </div>
                    <div className='passwordBlock d-flex flex-column'>
                        <span style={{width: "200px"}}>password</span>
                        <input
                          type='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder=''
                        />
                    </div>
                    <button type='submit' className='btnAuth'>Log in</button>
                </form>
            </div>
            
        </div>
    </div>
  );
}

export default Authorization;
