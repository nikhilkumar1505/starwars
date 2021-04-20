import React from 'react'
import "../app.css"

const Footer = () => {
    return (
        <>
        <hr className="line2"></hr>
        <div className="footer">
            <img className="footer-logo" src="images/footer_logo.png" alt="footer_logo"/>
            <div className='footer-nav'>
              <ul>
                  <li className='footer-list'>TERMS OF USE </li>
                  <li className='footer-list'>LEGAL NOTICES </li>
                  <li className='footer-list'> PRIVACY POLICY</li>
                  <li className='footer-list'> STAR WARS HELPDESK</li>
                  <li className='footer-list'> STAR WARS AT DISNEY STORE </li>
              </ul>
          </div>
          
          <div className="footer-company">
              <p className='footer-name'>TM & c Lucasfilm Ltd.All Rights Reserved</p>
          </div>
          </div>
          </>
        
    )
}

export default Footer
