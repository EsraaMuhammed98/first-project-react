import React from 'react'
import './Footer.css'
export default function Footer() {
  return <>
<footer className=' text-center'>
<div className="footer-top">
    <div className="container">
<div className="row">
     <div className="col-md-4">
        <div className="location">
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
     </div>

     <div className="col-md-4">
        <div className="about">
            <h2>AROUND THE WEB</h2>
            <ul>
                <li><i className='fab fa-facebook'></i></li>
                <li><i className='fab fa-twitter'></i></li>
                <li><i className='fab fa-linkedin-in'></i></li>
                <li><i className='fa-solid fa-globe'></i></li>
            </ul>
        </div>
     </div>
     <div className="col-md-4">
        <div className="about-freelancer">
            <h2>ABOUT FREELANCER</h2>
           <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
     </div>
 </div>
</div>
</div>
 <div className="footer-down">
        <p>Copyright © Your Website 2021</p>
     </div>
 
 
</footer>
  </>
}
