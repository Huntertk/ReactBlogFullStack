import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import { GrTextAlignRight } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState('close')

  const handleSideNavBtn  = () => {
    setIsNavOpen((prev) => {
      return prev === 'open' ? 'close' : 'open'
    })

  } 

  return (
    <nav className='navContainer'>
      <Link to="/"><h3>Blog</h3></Link>
      <div className="navBtn">
        {
          isNavOpen === 'close' ? 
          <GrTextAlignRight className='navIcon' onClick={handleSideNavBtn}/>
          :
          <ImCross className='navIcon' onClick={handleSideNavBtn}/>
        }

      </div>
      <div className={`${isNavOpen} navLinks`}>
        <Link to="/" onClick={() => setIsNavOpen('close')}><p>Home</p></Link>
        <Link to="blog/create" onClick={() => setIsNavOpen('close')}><p>Create Post</p></Link>
        <Link to="/about" onClick={() => setIsNavOpen('close')}><p>About Us</p></Link>
      </div>
    </nav>
  )
}

export default Header
