import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import basket from '../../assets/basket.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      
      {/* LOGO */}
      <Link to='/'> <img src={logo} alt="logo" className="logo" /></Link>

      {/* MENU */}
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu==="contact"?"active":""}>Contact Us</a>
      </ul>

      {/* RIGHT SIDE */}
      <div className="navbar-right">
        <img src={search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to='/cart'><img src={basket} alt="basket" /></Link>
          <div className={ getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>

    </div>
  )
}

export default Navbar