import React from 'react'
import Header from './Header'
import '../person.css'
function PersonInfo() {
  return (
    <div className='personPage'>
    <div className='check'>
      <Header />
        <div className='d-flex justify-center personInfo'>Register new User</div>
        <div className='d-flex flex-wrap justify-center central'>
          <div className='d-flex flex-column item'>
            <span>username</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>password</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>national id</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>first name</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>middle name</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>last name</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>phone number</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>driving license</span>
            <input /> 
          </div>
          <div className='d-flex flex-column item'>
            <span>email</span>
            <input /> 
          </div>
          <button className='mt-50'>Register</button>
        </div>
        </div>
    </div>
  )
}

export default PersonInfo