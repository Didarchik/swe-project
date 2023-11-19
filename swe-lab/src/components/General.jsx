import React from 'react'
import '../general.css'
import {Link} from 'react-router-dom'
import Header from './Header'

function General() {
  return (
    <div className='wrapper'>
      <Header />

      <div className='d-flex justify-center'>
        <div className='generalBlock mt-50'>
            <Link to="/page"><div className='items'>Users</div></Link>
            <Link to="/tasks"><div className='items'>Tasks</div></Link>
            <div className='items'>Drivers</div>
            <div className='items'>Vehicles</div>
            <div className='items'>Maintenance personnel</div>
            <div className='items'>Gas fueling personnel</div>
        </div>
      </div>
    </div>
  )
}

export default General