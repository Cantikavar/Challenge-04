import React from 'react'
import logoFacbook from '../../IMG/icon_facebook.png'
import logoInstagram from '../../IMG/icon_instagram.png'
import logoTwitter from '../../IMG/icon_twitter.png'
import logoMail from '../../IMG/icon_mail.png'
import logoTwicth from '../../IMG/icon_twitch.png'
import logoDashboard from '../../IMG/logo.png'
import '../Footer/FooterDefault.css'

export const FooterDefault = () => {
  return (
    <div>
    <div className='Footer-Container'>
    <div className='footer-content1'>
    <ul>
      <li>Jalan Suroyo No. 161 Mayangan 
        Kota Probolonggo 672000</li>
      <li>binarcarrental@gmail.com</li>
      <li>081-233-334-808</li>
    </ul>
    </div>

    <div className='footer-content2'>
    <ul>
      <li>Our Services</li>
      <li>Why Us</li>
      <li>Testimonial</li>
      <li>FAQ</li>
    </ul>
    </div>

    <div className='footer-content3'>
    <p>Connect with us</p>
  <ul>
    <li><img alt='' src={logoFacbook} className='logoFacbook' /></li>
    <li><img alt='' src={logoInstagram} className='logoInstagram' /></li>
    <li><img alt='' src={logoTwitter} className='logoTwitter' /></li>
    <li><img alt='' src={logoMail} className='logoMail' /></li>
    <li><img alt='' src={logoTwicth} className='logoTwicth' /></li>
  </ul>
  </div>

  <div className='footer-content4'>
  <p>Copyright Binar 2022</p>
  <img alt='' src={logoDashboard} className='logoDashboard' />
  </div>





    </div>
    
    
    
    
    </div>
  )
}
