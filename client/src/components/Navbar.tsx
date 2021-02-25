import React from 'react';



export default function Navbar() {
  return (
    <div>
       <nav className="navbar">
    <ul className="navbar-nav">
      <li >
        <a href="#" className="nav-link">
        <img  className="svg-inline--fa"  src="https://img.icons8.com/cotton/64/000000/menu.png"/>
         
         
         
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
        
          <span className="link-text">Cats</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
          
          <span className="link-text">Aliens</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
          
          <span className="link-text">Space</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link">
        
          <span className="link-text">Shuttle</span>
        </a>
      </li>

      <li className="nav-item" id="themeButton">
        <a href="#" className="nav-link">
        
            
      
        
         
          <span className="link-text">Themify</span>
        </a>
      </li>
    </ul>
  </nav>

    </div>
  )
}


