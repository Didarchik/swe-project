import React from 'react'
import Header from './components/Header'
import {Link} from "react-router-dom"

function Authorzation() {
  return (
    <div className='wrapper'>
        <div className='check'>
            <Header />
            <div className='authBlock d-flex flex-column justify-center mt-50'>
                <div className='d-flex flex-column justify-center'>
                    <div className='usernameBlock d-flex flex-column'>
                        <span style={{width: "200px"}}>username</span>
                        <input placeholder='' />
                    </div>
                    <div className='passwordBlock d-flex flex-column'>
                        <span style={{width: "200px"}}>password</span>
                        <input placeholder='' />
                    </div>
                </div>
                <Link to="/admin"><button className='btnAuth'>Log in</button></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Authorzation