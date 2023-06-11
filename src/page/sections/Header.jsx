import React, { useState } from 'react'

import logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'

const Header = () => {
    const nav = ['Home', 'About', 'Contact', 'Blog', 'Careers']
    const navLink = ['#', '#', '#', '#', '#']

    const [MobileOpen, setMobileOpen] = useState(false)

    const Menu = () => {
        MobileOpen === false ? setMobileOpen(true) : setMobileOpen(false)
    }

  return (
    <>
        <header>
            <div className="header_container container">
                <div className="flex_wrap">
                    <div className="header_logo">
                        <a href="#"><img src={logo} alt="easybank" /></a>
                    </div>
                    <button aria-label='Menu' className='Menu' onClick={Menu}><img src={MobileOpen === true ? close : hamburger} alt="" aria-hidden/></button>
                </div>

                <nav data-show = {MobileOpen}>
                    <ul>
                        {nav.map((text,index) => (
                            <li key={index}><a href={navLink[index]}>{text}</a></li>
                        ))}
                    </ul>
                </nav>
                
                <div>
                    <button className="req_inv">Request Invite</button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header