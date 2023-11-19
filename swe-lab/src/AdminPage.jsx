import React, { useState } from 'react'
import Overlay from './components/Overlay'
import Header from './components/Header'
import data from './data.js';

function AdminPage() {
  const [name, setName] = useState("");
  console.log(name);
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
                    <li className='linksAdminItem'>Users</li>
                    <li className='linksAdminItem'>Drivers</li>
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
                <button>Register new user</button>
            </div>
            <h3 style={{color: 'white'}}>Total Users <span style={{color: 'red', paddingLeft: '20px'}}>{list.length}</span></h3>
            <div className='userInfo d-flex'>
                <h3>Name Surname</h3>
                <h3>Username</h3>
                <h3>Phone number</h3>
                <h3 className='email'>Email</h3>
                <h3 className='pr-20'>Position</h3>
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

export default AdminPage