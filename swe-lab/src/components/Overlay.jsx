import React from 'react'
import {Link} from "react-router-dom";

function Overlay() {
  return (
    <div>
        <ul className='d-flex flex-column'>
            <li className='mt-20'>Personal Information</li>
            <li className='mt-20'>Tasks</li>
            <li className='mt-20'>History</li>
            <Link to="/"><li className='mt-25'>Back to Main Page</li></Link>
        </ul>
    </div>
  )
}

export default Overlay