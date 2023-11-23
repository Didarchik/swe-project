import React, { useState, useEffect } from 'react'
import Overlay from './components/Overlay.jsx'
import Header from './components/Header.jsx'
import data from './data.js';
import data1 from "./data1.js";
import { Link } from 'react-router-dom';

function AdminPageUser({setCookieValue, CookieValue}) {
    
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
                      <li className='linksAdminItem'>Drivers</li>
                      <Link to="/admin_menu"><li className='linksAdminItem'>Users</li></Link>
                      <li className='linksAdminItem'>Vehicles</li>
                      <li className='linksAdminItem'>Appointments</li>
                      <li className='linksAdminItem'>Auction</li>
                      <li className='linksAdminItem'>Reports</li>
                  </ul>
              </div>
          </div>
          <div className='rightOverlay pl-50 pt-40'>
            <h2>Drivers</h2>
            <div className='searchAdmin'>
                <input className='adminSearch mr-50' placeholder='search by name' />
                <Link to="/general"><button>Add new driver</button></Link>
            </div>
            <h3 style={{color: 'white'}}>Total Drivers <span style={{color: 'red', paddingLeft: '20px'}}>{data.length}</span></h3>
            <div className='userInfo d-flex'>
                <h3 className='naming'>Name Surname</h3>
                <h3 className='naming'>Vehicle Model</h3>
                <h3 className='naming'>License plate</h3>
                <h3 className='email naming'>Phone</h3>
                <h3 className='pr-20 naming'>Tasks</h3>
            </div>
            <div className='userInfo d-flex flex-column'>
                {data1.map(us => {
                        return <div className='userPersonal d-flex ' key={us.id}>
                            <h3>{us.name}</h3>
                            <h3 >{us.vehicle}</h3>
                            <h3 >{us.license}</h3>
                            <h3 className='email'>{us.phone}</h3>
                            <h3>{us.position}</h3>
                            <img className='pr-30' src='./assets/update.png' width={30} height={30}/>
                            <img src='./assets/delete.png' width={30} height={30}/>
                        </div>
                    
                })}
            </div>
        </div>
      </div>
    )
  }
  
  export default AdminPageUser