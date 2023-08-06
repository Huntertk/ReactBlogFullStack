import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../App.css'

const Layout = () => {
  return (
    <>
    <header>
     <Header />   
    </header> 
    <main className='mainContainer'>
        <Outlet />
    </main>
    </>
  )
}

export default Layout
