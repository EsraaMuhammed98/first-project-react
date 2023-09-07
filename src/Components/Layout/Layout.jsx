import React from 'react'
import Nav from '../Nav/Nav.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return <>
<Nav/>

  <Outlet></Outlet>
 <Footer/>
  
  
  
  </>
}
