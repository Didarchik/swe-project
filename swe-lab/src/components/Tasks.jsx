import React from 'react'
import Header from './Header'

function Tasks() {
  return (
    <div className='task'>
    <Header />
    <div className='tasksPage'>
        <div className='d-flex justify-center personInfo'>Register new task</div>
        <div className='d-flex flex-wrap central'>
          <div className='d-flex flex-column item'>
              <span>start location</span>
              <input /> 
            </div>
            <div className='d-flex flex-column item'>
              <span>final location</span>
              <input /> 
            </div>
            <div className='d-flex flex-column item'>
              <span>status</span>
              <input /> 
            </div>
            <div className='d-flex flex-column item'>
              <span>driver id</span>
              <input /> 
            </div>
        </div>
        <button className='btnTask'>Register</button>
    </div>
    </div>
  )
}

export default Tasks