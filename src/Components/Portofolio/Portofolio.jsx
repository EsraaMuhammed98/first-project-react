import React, { useState } from 'react'
import './portfolio.css'
import cake from '../../Images/cake.png'
import houes from '../../Images/houes.png'
import tent from '../../Images/tent.png'

export default function Portofolio() {

   let picsArr=[
       houes,
    cake,
    tent,
    houes,
    cake,
    tent   
]
 let [isPic,setPic]=useState('')
    function displayThisImg(src){
        setPic(src)
    }
  return <>
  <section id='portfolio' className='my-5'>
    <div className="container">
    <div className="header py-3">
<h1>PORTFOLIO COMPONENT</h1>
<div className="underline-style">
<span></span>
<span><i className='fa-solid fa-star'></i></span>
<span></span>
</div>
    </div>

    <div className="portfolio-cards">
        <div className="row g-5">
 {picsArr.map((pic,index)=>{
return(
       <div className="col-md-4" key={index}>
       <div className="pic"  onClick={()=>displayThisImg(pic)} >
       <img className='w-100 rounded-3'  src={pic} alt="house" />
       </div>
       </div>
 )
})
}
{ isPic && <div onClick={()=>setPic('')} className='displayImg position-fixed '> 
   <img onClick={(e)=>e.stopPropagation()} src={isPic} alt="" className='' />
   </div>
   }
           
        </div>
    </div>




    </div>
  </section>


  
  </>
}
