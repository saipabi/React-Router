// import React from 'react'
// import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'


const All = () => {
  return (

    

    <div><ul className='All'>
    
       <li className='all'><Link to="Cyber Security & Career">Cyber Security</Link></li>
            
            <li className='all'><Link to="About">Full Stack Development</Link></li>
            <li className='all'><Link to="Cyber">Data Science</Link></li>
            <li className='all'><Link to="Career">Career</Link></li>
            </ul>
            </div>


        
            
  )
}

export default All;