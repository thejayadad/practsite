import React, {useState} from 'react'
import "./header.css"
import {Link} from "react-router-dom";


const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
        <header className='header'>
          <div className='container flex'>
            <div className='logo'>
              Sweets
            </div>
            <div className='nav'>
              <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                <li><a href='/'>home</a></li>
                <li><a href='/'>home</a></li>
                <li><a href='/'>home</a></li>
                <li><a href='/'>home</a></li>
              </ul>
            </div>
            <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
            </button>
          </div>
        </header>
    </div>
  )
}

export default Header