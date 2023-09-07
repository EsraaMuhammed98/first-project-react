import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {
    
  return<>
  
  <nav className="navbar navbar-expand-sm">
      <div className="container">
        <Link className="navbar-brand" to="">START FRAMEWORK</Link> 
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="about">ABOUT</Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="portofolio">PORTOFOLIO</Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="contact">CONTACT</Link> 
                </li>
                
            </ul>
         
        </div>
    </div>
  </nav>
  
  
  </>
}
