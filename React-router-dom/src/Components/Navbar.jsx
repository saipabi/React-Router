// import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1>Blogs</h1>
        <ul  className="head">
            
        <li><Link to="All">All</Link></li>
            <li><Link to="Cyber"> Cyber Security</Link></li>
            
            <li><Link to="FullStackDevelopment">Full Stack Development</Link></li>
            <li><Link to="Datascience">Data Science</Link></li>
            <li><Link to="Carrier">Carrier</Link></li>
            {/* <li> <Link to="user/1">User1</Link></li> */}
            {/* <li> <Link to="user/2">User2</Link></li> */}
            {/* <li> <Link to="user/3">User3</Link></li> */}
            {/* <li> <Link to="user/4">User4</Link></li> */}
            
        </ul>
    </nav>
  )
}

export default Navbar