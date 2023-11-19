import React, { useState } from 'react'
import {Link} from "react-router-dom";

function Header() {
  const [clickedSearch, setClickedSearch] = useState(false);
  let clickSearch = () => {
    setClickedSearch(prev => !prev);
  }
  return (
    <div className='header d-flex align-center justify-between pt-20'>
        <div className='rightSide d-flex ml-20 align-center'>
            <span className='pr-20'>Services</span>
            <span className='pr-20'>About Us</span>
            <span className='pr-20'>Contacts</span>
        </div>
        <div className='middlePart '>
          <img src='./assets/logo.png' alt='logo' className='pr-20'/>
          <img src='./assets/NUVMS.png' alt='logoText' />
        </div>
        <ul className='leftSide d-flex mr-40'>
            <input className='searchItem' placeholder='Search for a task' style={{display: clickedSearch ? 'block' : 'none'}}/>
            <img src='./assets/search.png' alt='search' className='pr-20' onClick={clickSearch}/>
            <img src='./assets/instagram.png' alt="insta" className='pr-20'/>
            <img src='./assets/facebook.png' alt="facebook" className='pr-20'/>
            <img src='./assets/twitter.png' alt="twitter" className='pr-20'/>
            <Link to="/auth"><img src='./assets/img/account.svg' alt='account' /></Link>
        </ul>
    </div>
  )
}

export default Header