import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

      <div className="footer-content">


        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate id quo mollitia nobis harum itaque suscipit quidem
            ipsam dicta? Dolorum facilis explicabo quis vitae nostrum
            impedit dolor modi rem at!
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>


        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>


        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+233-243254482</li>
            <li>masada@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2026 Masada.com - All Rights Reserved.
      </p>

    </div>
  )
}

export default Footer