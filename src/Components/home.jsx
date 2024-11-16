import React from 'react'
import Navbar from './NavbarCom'
import SlideBar from './slideBarCom'
import Dashboard from './DashboardCom'

export default function Home() {
  return (
  <>
  <Navbar/>
 <div className="App d-flex">
 <SlideBar/>
 <Dashboard/>
 </div>
  </>
  )
}
