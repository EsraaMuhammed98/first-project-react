import React from 'react'
import boy from '../../Images/avataaars.svg' 
import '../About/About.css'

export default function Home() {
  return <>
  
 <section id='home'>
  <div className="container">
<div className="header text-center">
  <img className='w-25 mb-3' src={boy} alt="" />
 <div className="start"><h1>START FRAMEWORK</h1></div>
<div className="underline-style">
<span></span>
<span><i className='fa-solid fa-star'></i></span>
<span></span>
</div>
<div className="home-footer my-3">
<p>Graphic Artist - Web Designer - Illustrator</p>
</div>
</div>
</div>
 </section>

  </>
}
