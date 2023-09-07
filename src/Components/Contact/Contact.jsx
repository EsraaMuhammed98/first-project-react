import React, {  useState } from 'react'
import './Contact.css'
export default function Contact() {
  
  let [isUserNameLabelExist,setUserNameLabelExist] = useState(false)
  let [isUserAgeLabelExist,setUserAgeLabelExist] = useState(false)
  let [isUserEmailLabelExist,setUserEmailLabelExist] = useState(false)
  let [isUserPasswordLabelExist,setUserPasswordLabelExist] = useState(false)
  
  function handleInputChange(event){
    if(event.target.value ){
       setUserNameLabelExist(true) 
    } else {
      setUserNameLabelExist(false)
    }
  }


  function handlePasswordChange(event){
    if(event.target.value ){
      setUserPasswordLabelExist(true)
    } else {
      setUserPasswordLabelExist(false)
    }
  }
  function handleAgeChange(event){
    if(event.target.value ){
      setUserAgeLabelExist(true)
    } else {
      setUserAgeLabelExist(false)
    }
  }
  
  function handleEmailChange(event){
    if(event.target.value ){
      setUserEmailLabelExist(true)
    } else {
      setUserEmailLabelExist(false)
    }
  }
  

  return <>
  <section id='contact' className='w-50 m-auto '>
<div className="container">
  <div className="header">
    <h1>CONATCT SECTION</h1>
<div className="underline-style">
<span></span>
<span><i className='fa-solid fa-star'></i></span>
<span></span>
</div>
  </div>
    <form className='mt-5 my-5 p-3'>
      <label htmlFor="uN" className={isUserNameLabelExist?'block':'none'}>userName:</label>
        <input type="text" onChange={handleInputChange} id="uN" className='form-control' placeholder='userName' />
        <label htmlFor="uA" className={isUserAgeLabelExist?'block':'none'}>userAge:</label>
        <input type="number" onChange={handleAgeChange} id="uA"className='form-control' placeholder='userAge' />
      <label htmlFor="uE"  className={isUserEmailLabelExist?'block':'none'} >userEmail:</label>
        <input type="email" id="uE" onChange={handleEmailChange} className='form-control' placeholder='userEmail' />
      <label htmlFor="uP"className={isUserPasswordLabelExist?'block':'none'}>userPassword:</label>
        <input type="password" id="uP" onChange={handlePasswordChange} className='form-control' placeholder='userPassword' />
        <button className='btn' id='btn'>send Message</button>
    </form>
</div>
  </section>
  
  </>
}
